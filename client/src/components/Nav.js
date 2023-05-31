import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import ScannQr from '../screens/ScannQr'
import TabBar from './TabBar'
import Onboarding from '../screens/Onboarding/Onboarding'
import { CryptoMetric } from '../screens'

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
		</Stack.Navigator>
	)
}

export default Nav
