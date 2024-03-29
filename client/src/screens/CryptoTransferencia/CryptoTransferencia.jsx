import { useState } from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import {
	CryptoActionCard,
	CryptoListItem,
	HeaderCryptoCommon,
} from '../../components'
import SelectDropdown from 'react-native-select-dropdown'
import { myCryptos } from '../../utils/fakeCryptoData'
import { Fontisto } from '@expo/vector-icons'
import { SendToMobile } from '../../../assets/svgMaterialIcons/icons'
import colors from '../../utils/colors'
import { contactsList } from '../../utils/fakeContacts'
import { styles } from './styles'

const CryptoTransferencia = () => {
	const [contactName, setContactName] = useState({
		name: '',
	})

	return (
		<ScrollView className='bg-white '>
			<HeaderCryptoCommon titulo='Transferencia' />

			<View className='relative flex'>
				<View className='flex justify-center items-center top-[-40px] w-full'>
					<CryptoActionCard
						title='Transferir'
						showBottomIcon
						icon={<SendToMobile color={colors.verde_claro} size='25' />}
					/>
				</View>
				<View className='px-6'>
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
