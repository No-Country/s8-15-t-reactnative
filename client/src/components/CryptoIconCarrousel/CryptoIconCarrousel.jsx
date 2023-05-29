import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux'
import { updateData } from '../../reduxApp/feature/myCryptoDataSlice';

const CryptoIconCarrousel = ({item}) => {

	const dispatch = useDispatch()
	
	return <TouchableOpacity onPress={() => dispatch(updateData(item))} className=' px-3'>
		<View className='p-3 rounded-xl bg-gris_background' >
			<Image
				source={{uri: item.imgIcon}}
				style={{height: 40, width: 40, resizeMode: 'contain'}}
			/>
		</View>
		<Text className='text-center text-base mt-1' style={{fontFamily: 'poppins-regular'}}>{item.coin}</Text>
	</TouchableOpacity>;
};

export default CryptoIconCarrousel;
