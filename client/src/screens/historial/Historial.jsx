import { useState } from 'react';
import { ScrollView, StatusBar } from 'react-native'
import { Estadisticas, Gastos, HeaderHistorial, HistorialTabs, UltimosMovimientos } from '../../components';


const Historial = () => {

	const tabs = ['Historial', 'Estadísticas', 'Gastos']

	const [activeTab, setActiveTab] = useState(tabs[0])

	const displayContent = () => {
		switch (activeTab) {
			case 'Historial':
				return <UltimosMovimientos />
			case 'Estadísticas':
				return <Estadisticas />
			case 'Gastos':
				return <Gastos />
			default:
				break;
		}
	}
	return (
		<ScrollView className='bg-white'>
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
