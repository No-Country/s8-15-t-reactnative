import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native';
import { CryptoCarrousel, CryptoChart, HeaderCryptoMetric } from '../../components';
import { SendToMobile } from '../../../assets/svgMaterialIcons/icons';
import { CurrencyExchange } from '../../../assets/svgMaterialIcons/icons';
import { Feather } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useState } from 'react';
import { useFonts } from 'expo-font';
import colors from '../../utils/colors';
import { myCryptos } from '../../utils/fakeCryptoData';
import { useSelector } from 'react-redux'

SplashScreen.preventAutoHideAsync();

const CryptoMetric = () => {

	const cryptoSelected = useSelector((state) => state.myCryptoData)

	const percentageColor = cryptoSelected.modifiedPercentage > 0 ? colors.verde_claro : colors.rojo
	const percentageIcon = cryptoSelected.modifiedPercentage > 0 ? "trending-up" : "trending-down"

	const [fontsLoaded] = useFonts({
		'poppins-semiBold': require('../../../assets/poppinsFonts/Poppins-SemiBold.ttf'),
	});

	const onLayoutCryptoMetryc = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return <ActivityIndicator size="large" color={colors.violeta} />
	}


	return <ScrollView onLayout={onLayoutCryptoMetryc} className='bg-white'>
		<HeaderCryptoMetric />
		<View className='flex justify-between items-center p-6 bg-white rounded-t-3xl top-[-20px]'>
			<View className='flex flex-row justify-between p-3 rounded-3xl border border-solid border-gray-200 w-[50%] absolute bg-white top-[-40px]'>
				<TouchableOpacity className='flex justify-center items-center  text-center'>
					<SendToMobile color={colors.azul} size='35' />
					<Text className='text-azul pt-2 text-base' style={{ fontFamily: 'poppins-semiBold' }}>Transferir</Text>
				</TouchableOpacity>
				<TouchableOpacity className='flex justify-center items-center  text-center'>
					<CurrencyExchange color={colors.azul} size='35' />
					<Text className='text-azul pt-2 text-base' style={{ fontFamily: 'poppins-semiBold' }}>Cambiar</Text>
				</TouchableOpacity>
			</View>
		</View>
		<CryptoCarrousel myCryptos={myCryptos} />
		<View className='bg-violeta_background p-4 rounded-xl my-4 mx-7'>
			<View className='mb-4 flex flex-row justify-center items-center'>
				<View className='flex flex-row items-center justify-center mr-5'>
					<Image source={{uri: cryptoSelected.imgIcon}} style={{height: 40, width: 40, resizeMode: 'contain'}} />
				</View>
				<View className='flex flex-row items-center'>
					<Feather name={percentageIcon} size={24} color={percentageColor} />
					<Text className='text-3xl ml-4 font-semibold' style={{ color: percentageColor }}>{cryptoSelected?.modifiedPercentage}%</Text>
				</View>
			</View>
			<View className='flex flex-row justify-between'>
				<Text className='text-violeta text-2xl font-semibold '>
					{cryptoSelected?.amount} {cryptoSelected?.symbol}
				</Text>
				<Text className='text-violeta text-2xl text-center'>|</Text>
				<Text className='text-violeta text-2xl font-semibold '>
					US${cryptoSelected?.actualValue}
				</Text>
			</View>
		</View>
		<CryptoChart />
	</ScrollView>;
};

export default CryptoMetric;
