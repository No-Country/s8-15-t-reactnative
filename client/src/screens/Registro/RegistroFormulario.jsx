import { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Alert } from 'react-native'
import colors from '../../utils/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import InputsBasic from '../../components/InputsBasic/InputsBasic'
import axios from 'axios'
import {useNavigation} from '@react-navigation/core'

const RegistroFormulario = () => {
   
    const [input, setInput] = useState({
        name: '',
        email: '',
        password: ''

    });
    const navigation = useNavigation()

    const buttonPressed = () => {
       if(input.name === '' || input.email === '' || input.password === ''){
           Alert.alert('Error', 'Todos los campos son obligatorios')
       }
       else{
           axios.post('https://s8-15-t-reactnative-production.up.railway.app/register', input)
           .then(res => {
               console.log(res.data)
               navigation.navigate('Login')
           })
           .catch(err => {
               console.log(err)
           })
       }
    }

    return (
        <SafeAreaView style={styles.container} className='w-full'>
            <View style={styles.body}>
                <View className='w-full px-2'>
                    <InputsBasic
                        icon={
                            <MaterialCommunityIcons
                                name='account-outline'
                                size={24}
                                color={colors.gris_texto}
                            />
                        }
                        placeholder={'Nomber y Apellido'}
                        onChangeText={(text) => setInput({...input, name: text})}
                        nombreApellido={input.name}
                    />
                    <InputsBasic
                        icon={
                            <MaterialCommunityIcons
                                name='email-outline'
                                size={24}
                                color={colors.gris_texto}
                            />
                        }
                        placeholder={'correo@electronico.com.ar'}
                        onChangeText={(text) => setInput({...input, email: text})}
                        email={input.email}
                    />
                    <InputsBasic
                        icon={
                            <MaterialCommunityIcons
                                name='lock-outline'
                                size={24}
                                color={colors.gris_texto}
                            />
                        }
                        placeholder={'Contraseña'}
                        onChangeText={(text) =>setInput({...input, password: text})}
                        contraseña={input.password}
                    />


                    <TouchableOpacity className='mt-5 w-min' style={styles.btn} onPress={() =>  buttonPressed()}>
                        <Text className='text-lg text-white'>

                            Registrarme
                        </Text>
                    </TouchableOpacity>

                    <View>
                        <Text
                            className='mt-8'
                            style={{

                                fontSize: 16,
                                lineHeight: 24,
                                textAlign: 'center',
                                fontWeight: '400',
                                color: '#383081',
                            }}
                        >
                            También podes conectarte desde:
                        </Text>
                    </View>
                    <View className='flex flex-row items-center justify-between mt-4 w-full'>
                        <TouchableOpacity className='flex flex-row items-center border border-solid border-gris_border px-2 py-1 rounded-full'>
                            <Image
                                source={require('../../../assets/logoGoogle.png')}
                                className='h-5 w-5'
                                resizeMode='contain'
                            />
                            <Text className='text-base text-azul_marino' >
                                Iniciar con Google
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='flex flex-row items-center border border-solid border-gris_border px-2 py-1 rounded-full'>
                            <Image
                                source={require('../../../assets/logoFacebook.png')}
                                className='h-5 w-5'
                                resizeMode='contain'
                            />
                            <Text className='text-base text-azul_marino' >
                                Iniciar con Facebook</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text className='mt-8'
                            style={{
                                fontSize: 16,
                                lineHeight: 24,
                                textAlign: 'center',
                                fontWeight: '400', color: "#383081"
                            }}>
                            ¿Ya tenés un perfil?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                            <Text style={styles.btnInicioSesion}> Iniciar Sesión </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    body: {
        justifyContent: "center",
        alignItems: "center"
    },

    btn: {

        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 50,
        borderRadius: 30,
        backgroundColor: '#E5E6EA',
    },

    textBtn: {
        color: '#FFFFFF',

    },

    textBtnGoogle: {
        color: '#0B3C6A',
        fontSize: 14,
        fontWeight: 500,

    },

    textBtnFacebook
        : {
        color: '#0B3C6A',
        fontSize: 14,
        fontWeight: 500
    },

    btnInicioSesion: {

        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#55B7FF',
    }

})

export default RegistroFormulario;
