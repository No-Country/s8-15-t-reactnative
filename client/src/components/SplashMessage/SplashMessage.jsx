import { View, Text, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native'
import colors from '../../utils/colors'
import Stepper from '../Stepper/Stepper'
import { imageList } from './OnboardingImages'
import { useFonts } from 'expo-font'
import { useCallback } from 'react'

const SplashMessage = ({
	title,
	buttonTitle,
	buttonColor,
	buttonAction,
	activeStep,
	description1,
	description2,
	description3,
}) => {
	const [fontsLoaded] = useFonts({
		'poppins-medium': require('../../../assets/poppinsFonts/Poppins-Medium.ttf'),
		'poppins-regular': require('../../../assets/poppinsFonts/Poppins-Regular.ttf'),
	})

	const onLayoutButtom = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync()
		}
	}, [fontsLoaded])

	if (!fontsLoaded) {
		return <ActivityIndicator size="large" color={colors.violeta} />
	}
	return (
		<View className='flex-1'>
			<ImageBackground source={imageList[activeStep]} className='h-full w-full'>
				<View
					className='mt-auto items-center  bg-white h-3/5 '
					style={{
						borderTopLeftRadius: 20,
						borderTopRightRadius: 20,
						fontFamily: 'poppins-regular',
					}}
				>
					<View className='mt-7 items-center px-16 relative h-full'>
						<Text
							className='text-2xl'
							style={{
								fontFamily: 'poppins-regular',
								fontWeight: 700,
								lineHeight: 36,
								textAlign: 'center',
								fontSize: 24,
							}}
						>
							{title}
						</Text>
						<View className='justify-around items-center flex flex-col h-2/4 w-full mt-4'>
							<Text
								className=' '
								style={{
									fontFamily: 'poppins-regular',
									fontSize: 16,
									lineHeight: 24,
									textAlign: 'center',
									fontWeight: '400',
									letterSpacing: -0.02,
								}}
							>
								{description1}
							</Text>
							<Text
								className=''
								style={{
									fontFamily: 'poppins-regular',
									fontSize: 16,
									lineHeight: 24,
									textAlign: 'center',
									fontWeight: '400',
								}}
							>
								{description2}
							</Text>
							<Text
								className=''
								style={{
									fontFamily: 'poppins-regular',
									fontSize: 17,
									lineHeight: 20,
									textAlign: 'center',
									fontWeight: '900',
								}}
							>
								{description3}
							</Text>
						</View>
						<View className='mt-6'>
							<TouchableOpacity
								className='rounded-full px-14 py-2.5'
								style={{
									backgroundColor: colors[buttonColor],
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
								onPress={buttonAction}
							>
								<Text
									style={{
										color: 'white',
										fontFamily: 'poppins-medium',
										fontSize: 18,
										lineHeight: 20,
										textAlign: 'center',
										fontWeight: '700',
										letterSpacing: 0.1,
									}}
								>
									{buttonTitle}
								</Text>
							</TouchableOpacity>
							<Stepper activeStep={activeStep} />
						</View>
					</View>
				</View>
			</ImageBackground>
		</View>
	)
}

export default SplashMessage
