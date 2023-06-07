import {
	ScrollView,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { GoBackButton, SmallProfilePicture } from '../../components'
import Constants from 'expo-constants'
import { AntDesign } from '@expo/vector-icons'
import { getCurrentDateTime } from '../../utils/getCurrentTime'
import { Succes } from '../../../assets/svgMaterialIcons/icons'
import colors from '../../utils/colors'

const PagoFacturaComprobante = () => {
	const navigation = useNavigation()
	const { params } = useRoute()
	const { amount, clientNumber, company, expireDate, facturaNumber } = params
	const currentTime = getCurrentDateTime()

	return (
		<ScrollView className='bg-white'>
			<LinearGradient
				colors={['#7029E2', '#55B7FF']}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				style={{ width: '100%' }}
			>
				<StatusBar
					translucent
					backgroundColor='transparent'
					barStyle='light-content'
				/>
				<View
					style={{ paddingTop: Constants.statusBarHeight + 27 }}
					className='flex flex-row justify-between items-center px-4 pb-14'
				>
					<GoBackButton />
					<View className='flex flex-row justify-between items-center gap-x-2 '>
						<Text
							className='text-3xl text-white'
							style={{ fontFamily: 'poppins-semiBold' }}
						>
							Comprobante
						</Text>
					</View>
					<SmallProfilePicture />
				</View>
			</LinearGradient>
			<View className='rounded-tl-[36px] rounded-t-3xl py-5 bg-[#FBFBFB] relative top-[-20px]'>
				<View className='border-b border-solid border-gris_border'>
					<Text className='text-center mb-5'>
						<Succes color={colors.verde_claro} size={80} />
					</Text>
					<Text className='absolute right-10 top-10'>
						<AntDesign name='export' size={30} color='#5449C8' />
					</Text>
					<Text
						className='text-3xl text-center'
						style={{ fontFamily: 'poppins-semiBold' }}
					>
						¡Pago exitoso!
					</Text>
					<Text
						className='text-center text-xl text-gris_texto px-16 py-5'
						style={{ fontFamily: 'poppins-semiBold' }}
					>
						El comprobante de pago se envió al destinatario
					</Text>
				</View>
				<View className='px-8'>
					<View className='flex-row justify-between py-6'>
						<Text
							className='text-gris_texto text-xl'
							style={{ fontFamily: 'poppins-semiBold' }}
						>
							Monto transferido
						</Text>
						<Text
							className='text-violeta text-xl'
							style={{ fontFamily: 'poppins-semiBold' }}
						>
							US$ {amount}
						</Text>
					</View>
					<View className='flex-row border-slate-300 border-[1px] rounded-[20px] py-5 px-8'>
						<View>
							<Text
								className='text-xl font-semibold leading-[22px] '
								style={{ fontFamily: 'poppins-semiBold' }}
							>
								Cintia J. Martinez
							</Text>
							<Text
								className='text-xl text-gris_texto'
								style={{ fontFamily: 'poppins-semiBold' }}
							>
								No. Cliente - {clientNumber}
							</Text>
						</View>
					</View>
					<View className='py-8'>
						<View className='flex flex-row justify-between pb-4'>
							<Text
								className='text-gris_texto text-xl '
								style={{ fontFamily: 'poppins-semiBold' }}
							>
								Fecha y Hora
							</Text>
							<Text
								className='text-xl'
								style={{ fontFamily: 'poppins-semiBold' }}
							>
								{currentTime}
							</Text>
						</View>
						<View className='flex flex-row justify-between pb-4'>
							<Text
								className='text-gris_texto text-xl '
								style={{ fontFamily: 'poppins-semiBold' }}
							>
								Vencimiento
							</Text>
							<Text
								className='text-xl'
								style={{ fontFamily: 'poppins-semiBold' }}
							>
								{expireDate}
							</Text>
						</View>
						<View className='flex flex-row justify-between pb-4'>
							<Text
								className='text-gris_texto text-xl '
								style={{ fontFamily: 'poppins-semiBold' }}
							>
								Empresa
							</Text>
							<Text
								className='text-xl'
								style={{ fontFamily: 'poppins-semiBold' }}
							>
								{company}
							</Text>
						</View>
						<View className='flex flex-row justify-between pb-4'>
							<Text
								className='text-gris_texto text-xl '
								style={{ fontFamily: 'poppins-semiBold' }}
							>
								No. Factura
							</Text>
							<Text
								className='text-xl'
								style={{ fontFamily: 'poppins-semiBold' }}
							>
								{facturaNumber}
							</Text>
						</View>
					</View>
					<TouchableOpacity
						className='bg-[#F18805] w-[200px] py-[12px] rounded-[25px] m-auto'
						onPress={() => navigation.navigate('Home') }
					>
						<Text className='text-center text-white text-xl' style={{ fontFamily: 'poppins-semiBold' }}>
							Finalizar
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	)
}

export default PagoFacturaComprobante
