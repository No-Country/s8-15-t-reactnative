import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./headerHistorial.styles";
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";
import Button from "../Button/Button";

SplashScreen.preventAutoHideAsync();

const HeaderHistorial = () => {

	const [fontsLoaded] = useFonts({
		'poppins-SemiBold': require('../../../assets/poppinsFonts/Poppins-SemiBold.ttf'),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return <ImageBackground
		onLayout={onLayoutRootView}
		source={require('../../../assets/fondoHistorial.webp')}
		className="h-[255]"
	>
		<View style={styles.containerHeader}>
			<View className='flex flex-row justify-between mb-8'>
				<TouchableOpacity>
					<MaterialIcons name="notifications-none" size={27} color="white" />
				</TouchableOpacity>
				<View className='flex flex-row justify-center items-center 
				gap-x-7'>
					<Button text='Cbu/Cvu' />
					<View className='border-solid border-2 border-white rounded-full'>
						<Image
							className='h-[40px] w-[40px] rounded-full'
							source={{ uri: 'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg' }} />
					</View>
				</View>
			</View>
			<View className="flex items-center">
				<View className='flex flex-row justify-center items-center gap-3'>
					<Text className='font-medium text-[20px] text-white	'
						style={{ fontFamily: 'poppins-SemiBold' }}>Dinero disponible</Text>
					<TouchableOpacity>
						<Ionicons name="ios-eye-outline" size={24} color="#fff" />
					</TouchableOpacity>
				</View>
				<Text className='text-5xl text-white pt-4 font' style={{ fontFamily: 'poppins-SemiBold' }}>US$1.547.54</Text>
			</View>
		</View>
	</ImageBackground>;
};

export default HeaderHistorial;
