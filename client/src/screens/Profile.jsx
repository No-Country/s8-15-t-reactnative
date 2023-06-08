import { useDispatch } from 'react-redux'
import {
	View,
	Text,
	StatusBar,
	TouchableOpacity,
	ImageBackground,
} from 'react-native'
import colors from '../utils/colors'
import {
	MaterialCommunityIcons,
	MaterialIcons,
	Octicons,
} from '@expo/vector-icons'
import { useState } from 'react'
import EditProfile from '../components/EditProfile'
import fondo from '../Images/fondo.webp'
import { useNavigation } from '@react-navigation/core'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setUserData } from '../reduxApp/feature/userSlice'
import { logout } from '../reduxApp/feature/authSlice'
import { Wallet2 } from '../../assets/svgMaterialIcons/icons'
import { ScrollView } from 'react-native-gesture-handler'
import { GoBackButton } from '../components'

const Profile = () => {
	const dispatch = useDispatch()
	const cerrar = async () => {
		try {
			await AsyncStorage.removeItem('userData')
			dispatch(setUserData(null))
			dispatch(logout())
			console.log('Logout Successful')
		} catch (error) {
			console.log('Error:', error)
		}
	}

	const [active, setActive] = useState(false)
	const navigation = useNavigation()

	return (
		<ScrollView className='bg-white'>
			<StatusBar
				translucent
				backgroundColor='transparent'
				barStyle='light-content'
			/>
			<ImageBackground
				source={fondo}
				className={` px-4 h-[300px] rounded-b-[45px] overflow-hidden justify-center items-center `}
			>
				<View className='self-start'>
					<GoBackButton />
				</View>
				<View className='flex justify-center items-center'>
					<MaterialCommunityIcons
						name='account-circle'
						color={'gray'}
						size={110}
					/>
					<Text className='text-lg text-white font-bold '>Esteban Leisz</Text>
					<Text className='text-lg text-white font-normal'>
						esteban.leisz@gmail.com
					</Text>
				</View>
			</ImageBackground>

			<View className='h-full top-4 relative '>
				<View className='absolute top-[-60px] items-center flex justify-center w-full'>
					<View
						className='flex flex-row items-center justify-center w-full '
						style={{ gap: 6 }}
					>
						<TouchableOpacity className='flex justify-around items-center border border-solid p-1 rounded-xl h-[80px] w-[90px] border-gray-400 bg-white'>
							<View>
								<Wallet2 color={colors.azul} />
							</View>
							<Text
								className='text-azul text-base'
								style={{ fontFamily: 'poppins-semiBold' }}
							>
								CBU/Alias
							</Text>
						</TouchableOpacity>
						<TouchableOpacity className='flex justify-around items-center border border-gray-400 border-solid p-1 rounded-xl h-[80px]  bg-white'>
							<View>
								<MaterialIcons
									name='notifications-none'
									size={35}
									color={colors.azul}
								/>
							</View>
							<Text
								className='text-azul text-base'
								style={{ fontFamily: 'poppins-semiBold' }}
							>
								Notificaciones
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View className='p-10'>
					<TouchableOpacity
						onPress={() => navigation.navigate('VerificationUser')}
						className='flex flex-row items-center'
					>
						<MaterialCommunityIcons name='account-box-outline' size={25} />
						<Text className='ml-2'>Datos Personales</Text>
					</TouchableOpacity>
					<View
						style={{ height: 1 }}
						className='bg-slate-500 mt-3 mb-3 w-full'
					></View>
					<TouchableOpacity className='flex flex-row items-center mt-2'>
						<MaterialCommunityIcons
							name='shield-account-variant-outline'
							size={25}
						/>
						<Text className='ml-2'>Seguridad</Text>
					</TouchableOpacity>
					<View
						style={{ height: 1 }}
						className='bg-slate-500 mt-3 mb-3 w-full'
					></View>
					<TouchableOpacity className='flex flex-row items-center mt-2'>
						<Octicons name='gear' size={25} />
						<Text className='ml-2'>Configuracion</Text>
					</TouchableOpacity>
					<View
						style={{ height: 1 }}
						className='bg-slate-500 mt-3 mb-3 w-full'
					></View>
					<TouchableOpacity className='flex flex-row items-center mt-2'>
						<MaterialCommunityIcons name='handshake-outline' size={25} />
						<Text className='ml-2'>Privacidad de Datos</Text>
					</TouchableOpacity>
					<View
						style={{ height: 1 }}
						className='bg-slate-500 mt-3 mb-3 w-full'
					></View>
					<TouchableOpacity className='flex flex-row items-center mt-2'>
						<MaterialCommunityIcons name='help-circle-outline' size={25} />
						<Text className='ml-2'>Ayuda</Text>
					</TouchableOpacity>
					<View
						style={{ height: 1 }}
						className='bg-slate-500 mt-3 mb-3 w-full'
					></View>

					<TouchableOpacity
						onPress={() => cerrar()}
						className='flex flex-row items-center mt-2'
					>
						<Text className='ml-2 text-red-800 font-medium text-sm'>
							Cerrar Sesion
						</Text>
					</TouchableOpacity>
				</View>
				<EditProfile active={active} setActive={setActive} />
			</View>
		</ScrollView>
	)
}

export default Profile
