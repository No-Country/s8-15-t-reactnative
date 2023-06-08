import { createStackNavigator } from '@react-navigation/stack'
import TabBar from './TabBar'
import {
	CambiarDinero,
	CryptoMetric,
	CryptoTransferencia,
	Historial,
	Home,
	PagarFactura,
	PagoFacturaComprobante,
	Profile,
	Security,
} from '../screens'
import FingerprintVerification from './FingerprintVerification/FingerprintVerification'
import FaceIdVerification from './FaceIdVerification/FaceIdVerification'
import ProgressStepUser from '../screens/ProgressStepUser/ProgressStepUser'

import CobroPorProducto from '../screens/CobroPorProducto/CobroPorProducto'
import CobroListo from '../screens/CobroPorProducto/CobroListo'
import CobroLinksCreados from '../screens/CobroPorProducto/CobroLinksCreados'
import CobroDescripcion from '../screens/CobroPorProducto/CobroDescripcion'
import CobroPersonalizaLink from '../screens/CobroPorProducto/CobroPersonalizaLink'
import PinVerification from './PinVerification/PinVerification'
import SendMoney from '../screens/Transfer/SendMoney'
import TransferMoney from '../screens/Transfer/TransferMoney'
import Voucher from '../screens/Transfer/Voucher'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
const Stack = createStackNavigator()

const PrivateRoutes = () => {
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
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Bar' component={TabBar} />
			<Stack.Screen name='Home' component={Home} />
			<Stack.Screen name='Profile' component={Profile} />
			<Stack.Screen name='Historial' component={Historial} />
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
			<Stack.Screen name='Security' component={Security} />
			<Stack.Screen name='PinVerification' component={PinVerification} />
			<Stack.Screen name='cobros' component={CobroPorProducto} />
			<Stack.Screen name='cobrosCustomLink' component={CobroPersonalizaLink} />
			<Stack.Screen name='cobrosListo' component={CobroListo} />
			<Stack.Screen name='cobrosLinkList' component={CobroLinksCreados} />
			<Stack.Screen name='cobrosDescripcion' component={CobroDescripcion} />
			<Stack.Screen name='CryptoCambio' component={CambiarDinero} />
			<Stack.Screen name='CryptoMetric' component={CryptoMetric} />
			<Stack.Screen name='PagarFactura' component={PagarFactura} />
			<Stack.Screen
				name='PagoFacturaComprobante'
				component={PagoFacturaComprobante}
			/>
			<Stack.Screen name='Transferir' component={ScreenComponent} />
		</Stack.Navigator>
	)
}

export default PrivateRoutes
