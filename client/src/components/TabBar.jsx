import React, { useMemo } from 'react'
import { useColorScheme } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
	MaterialCommunityIcons,
	FontAwesome5,
	Ionicons,
} from '@expo/vector-icons'
import { CryptoList, Historial, Home, ScannQr } from '../screens'
import PreguntasFrecuentes from './PreguntasFrecuentes/PreguntasFrecuentes'
import SendMoney from "../screens/Transfer/SendMoney";
import TransferMoney from '../screens/Transfer/TransferMoney';
import Voucher from '../screens/Transfer/Voucher';
import { useSelector } from 'react-redux';
import Notificaciones from './Notificaciones/Notificaciones'
import { CryptoList, Home, ScannQr } from '../screens'
import { Login } from '../screens/Login'
import ProgressStepUser from '../screens/ProgressStepUser/ProgressStepUser'

const Tab = createBottomTabNavigator()

const TabBar = () => {
	const colorScheme = useColorScheme()

	const nameScreen = useSelector(state => state.changeScreen);
 
	const handleScreens = () => {
		const screens = {
		  SendMoney: SendMoney,
		  TransferMoney: TransferMoney,
		  Voucher: Voucher
		};
	  
		return screens[nameScreen];
	};	  

	const ScreenComponent = useMemo(() => handleScreens(), [nameScreen]);

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
				component={Login}
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
				component={ScreenComponent}
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
