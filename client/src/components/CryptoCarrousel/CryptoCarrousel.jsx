import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { CryptoIconCarrousel } from '../CryptoIconCarrousel';
import colors from '../../utils/colors';

const CryptoCarrousel = ({myCryptos}) => {



	return (
		<View className='mt-4 mx-7 flex flex-row items-center'>
			<View>
				<MaterialIcons name="keyboard-arrow-left" size={40} color={colors.violeta} />
			</View>
			<FlatList
				data={myCryptos}
				horizontal={true}
				renderItem={({ item }) =><CryptoIconCarrousel item={item}/>}
				keyExtractor={item => item.id}
			/>
			<View>
				<MaterialIcons name="keyboard-arrow-right" size={40} color={colors.violeta} />
			</View>
		</View>
	)
};

export default CryptoCarrousel;
