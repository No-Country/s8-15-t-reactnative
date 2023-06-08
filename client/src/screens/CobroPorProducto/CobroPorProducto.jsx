/* eslint-disable react/prop-types */
import { useState } from 'react'
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
import colors from '../../utils/colors'
import { myCryptos } from '../../utils/fakeCryptoData'
import { CryptoListItem } from '../../components/CryptoListItem'
import { GoBackButton } from '../../components'
import Keyboard from '../../components/Transfer/Keyboard'
import { AntDesign } from '@expo/vector-icons'

const CobroPorProducto = ({ navigation }) => {
	const [monto, setMonto] = useState('')

	const handleSubmit = n => {
		setMonto(prev => prev + n)
	}

	const handleBorrar = () => {
		setMonto(prev => prev.slice(0, -1))
	}

	console.log(monto)

	const [otpValue, setOtpValue] = useState('')
	const goCustomLink = () => {
		const data = {
			monto,
		}
		navigation.navigate('cobrosCustomLink', data)
	}

	const numbers = Array.from({ length: 9 }, (_, index) => index + 1)

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
					<GoBackButton />
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
					<TextInput
						className='w-[230] border-[1px] border-gris_medio mb-2 py-2 text-violeta font-bold border-t-0 border-l-0 border-r-0'
						style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'center' }}
						onChangeText={otpValue => setOtpValue(otpValue)}
						value={monto}
						keyboardType='decimal-pad'
						placeholder='000'
						placeholderTextColor={colors.violeta}
						readOnly={true}
					/>
				</View>
				<View className='w-full py-6'>
					<View className='w-full flex-row flex-wrap'>
						{numbers.map((item, index) => (
							<View
								key={index}
								className='w-1/3 justify-center items-center p-2'
							>
								{typeof item === 'number' ? (
									<TouchableOpacity
										onPress={() => handleSubmit(item)}
										className='rounded-full w-[70px] h-[70px] bg-slate-50 p-5 justify-center items-center'
									>
										<Text className='text-[26px] font-semibold'>{item}</Text>
									</TouchableOpacity>
								) : (
									<TouchableOpacity
										onPress={() => handleBorrar}
										style={
											item.icon === 'closecircleo'
												? { backgroundColor: '#BABABA' }
												: { backgroundColor: '#6D39E5' }
										}
										className='rounded-full w-[70px] h-[70px] p-5 justify-center items-center'
									>
										<AntDesign
											name={item.icon}
											size={item.size}
											color={item.color}
										/>
									</TouchableOpacity>
								)}
							</View>
						))}
						<View className='flex flex-row justify-between my-4 w-full px-8'>
							<TouchableOpacity
								onPress={() => handleSubmit(0)}
								className='rounded-full w-[70px] h-[70px] bg-slate-50 p-5 justify-center items-center'
							>
								<Text className='text-[26px] font-semibold'>{0}</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => handleBorrar()}
								className='flex justify-center items-center mr-5'
							>
								<AntDesign name='closecircleo' size={35} color={colors.rojo} />
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<TouchableOpacity
					onPress={goCustomLink}
					className='w-[240px] px-[22px] pt-1 pb-1 text-white rounded-2xl bg-naranja '
				>
					<Text className='text-white font-bold text-center text-xl'>
						Continuar
					</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	)
}

export default CobroPorProducto
