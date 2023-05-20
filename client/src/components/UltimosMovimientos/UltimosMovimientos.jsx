import { Text, View } from 'react-native';
import { House, Utensils, Wallet } from '../../../assets/svgMaterialIcons/icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import colors from '../../utils/colors';

SplashScreen.preventAutoHideAsync();

const UltimosMovimientos = () => {
	const [fontsLoaded] = useFonts({
		'roboto-regular': require('../../../assets/robotoFonts/Roboto-Regular.ttf'),
		'roboto-medium': require('../../../assets/robotoFonts/Roboto-Medium.ttf'),
		'roboto-bold': require('../../../assets/robotoFonts/Roboto-Bold.ttf'),
	});

	const onLayoutUltimosMovimientos = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return <Text>Cargando...</Text>;
	}

	return <View onLayout={onLayoutUltimosMovimientos} className='px-5 py-2'>
		<Text className='text-center text-2xl mb-4' style={{ fontFamily: 'roboto-bold' }}>Últimos movimientos</Text>
		<View className=''>
			<View className='flex flex-row justify-between items-center border-b-2 border-gray-200 px-5 py-5'>
				<View className='flex flex-row items-center'>
					<House size='25' />
					<Text style={{ fontFamily: 'roboto-regular' }} className='text-xl ml-3'>Cuadro</Text>
				</View>
				<Text style={{ fontFamily: 'roboto-medium', color: colors.rojo }} className='text-2xl'>
					-10USD
				</Text>
			</View>
		</View>

		<View className=''>
			<View className='flex flex-row justify-between items-center border-b-2 border-gray-200 px-5 py-5'>
				<View className='flex flex-row items-center'>
					<House size='25' />
					<Text style={{ fontFamily: 'roboto-regular' }} className='text-xl ml-3'>Silla</Text>
				</View>
				<Text style={{ fontFamily: 'roboto-medium', color: colors.rojo }} className='text-2xl'>
					-145USD
				</Text>
			</View>
		</View>

		<View className=''>
			<View className='flex flex-row justify-between items-center border-b-2 border-gray-200 px-5 py-5'>
				<View className='flex flex-row items-center'>
					<Wallet size='25'/>
					<Text style={{ fontFamily: 'roboto-regular' }} className='text-xl ml-3'>Trabajo</Text>
				</View>
				<Text style={{ fontFamily: 'roboto-medium', color: colors.verde }} className='text-2xl'>
					+1345USD
				</Text>
			</View>
		</View>

		<View className=''>
			<View className='flex flex-row justify-between items-center border-b-2 border-gray-200 px-5 py-5'>
				<View className='flex flex-row items-center'>
					<Utensils size='25'/>
					<Text style={{ fontFamily: 'roboto-regular' }} className='text-xl ml-3'>Supermercado</Text>
				</View>
				<Text style={{ fontFamily: 'roboto-medium', color: colors.rojo }} className='text-2xl'>
					-123USD
				</Text>
			</View>
		</View>
	</View>;
};

export default UltimosMovimientos;
