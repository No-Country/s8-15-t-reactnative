import { ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import Constants from 'expo-constants';
import { SmallProfilePicture } from '../SmallProfilePicture';
import { BackArrow, Metric } from '../../../assets/svgMaterialIcons/icons';
import { useNavigation } from '@react-navigation/native';


const HeaderCryptoMetric = () => {
	const navigation = useNavigation()


	return <ImageBackground
		source={require('../../../assets/fondoHistorial.webp')}
		className="h-[200] object-center"
	>
		<StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
		<View style={{ paddingTop: Constants.statusBarHeight + 27, }} className='flex flex-row justify-between items-center px-4'>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<BackArrow/>
			</TouchableOpacity>
			<View className='flex flex-row justify-between items-center gap-x-2 '>
				<Metric color="#fff" size='40'/>
				<Text className='text-3xl text-white'style={{fontFamily: 'poppins-semiBold'}}>Métrica</Text>
			</View>
			<SmallProfilePicture />
		</View>
	</ImageBackground>;
};

export default HeaderCryptoMetric;
