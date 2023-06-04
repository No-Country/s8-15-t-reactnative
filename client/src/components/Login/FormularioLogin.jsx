import { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import colors from '../../utils/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';



const FormularioLogin = () => {
    
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');

    const changeEmail = (value) => {
        setEmail(value);
    };
    const changeContraseña = (value) => {
        setContraseña(value);
    }
    
    const [showPassword, setShowPassword] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.body}>
            <View>
                
                <View style={styles.contentInput}>
                    <TextInput placeholder='correo@electronico.com.ar' keyboardType='email-address' onChangeText={(value) => changeEmail(value)} value={email} />
                </View>
                <View style={styles.contentInput}>
                
                    <TextInput placeholder='Contraseña' keyboardType='visible-password' passwordRules={true} secureTextEntry={!showPassword} onChangeText={(value) => changeContraseña(value)} value={contraseña}/>
                </View>
                <View>
                    <TouchableOpacity>
                    <Text style={styles.btnOlvido}>
                        ¿Olvidaste tu contraseña?
                    </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.textBtn}>Iniciar Sesion</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text className='mt-8' style={{ fontFamily: 'poppins-regular', fontSize: 16, 
                    lineHeight: 24, textAlign: 'center', fontWeight: '400', color: "#383081" }}>
                    También podes conectarte desde: 
                    </Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.btnGoogle}>
                        <Text style={styles.textBtnGoogle}>Iniciar con Google</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.btnFacebook}>
                        <Text style={styles.textBtnFacebook}>Iniciar con Facebook</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text className='mt-8' style={{ fontFamily: 'poppins-regular', fontSize: 16, lineHeight: 24, textAlign: 'center', fontWeight: '400', color: "#383081" }}>
                        ¿Aún no tienes una cuenta? 
                    </Text>
                    <TouchableOpacity>
                    <Text style={ styles.btnRegistro}> Registrarte </Text>
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

    contentInput: {
        width: 326,
        height: 30,
        borderColor: colors.violeta,
        borderWidth: 1,
        borderRadius: 30,
        justifyContent: 'center',
        paddingLeft: 5,
        marginBottom: 8,
    },

    btn: {
        width: 230,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 50,
        borderRadius: 30,
        //borderWidth: 1,
        backgroundColor: '#E5E6EA',
        //fontSize: 30,       
          
    },

    textBtn: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 500
    },
    
    btnGoogle: {
        width: 152,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop : 81,
        marginLeft: 4.44,
        marginRight: 53.33,
        borderRadius: 30,
        borderWidth: 1,
        fontSize: 30,    
        borderColor: '#A3ADB2'   
          
    },

    textBtnGoogle: {
        color: '#0B3C6A',
        fontSize: 14,
        fontWeight: 500
    },

    btnFacebook: {
        width: 153,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        borderRadius: 30,
        borderWidth: 1,
        fontSize: 30,       
        borderColor: '#A3ADB2'
          
    },

    textBtnFacebook
    : {
        color: '#0B3C6A',
        fontSize: 14,
        fontWeight: 500
    },

    btnRegistro: {
        fontFamily: 'poppins-regular', 
        fontSize: 16, 
        lineHeight: 24, 
        textAlign: 'center', 
        fontWeight: 'bold', 
        color: '#55B7FF',
    },

    btnOlvido: {
       fontFamily: 'poppins-regular', 
       fontSize: 16, 
       lineHeight: 24, 
       textAlign: 'center', 
       fontWeight: '400', 
       color: "#938F99", 
       textDecorationLine: 'underline'
    }
    

})

export default FormularioLogin;
