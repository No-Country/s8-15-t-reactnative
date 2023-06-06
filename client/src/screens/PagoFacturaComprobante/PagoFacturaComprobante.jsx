import { TouchableOpacity } from 'react-native'
import { BackArrow } from '../../../assets/svgMaterialIcons/icons'
import { useNavigation } from '@react-navigation/native'

const PagoFacturaComprobante = () => {
	const navigation = useNavigation()

	return (
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<BackArrow />
		</TouchableOpacity>
	)
}

export default PagoFacturaComprobante
