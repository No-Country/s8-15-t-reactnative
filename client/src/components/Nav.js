import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import ScannQr from '../screens/ScannQr'
import TabBar from './TabBar'
import Onboarding from '../screens/Onboarding/Onboarding'
import { CryptoMetric } from '../screens'
import FingerprintVerification from './FingerprintVerification/FingerprintVerification'
import FaceIdVerification from './FaceIdVerification/FaceIdVerification'
import PinVerification from './PinVerification/PinVerification'
import Security from '../screens/Security/Security'

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
			<Stack.Screen name='Security' component={Security} />
			<Stack.Screen
				name='FingerprintVerification'
				component={FingerprintVerification}
			/>
			<Stack.Screen name='FaceIdVerification' component={FaceIdVerification} />
			<Stack.Screen name='PinVerification' component={PinVerification} />
		</Stack.Navigator>
	)
}

export default Nav
