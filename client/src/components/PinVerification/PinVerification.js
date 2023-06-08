import {
	View,
	Text,
	TouchableOpacity,
	Image,
	ActivityIndicator,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useNavigation } from '@react-navigation/native'
import fondo from '../../Images/wave.webp'
import { useState, useCallback } from 'react'
import { OTPInput } from '../OTPInput/OTPInput'
import colors from '../../utils/colors'
import * as SecureStore from 'expo-secure-store';

SplashScreen.preventAutoHideAsync()

const PinVerification = () => {
	const navigation = useNavigation()
	const [otpValue, setOtpValue] = useState(['', '', '', ''])

	const checkPin = async () => {
		const pin = await SecureStore.getItemAsync('pin')
		if (pin) {
			if (pin.length === 4 && pin === otpValue.join('')) {
				console.log('pin correcto')
				navigation.navigate('Login')
			} else {
				console.log('pin incorrecto')
			}
		} else {
			console.log('pin no existe')
			const savePin = async () => {
				const pin = otpValue.join('')
				if (pin.length === 4) {
					await SecureStore.setItemAsync('pin', pin)
					console.log('pin guardado ' + pin)
				}
			}
			savePin()
		}
	}

	const clearPin = async () => {
		await SecureStore.deleteItemAsync('pin')
		console.log('pin eliminado')
	}

	const handleOtpChange = newValue => {
		setOtpValue(newValue)
	}
	const [fontsLoaded] = useFonts({
		'poppins-medium': require('../../../assets/poppinsFonts/Poppins-Medium.ttf'),
		'poppins-regular': require('../../../assets/poppinsFonts/Poppins-Regular.ttf'),
	})

	const onLayoutButtom = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync()
		}
	}, [fontsLoaded])

	if (!fontsLoaded) {
		return <ActivityIndicator size='large' color={colors.violeta} />
	}
	return (
		<View onLayout={onLayoutButtom}>
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
					style={{
						height: '100%',
						alignItems: 'center',
						marginTop: '20%',
					}}
				>
					<Text
						className='text-white font-semibold text-2xl'
						style={{
							fontFamily: 'poppins-medium',
						}}
					>
						Crear PIN
					</Text>
					<Text
						className='text-white text-2xl font-white text-center font-semibold px-18 mt-[20%]'
						style={{
							fontFamily: 'poppins-regular',
						}}
					>
						Añadir {'\n'} PIN de seguridad
					</Text>
					<Text
						className='text-white text-base font-white text-center font-semibold px-20 mt-10'
						style={{
							fontFamily: 'poppins-regular',
						}}
					>
						Por favor ingrese {'\n'} un código de 4 dígitos
					</Text>
					<View className='mt-[15%] flex justify-center items-center flex-row px-10'>
						<OTPInput
							length={4}
							value={otpValue}
							onChange={handleOtpChange}
							disabled={false}
						/>
					</View>
					<TouchableOpacity
						className='flex justify-center items-center py-2.5 px-16 rounded-3xl mt-14 bg-white'
						onPress={() => {
							checkPin()
						}}
					>
						<Text
							className='text-center text-violeta text-[18px] font-semibold'
							style={{
								fontFamily: 'poppins-regular',
							}}
						>
							Confirmar
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						className='flex justify-center items-center py-2.5 px-16 rounded-3xl mt-14 bg-white'
						onPress={() => {
							clearPin()
						}}
					>
						<Text
							className='text-center text-violeta text-[18px] font-semibold'
							style={{
								fontFamily: 'poppins-regular',
							}}
						>
							Borrar PIN
						</Text>
					</TouchableOpacity>
					<Text
						className='text-white text-base font-white text-center font-semibold px-18 mt-14'
						style={{
							fontFamily: 'poppins-regular',
						}}
					>
						Recuerde este número {'\n'} en caso de no poder ingresar {'\n'} con
						otros métodos.
					</Text>
				</View>
			</LinearGradient>
		</View>
	)
}

export default PinVerification
