import { ActivityIndicator, Text, View } from 'react-native'
import { useFonts } from 'expo-font'
import { LinearGradient } from 'expo-linear-gradient'
import { useCallback } from 'react'
import { SplashMessage } from '../../components/SplashMessage'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as SplashScreen from 'expo-splash-screen'
import { infoSteps } from './InfoStep'
import colors from '../../utils/colors'

SplashScreen.preventAutoHideAsync()

const Onboarding = () => {
	const [fontsLoaded] = useFonts({
		'poppins-medium': require('../../../assets/poppinsFonts/Poppins-Medium.ttf'),
		'poppins-regular': require('../../../assets/poppinsFonts/Poppins-Regular.ttf'),
	})
	const navigation = useNavigation()
	const [activeStep, setActiveStep] = useState(0)

	const onLayoutButtom = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync()
		}
	}, [fontsLoaded])

	if (!fontsLoaded) {
		return <ActivityIndicator size='large' color={colors.violeta} />
	}

	const currentStep = infoSteps[activeStep]

	const handlePress = () => {
		if (activeStep < 2) {
			setActiveStep(activeStep + 1)
		} else {
			navigation.navigate('Security')
		}
	}

	return (
		<View
			onLayout={onLayoutButtom}
			className='flex justify-end items-end h-full w-full '
		>
			<LinearGradient
				colors={['#7029E2', '#55B7FF']}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				style={{ height: '100%', width: '100%' }}
			>
				<SplashMessage
					title={currentStep.title}
					description1={currentStep.description1}
					description2={currentStep.description2}
					description3={currentStep.description3}
					buttonTitle={currentStep.buttonTitle}
					buttonAction={handlePress}
					activeStep={activeStep}
					buttonColor={currentStep.buttonColor}
					backgroundImage={currentStep.backgroundImage}
				/>
			</LinearGradient>
		</View>
	)
}

export default Onboarding
