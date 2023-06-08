/* eslint-disable react/prop-types */
import { useState } from 'react'
import {
	View,
	Image,
	Text,
	ScrollView,
	TextInput,
	ImageBackground,
	TouchableOpacity,
} from 'react-native'
import Constants from 'expo-constants'

import { GoBackButton } from '../../components'
const CobroDescripcion = ({ navigation, route }) => {
	const [text, onChangeText] = useState('')
	const data = route.params
	const goShare = () => {
		data.descripcion = text
		navigation.navigate('cobrosListo', data)
	}

	return (
		<ScrollView className='bg-white'>
			<ImageBackground
				source={require('../../../assets/fondoHistorial.webp')}
				className='h-[200] '
				style={{
					paddingTop: Constants.statusBarHeight + 27,
					paddingHorizontal: 20,
				}}
			>
				<View className='flex flex-row justify-between items-center mb-4'>
					<GoBackButton />
					<Text
						className='text-3xl text-white'
						style={{ fontFamily: 'poppins-semiBold' }}
					>
						Cobros
					</Text>
					<View
						className='flex flex-row justify-center items-center 
				gap-x-7'
					>
						<View className='border-solid border-2 border-white rounded-full'>
							<Image
								className='h-[40px] w-[40px] rounded-full'
								source={{
									uri: 'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg',
								}}
							/>
						</View>
					</View>
				</View>
				<View className='flex items-center'>
					<Text className=' text-[20px] text-white font-semibold'>
						Créa un link de pago
					</Text>
				</View>
			</ImageBackground>
			<View className='bg-white flex items-center pt-8 -top-6 rounded-t-3xl'>
				<Text className='font-bold text-violeta text-[20px]'>
					Describe tu producto
				</Text>
			</View>
			<View className='mr-auto ml-auto flex'>
				<View className='bg-white bg-opacity-100 w-16 z-50 left-4 -bottom-2'>
					<Text className=''>Descripcion</Text>
				</View>
				<TextInput
					className=' w-[230] h-10 rounded-md border-[1px] border-gris_medio mb-2 py-2 px-4 text-gris_texto'
					onChangeText={onChangeText}
					value={text}
					placeholder='Describa su producto'
				/>
				<Text className='text-center mb-6'>
					Se vera cundo envies el link 0/35
				</Text>
				<View className='mx-auto mb-5 border border-dotted border-gris_medio rounded-3xl'>
					<Image
					resizeMode='cover'
					source={require('../../../assets/DefaultProfucto.png')}
					/>
				</View>
				<Text className='text-center mb-5 text-violeta'> Agrega una foto (es opcional)</Text>
				<TouchableOpacity
					onPress={goShare}
					className='w-[240px] px-[22px] pt-1 pb-1 text-white rounded-2xl bg-naranja '
				>
					<Text className='text-white font-bold text-center text-xl'>
						Continuar
					</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	)
}
// const styles = StyleSheet.create({
// 	input: {
// 		height: 40,
// 		margin: 12,
// 		borderWidth: 1,
// 		padding: 10,
// 	},
// })

export default CobroDescripcion
