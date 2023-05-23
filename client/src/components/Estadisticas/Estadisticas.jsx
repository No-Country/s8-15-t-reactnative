import { Text, View, ScrollView } from 'react-native'
import { VictoryPie, VictoryChart, VictoryTheme } from "victory-native";
import { DonutChart } from '../DonutChart';
import { UltimosMoviemientosFilters } from '../UltimosMoviemientosFilters';
import EstadisticasList from '../EstadisticasList/EstadisticasList';

const Estadisticas = () => {


	return (
		<View >
			<Text  className='text-center text-2xl mb-4' style={{ fontFamily: 'roboto-bold' }}>
				Secciones
			</Text>
			<DonutChart/>
			<UltimosMoviemientosFilters/>
			<EstadisticasList/>
		</View>
	);
};

export default Estadisticas;
