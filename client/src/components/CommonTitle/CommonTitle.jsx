import React from 'react';
import { Text } from 'react-native';

const CommonTitle = ({text}) => {
	return 	<Text className='text-center text-2xl mb-4' style={{ fontFamily: 'poppins-semiBold' }}>{text}</Text>
};

export default CommonTitle;
