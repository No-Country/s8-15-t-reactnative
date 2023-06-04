import React from 'react'
import { View, useColorScheme } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
	MaterialCommunityIcons,
	FontAwesome5,
	Octicons,
	Ionicons,
} from '@expo/vector-icons'
import { CryptoList, Historial, Home, PagarFactura, ScannQr } from '../screens'
import PreguntasFrecuentes from './PreguntasFrecuentes/PreguntasFrecuentes'
import Notificaciones from './Notificaciones/Notificaciones'
import { HouseTabBar, Transaction } from '../../assets/svgMaterialIcons/icons'

const Tab = createBottomTabNavigator()

const TabBar = () => {
	const colorScheme = useColorScheme()

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
				component={PagarFactura}
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<View className='bg-violeta_background py-1.5 px-6 rounded-full'>
								<HouseTabBar size='22' />
							</View>
						) : (
							<View>
								<HouseTabBar size='25' />
							</View>
						),
				}}
			/>
			<Tab.Screen
				name='tranferir'
				component={Home}
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<View className='bg-violeta_background py-1.5 px-6 rounded-full'>
								<Transaction size='25' />
							</View>
						) : (
							<View>
								<Transaction size='25' />
							</View>
						),
				}}
			/>
			<Tab.Screen
				name='qr'
				component={ScannQr}
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<View className='bg-violeta_background py-1.5 px-6 rounded-full'>
								<MaterialCommunityIcons name='qrcode-scan' size={22} />
							</View>
						) : (
							<View>
								<MaterialCommunityIcons name='qrcode-scan' size={22} />
							</View>
						),
				}}
			/>
			<Tab.Screen
				name='crypto'
				component={CryptoList}
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<View className='bg-violeta_background py-1.5 px-6 rounded-full'>
								<Ionicons name='flash-outline' size={22} />
							</View>
						) : (
							<View>
								<Ionicons name='flash-outline' size={22} />
							</View>
						),
				}}
			/>
		</Tab.Navigator>
	)
}

export default TabBar
