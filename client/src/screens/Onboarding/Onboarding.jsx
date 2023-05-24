import { Text, View } from 'react-native'
import colors from '../../utils/colors'
import { useFonts } from 'expo-font'
import { LinearGradient } from 'expo-linear-gradient'
import { useCallback } from 'react'
import { SplashMessage } from '../../components/SplashMessage'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Onboarding = () => {
	const [fontsLoaded] = useFonts({
		'poppins-medium': require('../../../assets/poppinsFonts/Poppins-Medium.ttf'),
	})
	const navigation = useNavigation()
	const [activeStep, setActiveStep] = useState(0)

	const onLayoutButtom = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync()
		}
	}, [fontsLoaded])

	if (!fontsLoaded) {
		return <Text>Cargando...</Text>
	}
	const infoSteps = [
		{
			title: '¡Hola!',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit ¡Lorem ipsum dolor sit amet!',
			buttonTitle: 'Siguiente',
			buttonColor: 'violeta',
			step: 0,
		},
		{
			title: 'Lorem ipsum',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit ¡Lorem ipsum dolor sit amet!',
			buttonTitle: 'Siguiente',
			buttonColor: 'violeta',
			step: 1,
		},
		{
			title: 'Lorem ipsum2',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit ¡Lorem ipsum dolor sit amet!',
			buttonTitle: 'Comenzar',
			buttonColor: 'naranja',
			step: 2,
		},
	]

	const currentStep = infoSteps[activeStep]

	const handlePress = () => {
		if (activeStep < 2) {
			setActiveStep(activeStep + 1)
		} else {
			navigation.navigate('Bar')
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
					description={currentStep.description}
					buttonTitle={currentStep.buttonTitle}
					buttonAction={handlePress}
					activeStep={activeStep}
					buttonColor={currentStep.buttonColor}
				/>
			</LinearGradient>
		</View>
	)
}

export default Onboarding
