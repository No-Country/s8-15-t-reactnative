import { Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import { MovimientosItems } from '../MovimientosItems';
import { CommonTitle } from '../CommonTitle';

SplashScreen.preventAutoHideAsync();

const UltimosMovimientos = () => {
	const [fontsLoaded] = useFonts({
		'roboto-regular': require('../../../assets/robotoFonts/Roboto-Regular.ttf'),
		'roboto-medium': require('../../../assets/robotoFonts/Roboto-Medium.ttf'),
		'roboto-bold': require('../../../assets/robotoFonts/Roboto-Bold.ttf'),
		'poppins-semiBold': require('../../../assets/poppinsFonts/Poppins-SemiBold.ttf'),
	});

	const onLayoutUltimosMovimientos = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return <Text>Cargando...</Text>;
	}

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
		{ id: '1233m34mnkj3jk4j8',
			categoria: 'Supermercado',
			desc: 'Supermercado',
			monto: -123
		},
		{ id: '1233m34mnkj3jk4j9',
			categoria: 'Supermercado',
			desc: 'Supermercado',
			monto: -123
		},
		{ id: '1233m34mnkj3jk4j10',
			categoria: 'Supermercado',
			desc: 'Supermercado',
			monto: -123
		},
	]

	return <View onLayout={onLayoutUltimosMovimientos} className='px-5 py-2'>
		<CommonTitle text='Últimos movimientos'/>
		{dataUltimosMov?.map((item)=> {
			return (
				<MovimientosItems key={item.id} category={item.categoria} description={item.desc} moneyAmount={item.monto}/>
			)
		})}
	</View>;
};

export default UltimosMovimientos;
