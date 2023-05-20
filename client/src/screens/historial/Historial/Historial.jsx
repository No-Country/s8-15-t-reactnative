import { Text, View } from 'react-native'
import { HeaderHistorial } from '../../../components/HeaderHistorial';
import { HistorialTabs } from '../../../components/HistorialTabs';
import { useState } from 'react';
import { UltimosMovimientos } from '../../../components';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';


const Historial = () => {

	const tabs = ['Historial', 'Estadísticas', 'Gastos']

	const [activeTab, setActiveTab] = useState(tabs[0])

	const displayContent = () => {
		switch (activeTab) {
			case 'Historial':
				return <UltimosMovimientos/>
			case 'Estadísticas':
				return <Text>estadisticas</Text> 
			case 'Gastos':
				return <Text>gastos</Text> 
			default:
				break;
		}
	}
	return (
		<View>
			<HeaderHistorial />
			<HistorialTabs
				tabs={tabs}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
			{displayContent()}
		</View>
	)
};

export default Historial;
