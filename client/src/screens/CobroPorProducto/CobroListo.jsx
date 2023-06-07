import React from 'react'
import {
	View,
	Image,
	Text,
	ScrollView,
	ImageBackground,
	TouchableOpacity,
	Share,
} from 'react-native'
import Constants from 'expo-constants'
import Button from '../../components/Button/Button'
const CobroListo = () => {
	const handleShare = async () => {
		try {
			const result = await Share.share({
				message: 'www.pyfriend.com/link-pyment?id=1215456131',
			})
			if (result.action === Share.sharedAction) {
				if (result.activityType) {
					// shared with activity type of result.activityType
				} else {
					// shared
				}
			} else if (result.action === Share.dismissedAction) {
				// dismissed
			}
		} catch (error) {
			Alert.alert(error.message)
		}
	}

	return (
		<ScrollView className='bg-gris_background'>
			<ImageBackground
				source={require('../../../assets/fondoHistorial.webp')}
				className='h-[200] '
				style={{
					paddingTop: Constants.statusBarHeight + 27,
					paddingHorizontal: 20,
				}}
			>
				<View className='flex flex-row justify-between items-center mb-4'>
					<TouchableOpacity>
						<View className='h-8 w-8 rounded-full border-[1px] border-white flex justify-center items-center'>
							<Image
								className='h-4 w-4 rounded-full'
								source={require('../../../assets/back_arrow.png')}
							/>
						</View>
					</TouchableOpacity>
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
					<Text className=' text-[20px] text-white font-semibold'>¡Listo!</Text>
				</View>
			</ImageBackground>
			<View className='bg-white flex items-center pt-8 -top-6 rounded-t-3xl'>
				<Text className='font-bold text-violeta text-[20px]'>
					Compartir tu link de pago
				</Text>
			</View>
			<View className='flex flex-row justify-between w-10/12 mr-auto ml-auto p-2 rounded-lg bg-white mb-8'>
				<View>
					<View className='h-12 w-12 bg-slate-300 rounded-lg'></View>
				</View>
				<View>
					<Text className='font-bold text-lg'>Descripción</Text>
				</View>
				<View className='flex justify-end'>
					<Text className='font-bold text-xl text-violeta '>US$200</Text>
				</View>
			</View>
			<View className='flex justify-center px-2 py-8  w-10/12 mr-auto ml-auto p-2 rounded-md bg-white mb-12'>
				<TouchableOpacity className='bg-gris_background rounded-3xl py-2 mb-4 px-6'>
					<Text className='text-lg'>Link del producto o servicio</Text>
				</TouchableOpacity>
				<View className='flex flex-row w-full justify-between'>
					<TouchableOpacity
						className='w-full bg-violeta rounded-2xl py-2'
						onPress={handleShare}
					>
						<View>
							<Text className='text-white font-bold text-lg text-center'>
								Compartir link
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
			<TouchableOpacity className='bg-white rounded-3xl py-2 px-16 mb-2 mr-auto ml-auto '>
				<Text className='text-center font-bold text-xl text-violeta'>
					Crear link de pgo
				</Text>
			</TouchableOpacity>
			<View className='w-10/12 mr-auto ml-auto flex'>
				<View className='w-[240px] mb-4 mr-auto ml-auto flex '>
					<Button text={'Continuar'} onPress={() => console.log('press')} />
				</View>
			</View>
		</ScrollView>
	)
}

export default CobroListo
