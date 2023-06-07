/* eslint-disable react/prop-types */
import { ActivityIndicator, Pressable, Text, View } from 'react-native'
import colors from '../../utils/colors'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'
import { useFonts } from 'expo-font'

SplashScreen.preventAutoHideAsync()

const Button = ({ text, onPress }) => {
	const [fontsLoaded] = useFonts({
		'poppins-medium': require('../../../assets/poppinsFonts/Poppins-Medium.ttf'),
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
		<View
			onLayout={onLayoutButtom}
			className='px-[22px] pt-1 pb-1 text-white rounded-2xl'
			style={{ backgroundColor: colors.naranja }}
		>
			<Pressable onPress={() => onPress}>
				<Text
					className=' text-center text-white text-xl'
					style={{ fontFamily: 'poppins-medium' }}
				>
					{text}
				</Text>
			</Pressable>
		</View>
	)
}

export default Button
