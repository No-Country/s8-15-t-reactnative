import { createStackNavigator } from '@react-navigation/stack'
import { ActivityIndicator } from 'react-native'
import TabBar from './TabBar'
import {
	CambiarDinero,
	CryptoMetric,
	CryptoTransferencia,
	Home,
	Onboarding,
	PagarFactura,
	PagoFacturaComprobante,
	Profile,
} from '../screens'
import FingerprintVerification from './FingerprintVerification/FingerprintVerification'
import FaceIdVerification from './FaceIdVerification/FaceIdVerification'
import ProgressStepUser from '../screens/ProgressStepUser/ProgressStepUser'
import { Login } from '../screens/Login'
import Registro from '../screens/Registro/Registro'
import { setUserData } from '../reduxApp/feature/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { login, logout } from '../reduxApp/feature/authSlice'
import { View } from 'react-native-animatable'

const Stack = createStackNavigator()

const Nav = () => {
	const dispatch = useDispatch()

	const user = useSelector(state => state.user?.user)
	const loggedInUser = useSelector(state => state.auth.loggedIn)
	console.log('loggedInUser', loggedInUser)
	const checkUserLoggedIn = async () => {
		try {
			const userData = await AsyncStorage.getItem('userData')
			console.log('userdata', userData)
			if (userData) {
				dispatch(setUserData(JSON.parse(userData)))
				dispatch(login())
			} else {
				dispatch(logout())
			}
		} catch (error) {
			console.error('Error:', error)
		}
	}

	useEffect(() => {
		checkUserLoggedIn()
	}, [loggedInUser])

	console.log('user', user)

	return loggedInUser ? (
		<View className='flex-1 justify-center items-center'>
			<ActivityIndicator size={'large'} />
		</View>
	) : loggedInUser && user ? (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Bar' component={TabBar} />
			<Stack.Screen name='Home' component={Home} />
			<Stack.Screen name='Profile' component={Profile} />
			<Stack.Screen name='CryptoMetric' component={CryptoMetric} />
			<Stack.Screen name='VerificationUser' component={ProgressStepUser} />
			<Stack.Screen
				name='FingerprintVerification'
				component={FingerprintVerification}
			/>
			<Stack.Screen name='FaceIdVerification' component={FaceIdVerification} />
			<Stack.Screen
				name='CryptoTransferencia'
				component={CryptoTransferencia}
			/>
			<Stack.Screen name='CryptoCambio' component={CambiarDinero} />
		</Stack.Navigator>
	) : (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Onboarding' component={Onboarding} />
			<Stack.Screen name='Login' component={Login} />
			<Stack.Screen name='Register' component={Registro} />
			<Stack.Screen name='VerificationUser' component={ProgressStepUser} />
			<Stack.Screen name='PagarFactura' component={PagarFactura} />
			<Stack.Screen
				name='PagoFacturaComprobante'
				component={PagoFacturaComprobante}
			/>
		</Stack.Navigator>
	)
}

export default Nav
