import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../utils/colors';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";
import { styles } from './historialTabs.style';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

SplashScreen.preventAutoHideAsync();


const HistorialTabs = ({ tabs, activeTab, setActiveTab }) => {

	const [fontsLoaded] = useFonts({
		'poppins-medium': require('../../../assets/poppinsFonts/Poppins-Medium.ttf'),
	});

	const onLayoutRootHistorialTabs = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	const TabButtom = ({ name, activeTab, onHandleSearchTab }) => (
		<TouchableOpacity
			className='flex justify-center items-center pb-3 relative'
			onPress={onHandleSearchTab}
		>
			<View>
				{name === 'Historial' && <MaterialCommunityIcons name="history" size={35} color={name === activeTab ? colors.azul_oscuro : colors.gris_oscuro} />}

				{name === 'Estadísticas' && <MaterialIcons name="data-usage" size={30} color={name === activeTab ? colors.azul_oscuro : colors.gris_oscuro} />}

				{name === 'Gastos' && <MaterialIcons name="attach-money" size={30} color={name === activeTab ? colors.azul_oscuro : colors.gris_oscuro} />}
			</View>
			<Text
				className='text-lg'
				style={styles.buttomText(name, activeTab)}
			>
				{name}
			</Text>
			<View
				className='absolute rounded-tl-md  rounded-tr-md'
				style={styles.underline(name, activeTab)} />
		</TouchableOpacity>
	)

	return <View onLayout={onLayoutRootHistorialTabs} className='pt-4  px-4 relative top-[-15px] bg-white rounded-tl-2xl rounded-tr-2xl border-b-2 border-gray-100'>
		<FlatList
			data={tabs}
			renderItem={({ item }) => {
				return (
					<TabButtom
						name={item}
						activeTab={activeTab}
						onHandleSearchTab={() => setActiveTab(item)}
					/>
				)
			}}
			horizontal
			showsHorizontalScrollIndicator={false}
			keyExtractor={item => item}
			contentContainerStyle={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', width: '100%' }}
		/>
	</View>;
};

export default HistorialTabs;
