import { useState } from 'react'
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
	Image,
} from 'react-native'
import colors from '../../utils/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import InputsBasic from '../../components/InputsBasic/InputsBasic'
import {useNavigation} from '@react-navigation/native'
import {useDispatch} from 'react-redux'
import {setUserData} from '../../reduxApp/feature/userSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import {login} from '../../reduxApp/feature/authSlice'

const FormularioLogin = () => {

	const navigation = useNavigation()
	const dispatch = useDispatch()
	const [input, setInput] = useState({
		email: '',
		password: '',
	})
	

const handleLogin = async () => {
  try {
    const response = await axios.post('https://s8-15-t-reactnative-production.up.railway.app/login', input);
    const data = response.data;

    // Guardar los datos del usuario en AsyncStorage
    await AsyncStorage.setItem('userData', JSON.stringify(data));

    dispatch(setUserData(data));
	dispatch(login())
    console.log(data);
  } catch (error) {
    console.log('Error:', error);
  }
};

	  
			
		

	const [showPassword, setShowPassword] = useState(false)

	return (
		<SafeAreaView style={styles.container} className='w-full'>
			<View style={styles.body}>
				<View className='w-full px-5'>
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
						value={input.email}
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
						onChangeText={(text) => setInput({...input, password: text}) }
						value={input.password}
						secureTextEntry={true}
					/>
					<TouchableOpacity className='mt-3'>
						<Text style={styles.btnOlvido}>¿Olvidaste tu contraseña?</Text>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => handleLogin()} className='mt-5 w-min' style={styles.btn}>
						<Text
							className='text-lg text-white'
							style={{ fontFamily: 'poppins-semiBold' }}
						>
							Iniciar Sesión
						</Text>
					</TouchableOpacity>
					<View>
						<Text
							className='mt-8'
							style={{
								fontFamily: 'poppins-regular',
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
					<View className='flex flex-row items-center justify-between mt-4'>
						<TouchableOpacity className='flex flex-row items-center border border-solid border-gris_border px-1.5 py-1 rounded-full'>
							<Image
							source={require('../../../assets/logoGoogle.png')}
							className='h-5 w-5'
							resizeMode='contain'
							/>
							<Text className='text-base text-azul_marino' style={{fontFamily: 'poppins-medium'}}>
								Iniciar con Google
							</Text>
						</TouchableOpacity>
						<TouchableOpacity className='flex flex-row items-center border border-solid border-gris_border px-1.5 py-1 rounded-full'>
							<Image
							source={require('../../../assets/logoFacebook.png')}
							className='h-5 w-5'
							resizeMode='contain'
							/>
							<Text className='text-base text-azul_marino' style={{fontFamily: 'poppins-medium'}}>Iniciar con Facebook</Text>
						</TouchableOpacity>
					</View>
					<View>
						<Text
							className='mt-8'
							style={{
								fontFamily: 'poppins-regular',
								fontSize: 16,
								lineHeight: 24,
								textAlign: 'center',
								fontWeight: '400',
								color: '#383081',
							}}
						>
							¿Aún no tienes una cuenta?
						</Text>
						<TouchableOpacity onPress={() => navigation.navigate('Register')}>
							<Text style={styles.btnRegistro}> Registrarte </Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	body: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	btn: {
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
		// marginHorizontal: 50,
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

	textBtnFacebook: {
		color: '#0B3C6A',
		fontSize: 14,
		fontWeight: 500,
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
		color: '#938F99',
		textDecorationLine: 'underline',
	},
})

export default FormularioLogin
