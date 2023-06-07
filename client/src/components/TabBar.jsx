import React from 'react'
import { useColorScheme } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
	MaterialCommunityIcons,
	FontAwesome5,
	Octicons,
	Ionicons,
} from '@expo/vector-icons'
import { CambiarDinero, CryptoList, Historial, Home, ScannQr } from '../screens'
import PreguntasFrecuentes from './PreguntasFrecuentes/PreguntasFrecuentes'
import Notificaciones from './Notificaciones/Notificaciones'
import CobroPorProducto from '../screens/CobroPorProducto/CobroPorProducto'
import CobroDescripcion from '../screens/CobroPorProducto/CobroDescripcion'
import CobroPersonalizaLink from '../screens/CobroPorProducto/CobroPersonalizaLink'
import CobroListo from '../screens/CobroPorProducto/CobroListo'
import CobroLinksCreados from '../screens/CobroPorProducto/CobroLinksCreados'

const Tab = createBottomTabNavigator()

const TabBar = () => {
	const colorScheme = useColorScheme()

	return (
		<Tab.Navigator
			initialRouteName='Home'
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarShowLabel: false,
				activeTintColor: '#e91e63',
				inactiveTintColor: '#ffffff',
				tabBarStyle: {
					backgroundColor:
						colorScheme === 'dark' ? 'hsl(210,10%, 15%)' : 'white',
				},
				labelStyle: { fontSize: 12 },
			})}
		>
			<Tab.Screen
				name='Home'
				component={CobroLinksCreados}
				options={{
					tabBarIcon: ({ focused, color, size }) =>
						focused ? (
							<MaterialCommunityIcons name='home-variant' size={22} />
						) : (
							<MaterialCommunityIcons name='home-variant-outline' size={22} />
						),
				}}
			/>
			<Tab.Screen
				name='tranferir'
				component={Home}
				options={{
					tabBarIcon: ({ focused, color, size }) => (
						<FontAwesome5 name='hand-holding-usd' size={22} />
					),
				}}
			/>
			<Tab.Screen
				name='qr'
				component={ScannQr}
				options={{
					tabBarIcon: ({ focused, color, size }) => (
						<MaterialCommunityIcons name='qrcode-scan' size={22} />
					),
				}}
			/>
			<Tab.Screen
				name='crypto'
				component={CryptoList}
				options={{
					tabBarIcon: ({ focused, color, size }) =>
						focused ? (
							<Ionicons name='flash-sharp' size={22} />
						) : (
							<Ionicons name='flash-outline' size={22} />
						),
				}}
			/>
		</Tab.Navigator>
	)
}

export default TabBar
