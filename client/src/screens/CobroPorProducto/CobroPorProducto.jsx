import React, { useRef, useState } from 'react'
import {
	View,
	Image,
	Text,
	ScrollView,
	TextInput,
	ImageBackground,
	TouchableOpacity,
} from 'react-native'
import Constants from 'expo-constants'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import { OTPInput } from '../../components/OTPInput/OTPInput'
import Button from '../../components/Button/Button'
const CobroPorProducto = () => {
	const [otpValue, setOtpValue] = useState('000')
	const inputRefs = useRef([])

	// const handleChange = (text, index) => {
	// 	const newValue = [...otpValue]
	// 	newValue[index] = text
	// 	setOtpValue(newValue)
	// 	onChange(newValue)

	// 	if (text.length !== 0) {
	// 		return inputRefs.current[index + 1]?.focus()
	// 	}

	// 	return inputRefs.current[index - 1]?.focus()
	// }

	return (
		<ScrollView className='bg-white'>
			<ImageBackground
				source={require('../../../assets/fondoHistorial.webp')}
				className='h-[200] '
				style={{
					paddingTop: Constants.statusBarHeight + 27,
					paddingHorizontal: 20,
				}}
			>
				<View className='flex flex-row justify-between items-center mb-4'>
					<TouchableOpacity>
						<View className='h-8 w-8 rounded-full border-[1px] border-white flex justify-center items-center'>
							<Image
								className='h-4 w-4 rounded-full'
								source={require('../../../assets/back_arrow.png')}
							/>
						</View>
					</TouchableOpacity>
					<Text
						className='text-3xl text-white'
						style={{ fontFamily: 'poppins-semiBold' }}
					>
						Cobros
					</Text>
					<View
						className='flex flex-row justify-center items-center 
				gap-x-7'
					>
						<View className='border-solid border-2 border-white rounded-full'>
							<Image
								className='h-[40px] w-[40px] rounded-full'
								source={{
									uri: 'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg',
								}}
							/>
						</View>
					</View>
				</View>
				<View className='flex items-center'>
					<Text className=' text-[20px] text-white font-semibold'>
						Créa un link de pago
					</Text>
				</View>
			</ImageBackground>
			<View className='bg-white flex items-center pt-8 -top-6 rounded-t-3xl'>
				<Text className='font-bold text-[20px]'>Importe</Text>
			</View>

			<View className='w-full flex items-center'>
				<View className='flex items-center w-full'>
					<Text className='text-center font-black text-violeta text-3xl'>
						0,40000
					</Text>
					<View className='flex flex-row justify-between items-center w-10/12 '>
						<View className='flex w-14'>
							<View className='flex justify-center items-center bg-white w-14 h-14 rounded-full mb-2'>
								<Text className='font-black text-xl'>1</Text>
							</View>
							<View className='flex justify-center items-center bg-white w-14 h-14 rounded-full mb-2'>
								<Text className='font-black text-xl'>4</Text>
							</View>
							<View className='flex justify-center items-center bg-white w-14 h-14 rounded-full mb-2'>
								<Text className='font-black text-xl'>7</Text>
							</View>
							<View className='flex justify-center items-center bg-white w-14 h-14 rounded-full mb-2'>
								<Text className='font-black text-xl'>*</Text>
							</View>
						</View>
						<View className='flex w-14'>
							<View className='flex justify-center items-center bg-white w-14 h-14 rounded-full mb-2'>
								<Text className='font-black text-xl'>2</Text>
							</View>
							<View className='flex justify-center items-center bg-white w-14 h-14 rounded-full mb-2'>
								<Text className='font-black text-xl'>5</Text>
							</View>
							<View className='flex justify-center items-center bg-white w-14 h-14 rounded-full mb-2'>
								<Text className='font-black text-xl'>8</Text>
							</View>
							<View className='flex justify-center items-center bg-white w-14 h-14 rounded-full mb-2'>
								<Text className='font-black text-xl'>0</Text>
							</View>
						</View>
						<View className='flex w-14'>
							<View className='flex justify-center items-center bg-white w-14 h-14 rounded-full mb-2'>
								<Text className='font-black text-xl'>3</Text>
							</View>
							<View className='flex justify-center items-center bg-white w-14 h-14 rounded-full mb-2'>
								<Text className='font-black text-xl'>6</Text>
							</View>
							<View className='flex justify-center items-center bg-white w-14 h-14 rounded-full mb-2'>
								<Text className='font-black text-xl'>9</Text>
							</View>
							<View className='flex justify-center items-center bg-white w-14 h-14 rounded-full mb-2'>
								<Text className='font-black text-xl'>0</Text>
							</View>
						</View>
					</View>
				</View>
				<View className='w-[240px] bg-green-200 flex '>
					<Button text={'Continuar'} onPress={() => console.log('press')} />
				</View>
			</View>
		</ScrollView>
	)
}

export default CobroPorProducto
