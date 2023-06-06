import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BackArrow } from '../../../assets/svgMaterialIcons/icons';
const GoBackButton = () => {
	const navigation = useNavigation()

	return (
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<BackArrow />
		</TouchableOpacity>
	)
};

export default GoBackButton;
