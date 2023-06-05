import {
	ScrollView,
	StatusBar,
	View,
	TouchableOpacity,
	Text,
	ActivityIndicator,
} from 'react-native'
import { Input, SmallProfilePicture } from '../../components'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import Constants from 'expo-constants'
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import colors from '../../utils/colors'
import { BackArrow } from '../../../assets/svgMaterialIcons/icons'

SplashScreen.preventAutoHideAsync();


const PagarFactura = () => {
	const navigation = useNavigation()
	const [fontsLoaded] = useFonts({
		'poppins-semiBold': require('../../../assets/poppinsFonts/Poppins-SemiBold.ttf'),
	});

	const onLayoutPagoFactura = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return <ActivityIndicator size="large" color={colors.violeta} />
	}

	return (
		<ScrollView onLayout={onLayoutPagoFactura} >
			<LinearGradient
				colors={['#7029E2', '#55B7FF']}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				style={{ height: '100%', width: '100%' }}
			>
				<StatusBar
					translucent
					backgroundColor='transparent'
					barStyle='light-content'
				/>
				<View
					style={{ paddingTop: Constants.statusBarHeight + 27 }}
					className='flex flex-row justify-between items-center px-4'
				>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<BackArrow/>
					</TouchableOpacity>
					<View className='flex flex-row justify-between items-center gap-x-2 '>
						<Text
							className='text-3xl text-white'
							style={{ fontFamily: 'poppins-semiBold' }}
						>
							Pagar Factura
						</Text>
					</View>
					<SmallProfilePicture />
				</View>
			</LinearGradient>
			<Input />
		</ScrollView>
	)
}

export default PagarFactura
