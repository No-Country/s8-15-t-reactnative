import { useState, useEffect } from 'react'
import Constants from 'expo-constants'
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	StatusBar,
	ScrollView,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons'
import { useSelector, useDispatch } from 'react-redux'
import { setChangeScreen } from '../../reduxApp/feature/changeScreenSlice'
import { SmallProfilePicture } from '../../components'
import colors from '../../utils/colors'
import { BackArrow, Succes } from '../../../assets/svgMaterialIcons/icons'
import { useNavigation } from '@react-navigation/native'

const Voucher = () => {
	const transferData = useSelector(state => state.transferData)
	const dispatch = useDispatch()

	const [currentDateTime, setCurrentDateTime] = useState(null)

	useEffect(() => {
		const datetime = new Date()
		setCurrentDateTime(datetime)
	}, [])

	let formattedDateTime = ''
	if (currentDateTime) {
		formattedDateTime = currentDateTime
			.toISOString()
			.replace('T', ', ')
			.replace(/\.\d+Z$/, '')
	}

	const randomNumber = Math.floor(Math.random() * 111111111111111)
	const navigation = useNavigation()

	return (
		<ScrollView className='bg-white'>
			<LinearGradient
				colors={['#7029E2', '#55B7FF']}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				style={{
					flexGrow: 1,
					width: '100%',
				}}
			>
				<View className='w-full flex-row items-center justify-between p-4 py-10'>
					<TouchableOpacity
						onPress={() => dispatch(setChangeScreen('TransferMoney'))}
					>
						<BackArrow /> 
					</TouchableOpacity>
					<Text
						className='text-3xl text-white'
						style={{ fontFamily: 'poppins-semiBold' }}
					>
						Comprobante
					</Text>
					<SmallProfilePicture />
				</View>
			</LinearGradient>
			<View className='rounded-tl-[36px] rounded-t-3xl py-5 bg-[#FBFBFB] h-[100%] relative top-[-20px]'>
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
						Transferencia exitoso!
					</Text>
					<Text
						className='text-center text-xl text-gris_texto px-16 py-5'
						style={{ fontFamily: 'poppins-semiBold' }}
					>
						Tu dinero fue transferido con exito
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
							US$ {transferData.amount}
						</Text>
					</View>
					<View
						style={{ gap: 5 }}
						className='flex-row border-slate-300 border-[1px] rounded-[20px] py-5 px-3'
					>
						<View className='h-[50px] w-[50px]   rounded-full overflow-hidden'>
							<Image
								className='h-full w-full'
								resizeMode='cover'
								source={{
									uri: 'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg',
								}}
							/>
						</View>
						<View>
							<Text
								className='text-xl font-semibold] '
								style={{ fontFamily: 'poppins-semiBold' }}
							>
								Cintia J. Martinez
							</Text>
							<Text
								className='text-xl text-gris_texto'
								style={{ fontFamily: 'poppins-semiBold' }}
							>
								CVU - {transferData.cbu}
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
								{formattedDateTime}
							</Text>
						</View>
						<View className='flex flex-row justify-between pb-4'>
							<Text
								className='text-gris_texto text-xl '
								style={{ fontFamily: 'poppins-semiBold' }}
							>
								No. Ref
							</Text>
							<Text
								className='text-xl'
								style={{ fontFamily: 'poppins-semiBold' }}
							>
								{randomNumber}
							</Text>
						</View>
						<View className='flex flex-row justify-between pb-4'>
							<Text
								className='text-gris_texto text-xl '
								style={{ fontFamily: 'poppins-semiBold' }}
							>
								Categoría
							</Text>
							<Text
								className='text-xl'
								style={{ fontFamily: 'poppins-semiBold' }}
							>
								Amistades
							</Text>
						</View>
					</View>
					<TouchableOpacity
						className='bg-[#F18805] w-[200px] py-[12px] rounded-[25px] mx-auto'
						onPress={() => navigation.navigate('Home')}
					>
						<Text
							className='text-center text-white text-xl'
							style={{ fontFamily: 'poppins-semiBold' }}
						>
							Finalizar
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	)
}

export default Voucher
