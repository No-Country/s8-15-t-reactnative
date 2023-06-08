import { View, Image, ActivityIndicator } from 'react-native'
import { useCallback, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import SplashMessageLogin from './SplashMessageLogin'
import colors from '../../utils/colors'

SplashScreen.preventAutoHideAsync()

const Login = () => {
	const navigation = useNavigation()
	const [activeStep, setActiveStep] = useState(0)

	const infoSteps = [
		{
			title: '¡Hola de vuelta!',
			description1: 'Entrá a tu perfil nuevamente',
		},
	]

	const currentStep = infoSteps[activeStep]

	const [fontsLoaded] = useFonts({
		'poppins-semiBold': require('../../../assets/poppinsFonts/Poppins-SemiBold.ttf'),
		'poppins-medium': require('../../../assets/poppinsFonts/Poppins-Medium.ttf'),
		'poppins-regular': require('../../../assets/poppinsFonts/Poppins-Regular.ttf'),
	})

	const onLayoutLogin = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync()
		}
	}, [fontsLoaded])

	if (!fontsLoaded) {
		return <ActivityIndicator size='large' color={colors.violeta} />
	}

	return (
		<View onLayout={onLayoutLogin}>
			<Image
				source={require('../../../assets/FondoLoginRegistro.png')}
				className='h-[250px] w-full'
				resizeMode='cover'
			/>
			<SplashMessageLogin
				title={currentStep.title}
				description1={currentStep.description1}
			/>
		</View>
	)
}

export default Login
