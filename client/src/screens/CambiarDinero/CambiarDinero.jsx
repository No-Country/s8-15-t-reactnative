import {
	Text,
	View,
	ImageBackground,
	Image,
	Button,
	StyleSheet,
	ScrollView,
	SafeAreaView,
	TouchableOpacity,
	StatusBar,
} from 'react-native'
import {
	CryptoActionCard,
	CryptoListItem,
	HeaderCryptoCommon,
} from '../../components'
import { myCryptos } from '../../utils/fakeCryptoData'
import colors from '../../utils/colors'
import { CurrencyExchange } from '../../../assets/svgMaterialIcons/icons'
const CambiarDinero = () => {
	const cryptoData = myCryptos.map(({ coin, amount, symbol, imgIcon }) => ({
		coin,
		amount,
		symbol,
		imgIcon,
	}))
	return (
		<ScrollView>
			<HeaderCryptoCommon titulo='Cryptomonedas' />
			<View className='flex min-h-full items-center relative bg-gris_background '>
				<View className='flex justify-center items-center top-[-40px] w-full'>
					<CryptoActionCard title='Cambiar' />
					<CryptoActionCard
						title='Recibir'
						showTopIcon={true}
						icon={<CurrencyExchange color={colors.verde_claro} size='25' />}
					/>
				</View>

				<TouchableOpacity className='bg-naranja px-12 top-[-30px] py-2 rounded-3xl'>
					<Text className='text-white font-semibold text-xl '>Convertir</Text>
				</TouchableOpacity>
				<View className='w-full px-6'>
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
				{/* <View className='flex items-center w-full'>
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
				</View> */}
			</View>
		</ScrollView>
	)
}
const styles = StyleSheet.create({
	boton: {
		color: colors.naranja,
	},
	image: {
		borderBottomEndRadius: '20px',
	},
	container: {
		flex: 1,
	},
	scrollView: {
		marginHorizontal: 20,
	},
})
export default CambiarDinero
