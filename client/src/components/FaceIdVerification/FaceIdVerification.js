import { useEffect, useState, useCallback } from 'react'
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	ActivityIndicator,
	Alert,
	Pressable,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import * as LocalAuthentication from 'expo-local-authentication'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useNavigation } from '@react-navigation/native'
import colors from '../../utils/colors'
import fondo from '../../Images/wave.webp'
import faceId from '../../../assets/faceIdVioleta.png'

SplashScreen.preventAutoHideAsync()

const FaceIdVerification = () => {
	const navigation = useNavigation()
	const [fontsLoaded] = useFonts({
		'poppins-medium': require('../../../assets/poppinsFonts/Poppins-Medium.ttf'),
		'poppins-regular': require('../../../assets/poppinsFonts/Poppins-Regular.ttf'),
	})

	const [isAuthenticated, setIsAuthenticated] = useState(false)

	useEffect(() => {
		authenticate()
	}, [])

	const authenticate = async () => {
		const isFaceIdSupported = await LocalAuthentication.hasHardwareAsync()

		if (isFaceIdSupported) {
			const result = await LocalAuthentication.authenticateAsync({
				promptMessage: 'Autentique su rostro',
				cancelLabel: 'Cancelar',
				disableDeviceFallback: true,
				authenticationType:
					LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION,
			})

			if (result.success) {
				setIsAuthenticated(true)
				navigation.navigate('Bar')
			} else {
				setIsAuthenticated(false)
				Alert.alert('Error', 'No se pudo autenticar')
				navigation.navigate('Security')
			}
		} else {
			setIsAuthenticated(false)
			Alert.alert('Error', 'Face ID no es compatible')
			navigation.navigate('Security')
		}
	}

	const onLayoutFaceID = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync()
		}
	}, [fontsLoaded])

	if (!fontsLoaded) {
		return <ActivityIndicator size='large' color={colors.violeta} />
	}

	return (
		<View onLayout={onLayoutFaceID}>
			<LinearGradient
				colors={['#7029E2', '#55B7FF']}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				style={{ height: '100%', width: '100%' }}
			>
				<Image
					source={fondo}
					className='absolute w-full object-fill justify-center items-center -bottom-5'
				/>
				<View
					style={{ height: '100%', alignItems: 'center', marginTop: '45%' }}
				>
					<Text
						className='text-center text-white font-semibold text-2xl'
						style={{
							fontFamily: 'poppins-medium',
						}}
					>
						Verificar su identidad:
					</Text>
					<Text
						className='text-center text-white text-base mt-8 px-12'
						style={{
							fontFamily: 'poppins-regular',
						}}
					>
						Nos tomamos en serio tu seguridad, por favor confirme su identidad:
					</Text>
					<View>
						<View className='flex justify-center items-center mt-12'>
							<View className='bg-white w-28 h-28 rounded-full flex justify-center items-center'>
								<Pressable onPress={authenticate}>
									<Image source={faceId} className='h-[55] object-scale-down' />
								</Pressable>
							</View>
						</View>
						<Text
							className='text-center text-white font-semibold text-base mt-12 px-32'
							style={{
								fontFamily: 'poppins-regular',
							}}
						>
							Escanear el rostro para acceder.
						</Text>
					</View>
					<TouchableOpacity
						className='flex justify-center items-center py-2.5 px-16 rounded-3xl mt-10 bg-white'
						onPress={() => {
							navigation.navigate('Security')
						}}
					>
						<Text
							className='text-center text-violeta font-bold text-base leading-6'
							style={{
								fontFamily: 'poppins-medium',
							}}
						>
							Cancelar
						</Text>
					</TouchableOpacity>
				</View>
			</LinearGradient>
		</View>
	)
}

export default FaceIdVerification
