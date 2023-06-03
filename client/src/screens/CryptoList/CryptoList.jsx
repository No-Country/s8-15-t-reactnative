import React from 'react'
import { ScrollView, Text } from 'react-native'
import { HeaderCryptoCommon, ListaCrypto } from '../../components'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'
import { useFonts } from 'expo-font'
import { useSelector } from 'react-redux'

SplashScreen.preventAutoHideAsync()

const CryptoList = () => {
	const [fontsLoaded] = useFonts({
		'poppins-medium': require('../../../assets/poppinsFonts/Poppins-Medium.ttf'),
		'poppins-bold': require('../../../assets/poppinsFonts/Poppins-Bold.ttf'),
		'poppins-semiBold': require('../../../assets/poppinsFonts/Poppins-SemiBold.ttf'),
	})

	const onLayoutCryptoListas = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync()
		}
	}, [fontsLoaded])

	if (!fontsLoaded) {
		return <Text>Cargando...</Text>
	}

	return (
		<ScrollView onLayout={onLayoutCryptoListas} className='bg-white'>
			<HeaderCryptoCommon titulo={'Cryptomonedas'} />
			<ListaCrypto />
		</ScrollView>
	)
}

export default CryptoList
