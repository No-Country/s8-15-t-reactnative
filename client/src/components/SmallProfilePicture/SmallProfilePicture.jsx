import { Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
const SmallProfilePicture = () => {
	const navigation = useNavigation()
	const user = useSelector(state => state.user?.user);
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate('Profile')}
			className='border-solid border-2 border-white rounded-full'
		>
			<Image
				className='h-[40px] w-[40px] rounded-full'
				source={{
					uri: user.picture ? user.picture : 'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg',
				}}
			/>
		</TouchableOpacity>
	)
}

export default SmallProfilePicture
