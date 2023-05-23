import { Text, TouchableOpacity, View } from 'react-native';
import colors from '../../utils/colors';
import { useState } from 'react';
import { MovimientosItems } from '../MovimientosItems';

const Gastos = () => {
	const [activePeriod, setActivePeriod] = useState('semana')

	const dataUltimosMov = [
		{
			id: '1233m34mnkj3jk4j1',
			categoria: 'Home',
			desc: 'Cuadro',
			monto: -10
		},
		{
			id: '1233m34mnkj3jk4j2',
			categoria: 'Home',
			desc: 'Silla',
			monto: -145
		},
		{
			id: '1233m34mnkj3jk4j4',
			categoria: 'Supermercado',
			desc: 'Supermercado',
			monto: -123
		},
		{
			id: '1233m34mnkj3jk4j5',
			categoria: 'Supermercado',
			desc: 'Supermercado',
			monto: -123
		},
		{
			id: '1233m34mnkj3jk4j6',
			categoria: 'Supermercado',
			desc: 'Supermercado',
			monto: -123
		},
		{
			id: '1233m34mnkj3jk4j7',
			categoria: 'Supermercado',
			desc: 'Supermercado',
			monto: -123
		},
		{
			id: '1233m34mnkj3jk4j8',
			categoria: 'Supermercado',
			desc: 'Supermercado',
			monto: -123
		},
		{
			id: '1233m34mnkj3jk4j9',
			categoria: 'Supermercado',
			desc: 'Supermercado',
			monto: -123
		},
		{
			id: '1233m34mnkj3jk4j10',
			categoria: 'Supermercado',
			desc: 'Supermercado',
			monto: -123
		},
	]

	return <View className='flex'>
		<View className='flex flex-row  justify-center' >
			<TouchableOpacity onPress={() => setActivePeriod('semana')} className='border-solid border rounded-l-full w-[30%] h-[40px] flex justify-center items-center' style={{ borderColor: colors.azul_oscuro, backgroundColor: activePeriod === 'semana' ? '#DEE5F8' : '#fff' }}>
				<Text className='text-lg' style={{ fontFamily: 'roboto-medium', color: colors.azul_oscuro }}>Semana</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setActivePeriod('mes')} className='border-solid border-t border-b w-[30%] h-[40px] flex justify-center items-center' style={{ borderColor: colors.azul_oscuro, backgroundColor: activePeriod === 'mes' ? '#DEE5F8' : '#fff' }}>
				<Text className='text-lg' style={{ fontFamily: 'roboto-medium', color: colors.azul_oscuro }}>Mes</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setActivePeriod('anio')} className='border-solid border rounded-r-full w-[30%] h-[40px] flex justify-center items-center' style={{ borderColor: colors.azul_oscuro, backgroundColor: activePeriod === 'anio' ? '#DEE5F8' : '#fff' }}>
				<Text className='text-lg' style={{ fontFamily: 'roboto-medium', color: colors.azul_oscuro }}>Año</Text>
			</TouchableOpacity>
		</View>
		<Text className='text-center text-2xl my-4' style={{ fontFamily: 'roboto-bold' }}>Últimos movimientos</Text>
		<View className='px-5 py-2'>
			{dataUltimosMov?.map((item) => {
				return (
					<MovimientosItems key={item.id} category={item.categoria} description={item.desc} moneyAmount={item.monto} />
				)
			})}
		</View>
	</View>;
};

export default Gastos;
