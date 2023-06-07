import { useMemo } from 'react'
import { Text, View, useColorScheme } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
	MaterialCommunityIcons,
	FontAwesome5,
	Ionicons,
} from '@expo/vector-icons'

import ProgressStepUser from '../screens/ProgressStepUser/ProgressStepUser'

import { CryptoList, Home, ScannQr } from '../screens'
import SendMoney from '../screens/Transfer/SendMoney'
import TransferMoney from '../screens/Transfer/TransferMoney'
import Voucher from '../screens/Transfer/Voucher'
import { useSelector } from 'react-redux'


const Tab = createBottomTabNavigator()

const TabBar = () => {
	const colorScheme = useColorScheme()

	const nameScreen = useSelector(state => state.changeScreen)

	const handleScreens = () => {
		const screens = {

			SendMoney,
			TransferMoney,
			Voucher,
		}

		return screens[nameScreen]
	}

	const ScreenComponent = useMemo(() => handleScreens(), [nameScreen])

	return (
		<Tab.Navigator
			initialRouteName='Home'
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: {
					backgroundColor:
						colorScheme === 'dark' ? 'hsl(210,10%, 15%)' : 'white',
				},
				labelStyle: { fontSize: 12 },
			})}
		>
			<Tab.Screen
				name='Home'
				component={Home}
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<>
								<View className='bg-[#6D39E5] w-[64px] h-[25px] rounded-[16px] justify-center items-center'>
									<MaterialCommunityIcons
										name='home-variant'
										size={16}
										color='white'
									/>
								</View>
								<Text className='text-[12px]'>Inicio</Text>
							</>
						) : (
							<MaterialCommunityIcons name='home-variant' size={22} />
						),
				}}
			/>
			<Tab.Screen
				name='tranferir'
				component={ScreenComponent}
				options={{
					tabBarIcon: ({ focused, color, size }) =>
						focused ? (
							<>
								<View className='bg-[#6D39E5] w-[64px] h-[25px] rounded-[16px] justify-center items-center'>
									<FontAwesome5
										name='hand-holding-usd'
										size={16}
										color='white'
									/>
								</View>
								<Text className='text-[12px]'>Transferir</Text>
							</>
						) : (
							<FontAwesome5 name='hand-holding-usd' size={22} />
						),
				}}
			/>
			<Tab.Screen
				name='qr'
				component={Profile}
				options={{
					tabBarIcon: ({ focused, color, size }) =>
						focused ? (
							<>
								<View className='bg-[#6D39E5] w-[64px] h-[25px] rounded-[16px] justify-center items-center'>
									<MaterialCommunityIcons
										name='qrcode-scan'
										size={16}
										color='white'
									/>
								</View>
								<Text className='text-[12px]'>QR</Text>
							</>
						) : (
							<MaterialCommunityIcons name='qrcode-scan' size={22} />
						),
				}}
			/>
			<Tab.Screen
				name='crypto'
				component={CryptoList}
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<>
								<View className='bg-[#6D39E5] w-[64px] h-[25px] rounded-[16px] justify-center items-center'>
									<Ionicons name='flash-sharp' size={16} color='white' />
								</View>
								<Text className='text-[12px]'>Crypto</Text>
							</>
						) : (
							<Ionicons name='flash-sharp' size={22} />
						),
				}}
			/>
		</Tab.Navigator>
	)
}

export default TabBar
