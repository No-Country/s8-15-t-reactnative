/* eslint-disable react/prop-types */
import { useState } from 'react'
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	ImageBackground,
	TouchableOpacity,
	Modal,
} from 'react-native'
import CheckBox from 'expo-checkbox'
import Constants from 'expo-constants'
import colors from '../../utils/colors'
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker'
import { GoBackButton, SmallProfilePicture } from '../../components'
const CobroPersonalizaLink = ({ navigation, route }) => {
	const { monto } = route.params
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
	const goShare = () => {
		const data = {
			monto,
			method: payfriend ? 'payfriend' : 'efectivo',
			vigencia: `desde: ${selectedStartDate} hasta: ${selectedEndDate}`,
		}
		if (indefinido) data.vigencia = 'indefinido'
		console.log(data)
		navigation.navigate('cobrosDescripcion', data)
	}

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
					<GoBackButton/>
					<Text
						className='text-3xl text-white'
						style={{ fontFamily: 'poppins-semiBold' }}
					>
						Cobros
					</Text>

					<SmallProfilePicture/>
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
				<Text className='mb-4'>cobrar el link</Text>
				<Text className='mb-2 text-gris_texto'>Fecha de comienzo</Text>
				<TouchableOpacity
					onPress={onPressStartData}
					className='w-32 rounded-lg px-2 border-gris_texto border-[1px] mb-2 py-2'
				>
					<Text className='text-gris_texto'>{selectedStartDate}</Text>
				</TouchableOpacity>
				<Modal
					animationType='
				slide'
					transparent={true}
					visible={openDate}
				>
					<View className='w-64 mt-32  mr-auto ml-auto flex justify-center items-center'>
						<DatePicker
							mode='calendar'
							minimumDate={startDate}
							selected={startedDate}
							onDateChange={handleChangeEndDate}
							onSelectedChange={date => setSelectedStartDate(date)}
							options={{
								mainColor: '#6D39E5',
								textHeaderColor: '#6D39E5',
								selectedTextColor: '#fff',
								borderColor: '#cdcdcd',
							}}
						/>
						<TouchableOpacity onPress={onPressStartData}>
							<Text>Cerrar</Text>
						</TouchableOpacity>
					</View>
				</Modal>
				<Text className='mb-2 text-gris_texto'>Fecha de finalización</Text>
				<TouchableOpacity
					onPress={onPressEndData}
					className='w-32 rounded-lg px-2 mb-4 border-gris_texto border-[1px] py-2'
				>
					<Text className='text-gris_texto'>{selectedEndDate}</Text>
				</TouchableOpacity>
				<Modal
					animationType='
				slide'
					transparent={true}
					visible={openEndDate}
				>
					<View className='w-64 mt-52 mr-auto ml-auto flex justify-center items-center'>
						<DatePicker
							mode='calendar'
							minimumDate={endDate}
							selected={endedDate}
							onDateChange={handleChangeStartDate}
							onSelectedChange={date => setSelectedEndDate(date)}
							options={{
								mainColor: '#6D39E5',
								textHeaderColor: '#6D39E5',
								selectedTextColor: '#fff',
								borderColor: '#cdcdcd',
							}}
						/>
						<TouchableOpacity onPress={onPressEndData}>
							<Text>Cerrar</Text>
						</TouchableOpacity>
					</View>
				</Modal>
				<View className='flex flex-row mb-6 items-center'>
					<CheckBox
						className='mr-2'
						value={indefinido}
						onValueChange={() => setIndefinido(!indefinido)}
						color={indefinido ? colors.violeta : undefined}
					/>
					<Text>Indefinido</Text>
				</View>

				<TouchableOpacity
					onPress={goShare}
					className='w-[240px] px-[22px] mx-auto pt-1 pb-1 text-white rounded-2xl bg-naranja '
				>
					<Text className='text-white font-bold text-center text-xl'>
						Continuar
					</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	)
}


export default CobroPersonalizaLink
