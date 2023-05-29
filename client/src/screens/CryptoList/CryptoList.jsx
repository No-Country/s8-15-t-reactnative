import React from 'react';
import { ScrollView, Text } from 'react-native';
import { HeaderCryptoList, ListaCrypto } from '../../components';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import { useSelector } from 'react-redux'

SplashScreen.preventAutoHideAsync();

const CryptoList = () => {

	const cryptoSelected = useSelector((state) => state)
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

	return <ScrollView onLayout={onLayoutCryptoListas} className='bg-white'>
		<HeaderCryptoList/>
		<ListaCrypto/>
	</ScrollView>;
};

export default CryptoList;
