import { createStackNavigator } from '@react-navigation/stack'
import TabBar from './TabBar'
import { CryptoMetric, CryptoTransferencia, Home, Onboarding, Profile, ScannQr } from '../screens'

const Stack = createStackNavigator()

const Nav = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Onboarding' component={Onboarding} />
			<Stack.Screen name='Bar' component={TabBar} />
			<Stack.Screen name='Qr' component={ScannQr} />
			<Stack.Screen name='Profile' component={Profile} />
			<Stack.Screen name='Home' component={Home} />
			<Stack.Screen name='CryptoMetric' component={CryptoMetric} />
			<Stack.Screen name='CryptoTransferencia' component={CryptoTransferencia} />
		</Stack.Navigator>
	)
}

export default Nav
