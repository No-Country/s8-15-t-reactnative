import { useState, useCallback } from 'react'
import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import fondo from '../../Images/wave.webp'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useNavigation } from '@react-navigation/native'

SplashScreen.preventAutoHideAsync()

const Security = () => {
	const navigation = useNavigation()
	const [checkbox1, setCheckbox1] = useState(true)
	const [checkbox2, setCheckbox2] = useState(false)
	const [checkbox3, setCheckbox3] = useState(false)

	const handleCheckbox1Change = () => {
		setCheckbox1(true)
		setCheckbox2(false)
		setCheckbox3(false)
	}

	const handleCheckbox2Change = () => {
		setCheckbox1(false)
		setCheckbox2(true)
		setCheckbox3(false)
	}

	const handleCheckbox3Change = () => {
		setCheckbox1(false)
		setCheckbox2(false)
		setCheckbox3(true)
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
		return <Text>Cargando...</Text>
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
					className='absolute w-full object-fill justify-center items-center -bottom-[15%]'
				/>
				<View
					style={{
						height: '100%',
						alignItems: 'center',
						marginTop: '30%',
						gap: 32,
					}}
				>
					<Text
						className='px-9 text-white font-semibold text-center text-2xl leading-8'
						style={{
							fontFamily: 'poppins-medium',
						}}
					>
						Seleccionar un método de seguridad para su cuenta
					</Text>
					<Text
						className='px-7 text-white font-semibold text-center leading-6 text-base'
						style={{
							fontFamily: 'poppins-regular',
						}}
					>
						Al entrar a la aplicación deberá ingresar con el método
						seleccionado.
					</Text>
					<View className='flex w-full justify-center items-center px-20 gap-8 mt-4'>
						<View className='flex flex-row justify-between items-center w-full'>
							<View className='flex justify-center items-center flex-row'>
								<Image
									source={require('../../../assets/fingerprint.png')}
									className='w-[23px] h-[23px] object-scale-down'
								/>
								<Text
									className='px-4 text-white font-semibold text-center leading-6 text-[18px]'
									style={{
										fontFamily: 'poppins-regular',
									}}
								>
									Huella Dactilar
								</Text>
							</View>
							<Pressable
								onPress={() => {
									handleCheckbox1Change()
								}}
							>
								<View className='flex h-5 w-5 rounded-full border-2 border-white justify-center items-center'>
									<View
										className='flex h-2.5 w-2.5 rounded-full border-0 border-white justify-center items-center'
										style={{
											backgroundColor: checkbox1 ? '#fff' : 'transparent',
										}}
									></View>
								</View>
							</Pressable>
						</View>
						<View className='flex flex-row justify-between items-center w-full'>
							<View className='flex justify-center items-center flex-row'>
								<Image
									source={require('../../../assets/faceId.png')}
									className='w-[23px] h-[23px] object-contain'
								/>
								<Text
									className='px-4 text-white font-semibold text-start leading-6 text-[18px] break-normal w-[200px]'
									style={{
										fontFamily: 'poppins-regular',
									}}
								>
									Reconocimiento Facial
								</Text>
							</View>
							<Pressable
								onPress={() => {
									handleCheckbox2Change()
								}}
							>
								<View className='flex h-5 w-5 rounded-full border-2 border-white justify-center items-center'>
									<View
										className='flex h-2.5 w-2.5 rounded-full border-0 border-white justify-center items-center'
										style={{
											backgroundColor: checkbox2 ? '#fff' : 'transparent',
										}}
									></View>
								</View>
							</Pressable>
						</View>
						<View className='flex flex-row justify-between items-center w-full'>
							<View className='flex justify-center items-center flex-row'>
								<Image
									source={require('../../../assets/lock.png')}
									className='w-[23px] h-[23px] object-contain'
								/>
								<Text
									className='px-4 text-white font-semibold text-center leading-6 text-[18px]'
									style={{
										fontFamily: 'poppins-regular',
									}}
								>
									Pin Numeral
								</Text>
							</View>
							<Pressable
								onPress={() => {
									handleCheckbox3Change()
								}}
							>
								<View className='flex h-5 w-5 rounded-full border-2 border-white justify-center items-center'>
									<View
										className='flex h-2.5 w-2.5 rounded-full border-0 border-white justify-center items-center'
										style={{
											backgroundColor: checkbox3 ? '#fff' : 'transparent',
										}}
									></View>
								</View>
							</Pressable>
						</View>
					</View>
					<TouchableOpacity
						className='flex justify-center items-center py-2.5 px-16 rounded-3xl mt-10 bg-white'
						onPress={() => {
							if (checkbox1) {
								navigation.navigate('FingerprintVerification')
							} else if (checkbox2) {
								navigation.navigate('FaceIdVerification')
							} else if (checkbox3) {
								navigation.navigate('PinVerification')
							}
						}}
					>
						<Text
							className='text-center text-violeta font-bold text-base leading-6'
							style={{
								fontFamily: 'poppins-medium',
							}}
						>
							Aceptar
						</Text>
					</TouchableOpacity>
					<Text
						className='px-12 mt-6 text-white font-semibold text-center leading-6 text-base'
						style={{
							fontFamily: 'poppins-regular',
						}}
					>
						Podrá modificarlo en configuración más tarde
					</Text>
				</View>
			</LinearGradient>
		</View>
	)
}

export default Security
