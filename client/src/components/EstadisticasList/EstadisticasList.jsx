import React from 'react';
import { View } from 'react-native';
import MovimientosItems from '../MovimientosItems/MovimientosItems';

const EstadisticasList = () => {

	const dataUltimosMov= [
		{ id: '1233m34mnkj3jk4j1',
			categoria: 'Home',
			desc: 'Cuadro',
			monto: -10
		},
		{ id: '1233m34mnkj3jk4j2',
			categoria: 'Home',
			desc: 'Silla',
			monto: -145
		},
		{ id: '1233m34mnkj3jk4j3',
			categoria: 'Trabajo',
			desc: 'Trabajo',
			monto: 1345
		},
		{ id: '1233m34mnkj3jk4j4',
			categoria: 'Supermercado',
			desc: 'Supermercado',
			monto: -123
		},
		{ id: '1233m34mnkj3jk4j5',
			categoria: 'Supermercado',
			desc: 'Supermercado',
			monto: -123
		},
		{ id: '1233m34mnkj3jk4j6',
			categoria: 'Supermercado',
			desc: 'Supermercado',
			monto: -123
		},
		{ id: '1233m34mnkj3jk4j7',
			categoria: 'Supermercado',
			desc: 'Supermercado',
			monto: -123
		},
	]

	return <View className='px-5 py-2'>
		{dataUltimosMov?.map((item)=> {
			return (
				<MovimientosItems key={item.id} category={item.categoria} description={item.desc} moneyAmount={item.monto} coloredIcon={true}/>
			)
		})}
	</View>;
};

export default EstadisticasList;
