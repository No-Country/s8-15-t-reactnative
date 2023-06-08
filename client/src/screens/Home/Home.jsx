import {
	ActivityIndicator,
	Image,
	ScrollView,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Constants from 'expo-constants'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback, useState } from 'react'
import colors from '../../utils/colors'
import {
	MaterialIcons,
	Ionicons,
	MaterialCommunityIcons,
} from '@expo/vector-icons'
import {
	LightBulp,
	Mobile,
	ObraSocial,
	Receip,
	TransferIcon,
	Wallet,
	WithdrawMoney,
} from '../../../assets/svgMaterialIcons/icons'
import { useNavigation } from '@react-navigation/native'
import { HomePagarButtom, SmallProfilePicture } from '../../components'

SplashScreen.preventAutoHideAsync()

const Home = () => {
	const navigation = useNavigation()

	const [ocultarNumero, setOcultarNumero] = useState(false)
	const dineroDisponible = 1547.74

	const numeroNormalizado = dineroDisponible.toLocaleString('es-ES', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	})
	const numeroOculto = numeroNormalizado.replace(/[0-9]/g, '·')

	const [fontsLoaded] = useFonts({
		'poppins-semiBold': require('../../../assets/poppinsFonts/Poppins-SemiBold.ttf'),
		'poppins-medium': require('../../../assets/poppinsFonts/Poppins-Medium.ttf'),
		'poppins-regular': require('../../../assets/poppinsFonts/Poppins-Regular.ttf'),
	})

	const onLayoutHome = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync()
		}
	}, [fontsLoaded])

	if (!fontsLoaded) {
		return <ActivityIndicator size='large' color={colors.violeta} />
	}
	return (
		<ScrollView onLayout={onLayoutHome} className='bg-white'>
			<LinearGradient
				colors={['#7029E2', '#55B7FF']}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				className='pb-16'
			>
				<StatusBar
					translucent
					backgroundColor='transparent'
					barStyle='light-content'
				/>

				<View style={{ paddingTop: Constants.statusBarHeight + 10 }}>
					<View className='flex flex-row items-center mb-4 px-5'>
						<TouchableOpacity className='flex-1'>
							<MaterialIcons
								name='notifications-none'
								size={27}
								color='white'
							/>
						</TouchableOpacity>
						<Text
							className='text-3xl text-white text-center flex-1'
							style={{ fontFamily: 'poppins-regular' }}
						>
							Payfriend
						</Text>
						<View className='flex-1 flex flex-row justify-end'>
							<SmallProfilePicture />
						</View>
					</View>
					<Text
						className='text-white text-2xl text-center'
						style={{ fontFamily: 'poppins-semiBold' }}
					>
						¡Hola, Cintia!
					</Text>
					<View className='flex items-center mt-4'>
						<View className='flex flex-row justify-center items-center gap-3'>
							<Text
								className='font-medium text-lg text-white'
								style={{ fontFamily: 'poppins-medium' }}
							>
								Dinero disponible
							</Text>
							<TouchableOpacity
								onPress={() => setOcultarNumero(!ocultarNumero)}
							>
								<Ionicons name='ios-eye-outline' size={24} color='#fff' />
							</TouchableOpacity>
						</View>
						<Text
							className='text-5xl text-white pt-4 font'
							style={{ fontFamily: 'poppins-medium' }}
						>
							US${ocultarNumero ? numeroOculto : numeroNormalizado}
						</Text>
					</View>
				</View>
			</LinearGradient>
			<View className='rounded-t-3xl top-[-20px] px-4 bg-white flex'>
				<View className=' bg-red-100 px-4 relative w-full  flex flex-row justify-center '>
					<View className='absolute top-[-40px] w-full flex flex-row justify-evenly p-2 rounded-3xl border border-solid border-gray-200 bg-white '>
						<TouchableOpacity
							onPress={() => navigation.navigate('cobros')}
							className='flex justify-center items-center  text-center'
						>
							<Wallet size='25' />
							<Text
								className='pt-2 text-base'
								style={{ fontFamily: 'poppins-regular' }}
							>
								Cobrar
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => navigation.navigate('Transferir')}
							className='flex justify-center items-center  text-center'
						>
							<TransferIcon size='25' />
							<Text
								className='pt-2 text-base'
								style={{ fontFamily: 'poppins-regular' }}
							>
								Transferir
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => navigation.navigate('')}
							className='flex justify-center items-center  text-center'
						>
							<WithdrawMoney size='25' />
							<Text
								className='pt-2 text-base'
								style={{ fontFamily: 'poppins-regular' }}
							>
								Retirar dinero
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => navigation.navigate('Historial')}
							className='flex justify-center items-center  text-center'
						>
							<MaterialCommunityIcons name='history' size={25} />
							<Text
								className='pt-2 text-base'
								style={{ fontFamily: 'poppins-regular' }}
							>
								Historial
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View className='mt-12'>
					<TouchableOpacity>
						<Text
							style={{ fontFamily: 'poppins-semiBold' }}
							className='bg-naranja text-white text-xl self-end px-5 py-1 rounded-full'
						>
							CBU y Alias
						</Text>
					</TouchableOpacity>

					<View>
						<Text
							style={{ fontFamily: 'poppins-medium' }}
							className='text-xl mb-3'
						>
							Pagar
						</Text>
						<View className='flex flex-row justify-between'>
							<HomePagarButtom
								text='Internet'
								icono={
									<Ionicons name='ios-wifi' size={28} color={colors.lila} />
								}
							/>

							<HomePagarButtom
								text='Electrcidad'
								icono={<LightBulp size={28} color={colors.naranja_claro} />}
							/>
							<HomePagarButtom
								text='Teléfono'
								icono={
									<Mobile
										name='ios-wifi'
										size={28}
										color={colors.azul_secundario}
									/>
								}
							/>
							<HomePagarButtom
								text='Obra social'
								icono={
									<ObraSocial name='ios-wifi' size={28} color={colors.rojo} />
								}
							/>
						</View>
						<View className='flex flex-row justify-between mt-4'>
							<HomePagarButtom
								text='Tarjeta'
								icono={
									<MaterialCommunityIcons
										name='credit-card-outline'
										size={24}
										color={colors.verde}
									/>
								}
							/>

							<HomePagarButtom
								text='Factura'
								icono={<Receip size={28} color={colors.azul_secundario} />}
							/>
							<HomePagarButtom
								text='Compras'
								icono={
									<Mobile name='ios-wifi' size={28} color={colors.naranja} />
								}
							/>
							<HomePagarButtom
								text='Seguros'
								icono={
									<Ionicons
										name='md-cart-outline'
										size={24}
										color={colors.lila}
									/>
								}
							/>
						</View>
					</View>
				</View>
				<View className='mt-5'>
					<Text
						style={{ fontFamily: 'poppins-medium' }}
						className='text-xl mb-3'
					>
						Promos y Descuentos
					</Text>
					<ScrollView horizontal={true}>
						<View className='h-[200px] w-[300px] mr-2'>
							<Image
								className='h-full w-full'
								resizeMode='contain'
								source={require('../../../assets/imagenesOfertas/ofertaUno.jpg')}
							/>
						</View>

						<View className='h-[200px] w-[300px] mr-7'>
							<Image
								className='h-full w-full'
								resizeMode='contain'
								source={require('../../../assets/imagenesOfertas/ofertaDos.jpg')}
							/>
						</View>
					</ScrollView>
				</View>
			</View>
		</ScrollView>
	)
}

export default Home
