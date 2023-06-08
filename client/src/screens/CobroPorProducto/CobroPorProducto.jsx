import React, { useRef, useState } from 'react'
import {
	View,
	Image,
	Text,
	ScrollView,
	TextInput,
	ImageBackground,
	TouchableOpacity,
	Button,
} from 'react-native'
import Constants from 'expo-constants'

import colors from '../../utils/colors'
// import Button from '../../components/Button/Button'
import { myCryptos } from '../../utils/fakeCryptoData'
import { CryptoListItem } from '../../components/CryptoListItem'
const CobroPorProducto = ({ navigation }) => {
	const [otpValue, setOtpValue] = useState('')
	const goCustomLink = () => {
		const data = {
			monto: otpValue,
		}
		navigation.navigate('cobrosCustomLink', data)
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
					<TextInput
						className='w-[230] border-[1px] border-gris_medio mb-2 py-2 text-violeta font-bold border-t-0 border-l-0 border-r-0'
						style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'center' }}
						onChangeText={otpValue => setOtpValue(otpValue)}
						defaultValue={otpValue}
						keyboardType='decimal-pad'
						placeholder='000'
						placeholderTextColor={colors.violeta}
					/>
					<View>
						{myCryptos.map(coin => (
							<CryptoListItem
								key={coin.id}
								coin={coin.coin}
								coinSymbol={coin.symbol}
								amountOwned={coin.amount}
								inUsd={coin.actualValue}
								profit={coin.modifiedPercentage}
								icon={coin.imgIcon}
							/>
						))}
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
