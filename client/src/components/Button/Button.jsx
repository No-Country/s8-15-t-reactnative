import { Pressable, Text, View } from "react-native";
import colors from "../../utils/colors";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

const Button = ({ text, onPress }) => {

	const [fontsLoaded] = useFonts({
		'poppins-Medium': require('../../../assets/poppinsFonts/Poppins-SemiBold.ttf'),
	});

	const onLayoutRootButtom = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}
	return (
		<View className='px-[22px] pt-1 pb-1 text-white rounded-2xl' style={{ backgroundColor: colors.naranja }}
			onLayout={onLayoutRootButtom}>
			<Pressable onPress={() => onPress}>
				<Text className='text-white text-xl' style={{ fontFamily: 'poppins-Medium' }}>{text}</Text>
			</Pressable>
		</View>
	);
};

export default Button;
