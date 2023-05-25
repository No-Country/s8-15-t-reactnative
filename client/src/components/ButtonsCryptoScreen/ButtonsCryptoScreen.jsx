import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { CurrencyExchange, Metric, SendToMobile } from '../../../assets/svgMaterialIcons/icons';
import colors from '../../utils/colors';

const ButtonsCryptoScreen = ({ texto }) => {
	const IconCriptList = () => {
		switch (texto) {
			case 'Transferir':
				return <SendToMobile color={colors.azul} size='35' />
			case 'Cambiar':
				return <CurrencyExchange color={colors.azul} size='35' />
			case 'Métrica':
				return <Metric color={colors.azul} size='35' />
			default:
				break;
		}
	}

	return <TouchableOpacity className='flex justify-around items-center border border-gray-400 border-solid p-1 rounded-xl h-[80px] w-[80px] bg-white' >
		<View>
			{IconCriptList()}
		</View>
		<Text className='text-azul text-base' style={{ fontFamily: 'poppins-semiBold' }} >
			{texto}
		</Text>
	</TouchableOpacity>;
};

export default ButtonsCryptoScreen;
