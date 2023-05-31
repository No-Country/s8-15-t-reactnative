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
import colors from '../../utils/colors'

import { MaterialIcons } from '@expo/vector-icons'
const CambiarDinero = () => {
	return (
		<ScrollView>
			<View className='flex min-h-full items-center relative bg-gris_background '>
				<ImageBackground
					source={require('../../../assets/fondoHistorial.webp')}
					resizeMode='cover'
					className='h-[200] object-center'
				>
					<View className='flex  rounded-t-[40px] pt-6 h-56 w-full items-center'>
						<View className='flex flex-row w-full justify-around items-center mb-3 px-4'>
							<MaterialIcons
								name='notifications-none'
								size={27}
								color='white'
							/>
							<Text className='text-slate-50 font-black text-lg'>
								Cryptomonedas
							</Text>
							<View className='w-10 h-10 bg-white rounded-full'></View>
						</View>
						<Text className='text-slate-50 mb-3 '>Portfolio Total</Text>

						<Text className='text-slate-50 font-black text-3xl'>US $3.214</Text>
					</View>
				</ImageBackground>
				<View className='flex gap-2 reltive top-[-40px] justify-around items-center  w-11/12  '>
					<View className='flex justify-center items-center bg-gris_background w-10 h-10 rounded-full absolute z-50 top-16'>
						<Image
							source={require('../../../assets/currency_exchange.png')}
							style={{ width: 24, height: 24 }}
						/>
					</View>
					<View className='bg-white rounded-[20px] shadow-2xl w-10/12 px-4'>
						<Text className='text-azul_oscuro'>Cambiar</Text>
						<View className='flex flex-row justify-between items-center'>
							<View className='flex flex-row items-center gap-2'>
								<Image
									source={require('../../../assets/bitcoin_logo.png')}
									style={{ width: 24, height: 24 }}
								/>
								<Text>Bitcoin</Text>
							</View>
							<View>
								<Text className='font-black text-azul_oscuro text-lg'>
									4000
								</Text>
							</View>
						</View>
						<View className='flex flex-row justify-between  items-center'>
							<View className='flex flex-row gap-2 items-center'>
								<MaterialIcons
									name='account-balance-wallet'
									size={12}
									color='#979797'
								/>
								<Text className='text-slate-400 text-[12px]'>000425 BTC</Text>
							</View>
							<View>
								<Text className=' text-azul_oscuro text-[12px]'>BTC</Text>
							</View>
						</View>
					</View>
					<View className='bg-white rounded-[20px] shadow-2xl w-10/12 px-4'>
						<Text className='text-azul_oscuro'>Recibir</Text>
						<View className='flex flex-row justify-between items-center'>
							<View className='flex flex-row items-center gap-2'>
								<Image
									source={require('../../../assets/ethereum_logo.png')}
									style={{ width: 24, height: 24 }}
								/>
								<Text>Ethereum</Text>
							</View>
							<View>
								<Text className='font-black text-azul_oscuro text-lg'>
									4000
								</Text>
							</View>
						</View>
						<View className='flex flex-row justify-between  items-center'>
							<View className='flex flex-row gap-2 items-center'>
								<MaterialIcons
									name='account-balance-wallet'
									size={12}
									color='#979797'
								/>
								<Text className='text-slate-400 text-[12px]'>000425 BTC</Text>
							</View>
							<View>
								<Text className=' text-azul_oscuro text-[12px]'>BTC</Text>
							</View>
						</View>
					</View>
				</View>

				<TouchableOpacity className='bg-naranja px-12 top-[-30px] py-2 rounded-3xl'>
					<Text className='text-white font-semibold text-md '>Convertir</Text>
				</TouchableOpacity>
				<View className='flex text-left w-11/12 gap-2 items-center'>
					<Text className='text-right'>Tu BIlleter</Text>
					<View className='bg-white rounded-[20px] shadow-2xl w-10/12 px-4'>
						<View className='flex flex-row justify-between items-center'>
							<View className='flex flex-row items-center gap-2'>
								<Image
									source={require('../../../assets/bitcoin_logo.png')}
									style={{ width: 24, height: 24 }}
								/>
								<Text>Bitcoin</Text>
							</View>
							<View>
								<Text className='font-black text-azul_oscuro text-lg'>
									4000
								</Text>
							</View>
						</View>
						<View className='flex flex-row justify-between  items-center'>
							<View className='flex flex-row gap-2 items-center'>
								<MaterialIcons
									name='account-balance-wallet'
									size={12}
									color='#979797'
								/>
								<Text className='text-slate-400 text-[12px]'>000425 BTC</Text>
							</View>
							<View>
								<Text className=' text-azul_oscuro text-[12px]'>BTC</Text>
							</View>
						</View>
					</View>
					<View className='bg-white rounded-[20px] shadow-2xl w-10/12 px-4'>
						<View className='flex flex-row justify-between items-center'>
							<View className='flex flex-row items-center gap-2'>
								<Image
									source={require('../../../assets/ethereum_logo.png')}
									style={{ width: 24, height: 24 }}
								/>
								<Text>Ethereum</Text>
							</View>
							<View>
								<Text className='font-black text-azul_oscuro text-lg'>
									4000
								</Text>
							</View>
						</View>
						<View className='flex flex-row justify-between  items-center'>
							<View className='flex flex-row gap-2 items-center'>
								<MaterialIcons
									name='account-balance-wallet'
									size={12}
									color='#979797'
								/>
								<Text className='text-slate-400 text-[12px]'>000425 BTC</Text>
							</View>
							<View>
								<Text className=' text-azul_oscuro text-[12px]'>BTC</Text>
							</View>
						</View>
					</View>
				</View>

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
