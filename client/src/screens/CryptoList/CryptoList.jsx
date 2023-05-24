import React from 'react';
import { ScrollView, Text } from 'react-native';
import { HeaderCryptoList } from '../../components';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

const CryptoList = () => {
	const [fontsLoaded] = useFonts({
		'poppins-bold': require('../../../assets/poppinsFonts/Poppins-Bold.ttf'),
		'poppins-semiBold': require('../../../assets/poppinsFonts/Poppins-SemiBold.ttf'),
	});

	const onLayoutCryptoListas = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return <Text>Cargando...</Text>;
	}

	return <ScrollView onLayout={onLayoutCryptoListas}>
		<HeaderCryptoList/>
	</ScrollView>;
};

export default CryptoList;
