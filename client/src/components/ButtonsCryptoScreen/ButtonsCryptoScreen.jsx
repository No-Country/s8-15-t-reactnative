import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SendToMobile } from '../../../assets/svgMaterialIcons/icons';
import colors from '../../utils/colors';

const ButtonsCryptoScreen = () => {
	return <TouchableOpacity className='flex justify-between items-center border border-gray-400 border-solid p-1 rounded-xl h-[80px] w-[80px] bg-white' > 
		<View>
			<SendToMobile color={colors.azul} size='40'/>
		</View>
		<Text className='text-azul text-base' style={{fontFamily:'poppins-semiBold'}} >
			Transferir
		</Text>
	</TouchableOpacity>;
};

export default ButtonsCryptoScreen;
