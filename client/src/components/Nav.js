import { createStackNavigator } from '@react-navigation/stack'
import TabBar from './TabBar'
import {
	CambiarDinero,
	CryptoMetric,
	CryptoTransferencia,
	Home,
	Onboarding,
	Profile,
	ScannQr,
} from '../screens'
import FingerprintVerification from './FingerprintVerification/FingerprintVerification'
import FaceIdVerification from './FaceIdVerification/FaceIdVerification'
import PinVerification from './PinVerification/PinVerification'
import Security from '../screens/Security/Security'
import CobroListo from '../screens/CobroPorProducto/CobroListo'
import CobroLinksCreados from '../screens/CobroPorProducto/CobroLinksCreados'
import CobroDescripcion from '../screens/CobroPorProducto/CobroDescripcion'
import CobroPersonalizaLink from '../screens/CobroPorProducto/CobroPersonalizaLink'
import CobroPorProducto from '../screens/CobroPorProducto/CobroPorProducto'

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
			<Stack.Screen
				name='CryptoTransferencia'
				component={CryptoTransferencia}
			/>
			<Stack.Screen name='CryptoCambio' component={CambiarDinero} />
			<Stack.Screen name='cobros' component={CobroPorProducto} />
			<Stack.Screen name='cobrosCustomLink' component={CobroPersonalizaLink} />
			<Stack.Screen name='cobrosListo' component={CobroListo} />
			<Stack.Screen name='cobrosLinkList' component={CobroLinksCreados} />
			<Stack.Screen name='cobrosDescripcion' component={CobroDescripcion} />
		</Stack.Navigator>
	)
}

export default Nav
