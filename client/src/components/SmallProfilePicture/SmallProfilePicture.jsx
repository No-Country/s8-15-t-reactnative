import React from 'react';
import { Image, View } from 'react-native';

const SmallProfilePicture = () => {
	return <View className='border-solid border-2 border-white rounded-full'>
		<Image
			className='h-[40px] w-[40px] rounded-full'
			source={{ uri: 'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg' }} />
	</View>
};

export default SmallProfilePicture;
