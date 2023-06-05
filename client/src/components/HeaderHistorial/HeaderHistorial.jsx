import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./headerHistorial.styles";
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import Button from "../Button/Button";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useState } from 'react';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

const HeaderHistorial = () => {
	const [ocultarNumero, setOcultarNumero] = useState(false)

	const [fontsLoaded] = useFonts({
		'poppins-semiBold': require('../../../assets/poppinsFonts/Poppins-SemiBold.ttf'),
	});

	const onLayoutHeaderHistorial = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return ''
	}

	const dineroDisponible = 1547.74


	const numeroNormalizado = dineroDisponible.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
	const numeroOculto = numeroNormalizado.replace(/[0-9]/g, '·');


	return <ImageBackground
		onLayout={onLayoutHeaderHistorial}
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
						style={{ fontFamily: 'poppins-semiBold' }}>Dinero disponible</Text>
					<TouchableOpacity onPress={() => setOcultarNumero(!ocultarNumero)}>
						<Ionicons name="ios-eye-outline" size={24} color="#fff" />
					</TouchableOpacity>
				</View>
				<Text className='text-5xl text-white pt-4 font' style={{ fontFamily: 'poppins-semiBold' }}>US${ocultarNumero ? numeroOculto : numeroNormalizado}</Text>
			</View>
		</View>
	</ImageBackground>;
};

export default HeaderHistorial;
