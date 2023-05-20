import { View } from 'react-native'
import { HeaderHistorial } from '../../../components/HeaderHistorial';
import { HistorialTabs } from '../../../components/HistorialTabs';
import { useState } from 'react';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const Historial = () => {
	
	const tabs = ['Historial', 'Estadísticas',  'Gastos']
	
	const [activeTab, setActiveTab] = useState(tabs[0].text)
	return (
		<View>
			<HeaderHistorial />
			<HistorialTabs
				tabs={tabs}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
		</View>
	)
};

export default Historial;
