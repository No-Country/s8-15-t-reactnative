import React, { useState } from 'react'
import {
	Image,
	Pressable,
	ScrollView,
	Text,
	TextInput,
	View,
} from 'react-native'
import {
	Button,
	CryptoBilletera,
	CryptoListItem,
	HeaderCryptoCommon,
} from '../../components'
import SelectDropdown from 'react-native-select-dropdown'
import { myCryptos } from '../../utils/fakeCryptoData'
import { MaterialIcons, Fontisto } from '@expo/vector-icons'
import {
	CurrencyExchange,
	SendToMobile,
} from '../../../assets/svgMaterialIcons/icons'
import colors from '../../utils/colors'
import { Wallet2 } from '../../../assets/svgMaterialIcons/icons'
import { contactsList } from '../../utils/fakeContacts'
import { styles } from './styles'

const CryptoTransferencia = () => {
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

	const [contactName, setContactName] = useState({
		name: '',
	})

	return (
		<ScrollView className='bg-white '>
			<HeaderCryptoCommon titulo='Transferencia' />
			<View className='relative px-6 flex'>
				<View className='mx-1 mb-20 relative flex items-center'>
					<View className='border border-gray-400 border-solid pt-2 px-4 pb-3 w-full rounded-3xl bg-white absolute top-[-60px]'>
						<Text
							className='text-azul_oscuro text-lg'
							style={{ fontFamily: 'poppins-medium' }}
						>
							Transferir
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
									style={{ fontFamily: 'poppins-medium', }}
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
					<View className='absolute rounded-full border border-solid border-gris_medio bg-white h-10 aspect-square flex justify-center items-center top-[25px]'>
						<SendToMobile color={colors.verde_claro} size='25' />
					</View>
				</View>
				<View>
					<Text
						className='text-azul_oscuro text-center text-2xl mb-2'
						style={{ fontFamily: 'poppins-semiBold' }}
					>
						{contactName.name
							? contactName.name
							: '¿A dónde deseas transferir?'}
					</Text>
					<SelectDropdown
						data={contactsList}
						onSelect={(selectedItem, index) => {
							console.log(selectedItem, index)
							setContactName({
								name: selectedItem.name,
							})
						}}
						buttonStyle={[
							styles.basicButtonStyle,
							contactName.name ? styles.contactCardStyle : styles.buttonStyle,
						]}
						renderCustomizedButtonChild={(selectedItem, index) => {
							return selectedItem ? (
								<View className='flex flex-row items-center px-2'>
									<Image
										source={{ uri: selectedItem.profilePic }}
										style={{
											height: 40,
											width: 40,
											borderRadius: 100,
											resizeMode: 'cover',
										}}
									/>
									<View className='ml-4'>
										<Text
											className='text-base'
											style={{ fontFamily: 'poppins-semiBold' }}
										>
											Alias - {selectedItem.alias}
										</Text>
										<Text
											className='text-gris_texto'
											style={{ fontFamily: 'poppins-semiBold' }}
										>
											CVU - {selectedItem.cvu}
										</Text>
									</View>
								</View>
							) : (
								<View className='flex flex-row justify-between px-4'>
									<Text className='text-base text-gris_texto'>Buscar</Text>
									<Fontisto name='search' size={15} color={colors.violeta} />
								</View>
							)
						}}
						dropdownStyle={{ borderRadius: 20 }}
						rowStyle={{ backgroundColor: '#fff', padding: 10 }}
						selectedRowStyle={{ backgroundColor: colors.gris_background }}
						renderCustomizedRowChild={(item, index) => {
							return (
								<View className='flex flex-row items-center'>
									<Image
										source={{ uri: item.profilePic }}
										style={{
											height: 35,
											width: 35,
											borderRadius: 100,
											resizeMode: 'cover',
										}}
									/>
									<Text className='ml-4 text-base'>{item.name}</Text>
								</View>
							)
						}}
						search
						// searchInputStyle={styles.dropdown3searchInputStyleStyle}
						searchPlaceHolder={'Alias/Nombre/CVU'}
						searchPlaceHolderColor={colors.gris_texto}
						renderSearchInputRightIcon={() => {
							return <Fontisto name='search' size={15} color={colors.violeta} />
						}}
					/>

					<Pressable className='bg-azul_secundario py-2.5 px-6 rounded-full w-[60%] my-5 mx-auto'>
						<Text
							className='text-center text-white text-2xl'
							style={{ fontFamily: 'poppins-semiBold' }}
						>
							Continuar
						</Text>
					</Pressable>
					<Text className='text-2xl' style={{ fontFamily: 'poppins-semiBold' }}>
						Tu billetera
					</Text>
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
		</ScrollView>
	)
}

export default CryptoTransferencia
