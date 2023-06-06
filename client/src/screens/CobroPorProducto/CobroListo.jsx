import React, { useState } from 'react'
import {
	View,
	Image,
	Text,
	ScrollView,
	TextInput,
	StyleSheet,
	ImageBackground,
	TouchableOpacity,
	Modal,
} from 'react-native'
import CheckBox from 'expo-checkbox'
import Constants from 'expo-constants'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import Button from '../../components/Button/Button'
import colors from '../../utils/colors'
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker'
const CobroListo = () => {
	const [payfriend, setpayfriend] = useState(false)
	const [efectivo, setefectivo] = useState(false)
	const [indefinido, setIndefinido] = useState(false)
	const [openDate, setOpenDate] = useState(false)
	const [openEndDate, setOpenEndDate] = useState(false)
	const today = new Date()
	const startDate = getFormatedDate(
		today.setDate(today.getDate() + 1),
		'YYYY/MM/DD'
	)
	const [selectedStartDate, setSelectedStartDate] = useState('YY/MM/DD')
	const [startedDate, setstartedDate] = useState('12/12/2023')
	const onPressStartData = () => {
		setOpenDate(!openDate)
	}
	const handleChangeStartDate = propDate => {
		setstartedDate(propDate)
	}

	const endDate = getFormatedDate(
		today.setDate(today.getDate() + 1),
		'YYYY/MM/DD'
	)
	const [selectedEndDate, setSelectedEndDate] = useState('YY/MM/DD')
	const [endedDate, setEndedDate] = useState('12/12/2023')
	const onPressEndData = () => {
		setOpenEndDate(!openEndDate)
	}
	const handleChangeEndDate = propDate => {
		setEndedDate(propDate)
	}
	return (
		<ScrollView className='bg-gris_background'>
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
					<Text className=' text-[20px] text-white font-semibold'>¡Listo!</Text>
				</View>
			</ImageBackground>
			<View className='bg-white flex items-center pt-8 -top-6 rounded-t-3xl'>
				<Text className='font-bold text-violeta text-[20px]'>
					Compartir tu link de pago
				</Text>
			</View>
			<View className='flex flex-row justify-between w-10/12 mr-auto ml-auto p-2 rounded-lg bg-white mb-8'>
				<View>
					<View className='h-12 w-12 bg-slate-300 rounded-lg'></View>
				</View>
				<View>
					<Text className='font-bold text-lg'>Descripción</Text>
				</View>
				<View className='flex justify-end'>
					<Text className='font-bold text-xl text-violeta '>US$200</Text>
				</View>
			</View>
			<View className='flex justify-center px-2 py-8  w-10/12 mr-auto ml-auto p-2 rounded-md bg-white mb-12'>
				<TouchableOpacity className='bg-gris_background rounded-3xl py-2 mb-4 px-6'>
					<Text className='text-lg'>Link del producto o servicio</Text>
				</TouchableOpacity>
				<View className='flex flex-row w-full justify-between'>
					<Image
						className='w-8 h-8'
						source={require('../../../assets/copy.png')}
					/>
					<Image
						className='w-8 h-8'
						source={require('../../../assets/whatsapp.png')}
					/>
					<Image
						className='w-8 h-8'
						source={require('../../../assets/fb.png')}
					/>
					<Image
						className='w-8 h-8'
						source={require('../../../assets/compartir.png')}
					/>
				</View>
			</View>
			<TouchableOpacity className='bg-white rounded-3xl py-2 px-16 mb-2 mr-auto ml-auto '>
				<Text className='text-center font-bold text-xl text-violeta'>
					Crer link de pgo
				</Text>
			</TouchableOpacity>
			<View className='w-10/12 mr-auto ml-auto flex'>
				<View className='w-[240px] mb-4 mr-auto ml-auto flex '>
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

export default CobroListo
