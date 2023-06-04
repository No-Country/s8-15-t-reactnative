import React, { useState } from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import { myCryptos } from '../../utils/fakeCryptoData'
import colors from '../../utils/colors'
import { MaterialIcons } from '@expo/vector-icons'
import {
	CurrencyExchange,
	SendToMobile,
	Wallet2,
} from '../../../assets/svgMaterialIcons/icons'

const CryptoActionCard = ({ title, showTopIcon = false, showBottomIcon = false, icon }) => {
	const cryptoData = myCryptos.map(({ coin, amount, symbol, imgIcon }) => ({
		coin,
		amount,
		symbol,
		imgIcon,
	}))

	const [selectedCrypto, setSelectedCrypto] = useState({
		amount: 0,
		symbol: '',
	})
	return (
		<View className='mb-2 flex justify-center items-center w-[85%] relative'>
			<View className='border border-gray-400 border-solid pt-2 px-4 pb-3 w-full rounded-3xl bg-white '>
				<Text
					className='text-azul_oscuro text-lg'
					style={{ fontFamily: 'poppins-medium' }}
				>
					{title}
				</Text>
				<View className='flex'>
					<View className='flex flex-row justify-between items-center'>
						<SelectDropdown
							data={cryptoData}
							onSelect={(selectedItem, index) => {
								setSelectedCrypto({
									amount: selectedItem.amount,
									symbol: selectedItem.symbol,
								})
							}}
							buttonStyle={{
								height: 40,
								width: '40%',
								maxWidth: '60%',
								backgroundColor: '#fff',
								paddingHorizontal: 0,
							}}
							rowStyle={{ bottom: 0 }}
							selectedRowStyle={{ backgroundColor: '#ccc' }}
							renderCustomizedButtonChild={(selectedItem, index) => {
								return (
									<View className='flex flex-row justify-between items-center'>
										{selectedItem ? (
											<Image
												source={{ uri: selectedItem.imgIcon }}
												style={{
													height: 25,
													width: 25,
													resizeMode: 'contain',
												}}
											/>
										) : (
											<CurrencyExchange size='25' color={colors.naranja} />
										)}
										<Text
											className='text-base'
											style={{ fontFamily: 'poppins-medium' }}
										>
											{selectedItem ? selectedItem.coin : 'Elige'}
										</Text>
										<MaterialIcons
											name='keyboard-arrow-down'
											size={24}
											color='black'
										/>
									</View>
								)
							}}
							renderCustomizedRowChild={(item, index) => {
								return (
									<View className='flex flex-row items-center p-3'>
										<Image
											source={{ uri: item.imgIcon }}
											style={{
												height: 25,
												width: 25,
												resizeMode: 'contain',
											}}
										/>
										<Text className='mx-3'>{item.coin}</Text>
									</View>
								)
							}}
						/>
						<TextInput
							keyboardType='numeric'
							placeholder='0.00'
							className='text-azul_oscuro text-3xl flex-1 text-right '
							style={{ fontFamily: 'poppins-medium' }}
							cursorColor={colors.violeta}
						/>
					</View>
					<View className='flex flex-row justify-between items-center'>
						<View className='flex flex-row items-center'>
							<Wallet2 size='12' color={colors.gris_texto} />
							<Text className='text-gris_texto text-xl ml-2'>
								{selectedCrypto.amount} {selectedCrypto.symbol}
							</Text>
						</View>
						<Text
							className='text-azul_oscuro text-lg text-right'
							style={{ fontFamily: 'poppins-medium' }}
						>
							{selectedCrypto.symbol}
						</Text>
					</View>
				</View>
			</View>
			{showTopIcon && (
				<View className='absolute rounded-full border border-solid border-gris_medio bg-white h-10 aspect-square flex justify-center items-center top-[-25px]'>
					{icon}
				</View>
			)}

			{showBottomIcon && (
				<View className='absolute rounded-full border border-solid border-gris_medio bg-white h-10 aspect-square flex justify-center items-center bottom-[-15px]'>
					{icon}
				</View>
			)}
		</View>
	)
}

export default CryptoActionCard
