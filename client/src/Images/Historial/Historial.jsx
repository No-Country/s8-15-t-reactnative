import { ScrollView, StatusBar, Text, View } from 'react-native'
import { HeaderHistorial } from '../components/HeaderHistorial';
import { HistorialTabs } from '../../../components/HistorialTabs';
import { useState } from 'react';
import { Estadisticas, Gastos, UltimosMovimientos } from '../../../components';


const Historial = () => {

	const tabs = ['Historial', 'Estadísticas', 'Gastos']

	const [activeTab, setActiveTab] = useState(tabs[0])

	const displayContent = () => {
		switch (activeTab) {
			case 'Historial':
				return <UltimosMovimientos/>
			case 'Estadísticas':
				return <Estadisticas/>
			case 'Gastos':
				return <Gastos/>
			default:
				break;
		}
	}
	return (
		<ScrollView>
			<StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
			<HeaderHistorial />
			<HistorialTabs
				tabs={tabs}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
			{displayContent()}
		</ScrollView>
	)
};

export default Historial;
