/* eslint-disable react/prop-types */
import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View } from 'react-native'

const HomePagarButtom = ({icono, text}) => {

	const navigation = useNavigation()
	return (
		<TouchableOpacity className='items-center' onPress={() => navigation.navigate('')}>
			<View className='rounded-lg w-[70px] aspect-square bg-gris_background flex justify-center items-center'>
				{icono}
			</View>
			<Text
				style={{ fontFamily: 'poppins-regular' }}
				className='text-center text-base'
			>
				{text}
			</Text>
		</TouchableOpacity>
	)
}

export default HomePagarButtom
