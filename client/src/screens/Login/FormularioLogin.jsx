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

const FormularioLogin = () => {
	const [email, setEmail] = useState('')
	const [contraseña, setContraseña] = useState('')
	const navigation = useNavigation()

	
	const changeEmail = value => {
		setEmail(value)
	}
	const changeContraseña = value => {
		setContraseña(value)
	}

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
						onChangeText={setEmail}
						value={email}
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
						onChangeText={setContraseña}
						value={contraseña}
					/>
					<TouchableOpacity className='mt-3'>
						<Text style={styles.btnOlvido}>¿Olvidaste tu contraseña?</Text>
					</TouchableOpacity>

					<TouchableOpacity className='mt-5 w-min' style={styles.btn}>
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
