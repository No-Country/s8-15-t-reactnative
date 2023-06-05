import { View } from 'react-native'
import { DonutChart } from '../DonutChart';
import { UltimosMoviemientosFilters } from '../UltimosMoviemientosFilters';
import EstadisticasList from '../EstadisticasList/EstadisticasList';
import { CommonTitle } from '../CommonTitle';

const Estadisticas = () => {


	return (
		<View className='bg-white' >
			<CommonTitle text='Secciones'/>
			<DonutChart/>
			<UltimosMoviemientosFilters/>
			<EstadisticasList/>
		</View>
	);
};

export default Estadisticas;
