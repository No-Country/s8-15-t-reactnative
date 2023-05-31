import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { House, Utensils, Wallet } from '../../../assets/svgMaterialIcons/icons';
import colors from '../../utils/colors';

const MovimientosItems = ({ category = 'Supermercado', description, moneyAmount = 0, coloredIcon = false, date }) => {

	const renderIcon = () => {
		switch (category) {
			case 'Supermercado':
				return <Utensils size={23} color={coloredIcon ? colors.lila : '#000'} />;
			case 'Home':
				return <House size={23} color={coloredIcon ? colors.verde_claro : '#000'} />;
			case 'Trabajo':
				return <Wallet size={23} color={coloredIcon ? colors.rojo : '#000'} />;
			default:
				return null;
		}
	};


	const amountColor = moneyAmount < 0 ? colors.rojo : colors.verde
	let colorTextAndIcon = ''

	switch (category) {
		case 'Supermercado':
			colorTextAndIcon = colors.lila
			break
		case 'Home':
			colorTextAndIcon = colors.verde_claro
			break
		case 'Trabajo':
			colorTextAndIcon = colors.rojo
			break
		default:
			return null;
	}


	return (
		<TouchableOpacity className='flex flex-row justify-between items-center border-b-2 border-gray-200 px-5 py-5'>
			<View className='flex flex-row items-center'>
				{renderIcon()}
				<Text className='text-xl ml-3' style={{color:  coloredIcon ? colorTextAndIcon : '#000' }}>{description}</Text>
			</View>
			<View>
				<Text style={{ fontFamily: 'roboto-medium', color: amountColor }} className='text-2xl'>
					{moneyAmount} USD
				</Text>
				{date && <Text className='text-right text-gris_medio' style={{ fontFamily: 'roboto-medium' }}>
					{date}
				</Text>}
			</View>
		</TouchableOpacity>
	)
};

export default MovimientosItems;
