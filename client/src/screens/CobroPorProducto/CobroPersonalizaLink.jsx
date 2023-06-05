import React, { useRef, useState } from 'react'
import {
	View,
	Image,
	Text,
	ScrollView,
	TextInput,
	StyleSheet,
	ImageBackground,
	TouchableOpacity,
} from 'react-native'
import CheckBox from 'expo-checkbox'
import Constants from 'expo-constants'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'

import Button from '../../components/Button/Button'
import colors from '../../utils/colors'
const CobroPersonalizaLink = () => {
	const [text, onChangeText] = useState('añadir descripcion')
	const [payfriend, setpayfriend] = useState(false)
	const [efectivo, setefectivo] = useState(false)
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
				<Text className='font-bold text-violeta text-[20px]'>Ultimo paso</Text>
				<Text className='font-bold text-violeta text-[20px]'>
					Personaliza el link
				</Text>
			</View>
			<View className='w-10/12 mr-auto ml-auto flex'>
				<Text className='font-bold mb-6 text-[20px]'>Medios de pago</Text>
				<View className='flex flex-row items-center mb-4'>
					<CheckBox
						className='mr-2'
						value={payfriend}
						onValueChange={() => setpayfriend(!payfriend)}
						color={payfriend ? colors.violeta : undefined}
					/>
					<Text>Payfriend</Text>
				</View>
				<View className='flex flex-row mb-6 items-center'>
					<CheckBox
						className='mr-2'
						value={efectivo}
						onValueChange={() => setefectivo(!efectivo)}
						color={efectivo ? colors.violeta : undefined}
					/>
					<Text>Efectivo</Text>
				</View>
				<Text className='font-bold mb-2 text-[20px]'>Vigencia de link</Text>
				<Text>Definir hasta cuanto tiempo se puede</Text>
				<Text>cobrar el link</Text>

				<View className='bg-white bg-opacity-100 w-16 z-50 left-4 -bottom-2'>
					<Text className=''>Descripcion</Text>
				</View>
				<TextInput
					className=' w-[230] h-10 rounded-md border-[1px] border-gris_medio mb-2 py-2 px-4 text-gris_texto'
					onChangeText={onChangeText}
					value={text}
				/>

				<View className='w-[240px] mr-auto ml-auto flex '>
					<Button text={'Continuar'} onPress={() => console.log('press')} />
				</View>
			</View>
		</ScrollView>
	)
}
const styles = StyleSheet.create({
	container: {
		width: '100%',
		padding: 16,
		paddingTop: 100,
	},
	wrapper: {
		display: 'flex',
		flexDirection: 'row',
		alignContent: 'center',
	},
	text: {
		lineHeight: 30,
		marginLeft: 10,
	},
})

export default CobroPersonalizaLink
