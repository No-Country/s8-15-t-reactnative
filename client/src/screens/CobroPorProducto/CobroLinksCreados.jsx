/* eslint-disable react/prop-types */
import React from 'react'
import {
	View,
	Image,
	Text,
	ScrollView,
	ImageBackground,
	TouchableOpacity,
} from 'react-native'
import Constants from 'expo-constants'
import { GoBackButton } from '../../components'

const CobroLinksCreados = ({ navigation }) => {
	const goBack = () => {
		navigation.goBack()
	}
	return (
		<ScrollView className='bg-white'>
			<ImageBackground
				source={require('../../../assets/fondoHistorial.webp')}
				className='h-[170] '
				style={{
					paddingTop: Constants.statusBarHeight + 27,
					paddingHorizontal: 20,
				}}
			>
				<View className='flex flex-row justify-between items-center mb-4'>
					<GoBackButton/>
					<Text
						className='text-3xl text-white'
						style={{ fontFamily: 'poppins-semiBold' }}
					>
						Links creados
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
			</ImageBackground>
			<View className='bg-white flex items-center pt-8 -top-6 rounded-t-3xl'>
				<Text className='font-bold text-violeta text-[20px]'>
					Compartir tu link de pago
				</Text>
			</View>
			<View className='flex flex-row justify-between w-10/12 mr-auto ml-auto items-center p-2 rounded-lg bg-white mb-4'>
				<View>
					<View className='h-12 w-12 bg-slate-300 rounded-lg'></View>
				</View>
				<View>
					<Text className='font-bold text-lg mb-2'>Descripción</Text>
					<Text className='font-bold text-naranja text-lg'>Compartir</Text>
				</View>

				<View className='flex mt-auto'>
					<TouchableOpacity className='ml-auto'>
						<View className='w-2 h-2 bg-gray-200 rounded-full '></View>
						<View className='w-2 h-2 bg-gray-200 rounded-full mt-[2px] mb-[2px] '></View>
						<View className='w-2 h-2 bg-gray-200 rounded-full '></View>
					</TouchableOpacity>
					<Text className='font-bold text-xl text-violeta '>US$200</Text>
				</View>
			</View>
			<View className='flex flex-row justify-between w-10/12 mr-auto ml-auto items-center p-2 rounded-lg bg-white mb-4'>
				<View>
					<View className='h-12 w-12 bg-slate-300 rounded-lg'></View>
				</View>
				<View>
					<Text className='font-bold text-lg mb-2'>Descripción</Text>
					<Text className='font-bold text-naranja text-lg'>Compartir</Text>
				</View>

				<View className='flex mt-auto'>
					<TouchableOpacity className='ml-auto'>
						<View className='w-2 h-2 bg-gray-200 rounded-full '></View>
						<View className='w-2 h-2 bg-gray-200 rounded-full mt-[2px] mb-[2px] '></View>
						<View className='w-2 h-2 bg-gray-200 rounded-full '></View>
					</TouchableOpacity>
					<Text className='font-bold text-xl text-violeta '>US$200</Text>
				</View>
			</View>
			<View className='flex flex-row justify-between w-10/12 mr-auto ml-auto items-center p-2 rounded-lg bg-white mb-4'>
				<View>
					<View className='h-12 w-12 bg-slate-300 rounded-lg'></View>
				</View>
				<View>
					<Text className='font-bold text-lg mb-2'>Descripción</Text>
					<Text className='font-bold text-naranja text-lg'>Compartir</Text>
				</View>

				<View className='flex mt-auto'>
					<TouchableOpacity className='ml-auto'>
						<View className='w-2 h-2 bg-gray-200 rounded-full '></View>
						<View className='w-2 h-2 bg-gray-200 rounded-full mt-[2px] mb-[2px] '></View>
						<View className='w-2 h-2 bg-gray-200 rounded-full '></View>
					</TouchableOpacity>
					<Text className='font-bold text-xl text-violeta '>US$200</Text>
				</View>
			</View>
			<View className='flex flex-row justify-between w-10/12 mr-auto ml-auto items-center p-2 rounded-lg bg-white mb-4'>
				<View>
					<View className='h-12 w-12 bg-slate-300 rounded-lg'></View>
				</View>
				<View>
					<Text className='font-bold text-lg mb-2'>Descripción</Text>
					<Text className='font-bold text-naranja text-lg'>Compartir</Text>
				</View>

				<View className='flex mt-auto'>
					<TouchableOpacity className='ml-auto'>
						<View className='w-2 h-2 bg-gray-200 rounded-full '></View>
						<View className='w-2 h-2 bg-gray-200 rounded-full mt-[2px] mb-[2px] '></View>
						<View className='w-2 h-2 bg-gray-200 rounded-full '></View>
					</TouchableOpacity>
					<Text className='font-bold text-xl text-violeta '>US$200</Text>
				</View>
			</View>
			<View className='flex flex-row justify-between w-10/12 mr-auto ml-auto items-center p-2 rounded-lg bg-white mb-4'>
				<View>
					<View className='h-12 w-12 bg-slate-300 rounded-lg'></View>
				</View>
				<View>
					<Text className='font-bold text-lg mb-2'>Descripción</Text>
					<Text className='font-bold text-naranja text-lg'>Compartir</Text>
				</View>

				<View className='flex mt-auto'>
					<TouchableOpacity className='ml-auto'>
						<View className='w-2 h-2 bg-gray-200 rounded-full '></View>
						<View className='w-2 h-2 bg-gray-200 rounded-full mt-[2px] mb-[2px] '></View>
						<View className='w-2 h-2 bg-gray-200 rounded-full '></View>
					</TouchableOpacity>
					<Text className='font-bold text-xl text-violeta '>US$200</Text>
				</View>
			</View>
			<View className='flex flex-row justify-between w-10/12 mr-auto ml-auto items-center p-2 rounded-lg bg-white mb-4'>
				<View>
					<View className='h-12 w-12 bg-slate-300 rounded-lg'></View>
				</View>
				<View>
					<Text className='font-bold text-lg mb-2'>Descripción</Text>
					<Text className='font-bold text-naranja text-lg'>Compartir</Text>
				</View>

				<View className='flex mt-auto'>
					<TouchableOpacity className='ml-auto'>
						<View className='w-2 h-2 bg-gray-200 rounded-full '></View>
						<View className='w-2 h-2 bg-gray-200 rounded-full mt-[2px] mb-[2px] '></View>
						<View className='w-2 h-2 bg-gray-200 rounded-full '></View>
					</TouchableOpacity>
					<Text className='font-bold text-xl text-violeta '>US$200</Text>
				</View>
			</View>
			<View className='flex flex-row justify-between w-10/12 mr-auto ml-auto items-center p-2 rounded-lg bg-white mb-4'>
				<View>
					<View className='h-12 w-12 bg-slate-300 rounded-lg'></View>
				</View>
				<View>
					<Text className='font-bold text-lg mb-2'>Descripción</Text>
					<Text className='font-bold text-naranja text-lg'>Compartir</Text>
				</View>
				<View className='flex mt-auto'>
					<TouchableOpacity className='ml-auto'>
						<View className='w-2 h-2 bg-gray-200 rounded-full '></View>
						<View className='w-2 h-2 bg-gray-200 rounded-full mt-[2px] mb-[2px] '></View>
						<View className='w-2 h-2 bg-gray-200 rounded-full '></View>
					</TouchableOpacity>
					<Text className='font-bold text-xl text-violeta '>US$200</Text>
				</View>
			</View>
			<View className='flex flex-row justify-between w-10/12 mr-auto ml-auto items-center p-2 rounded-lg bg-white mb-4'>
				<View>
					<View className='h-12 w-12 bg-slate-300 rounded-lg'></View>
				</View>
				<View>
					<Text className='font-bold text-lg mb-2'>Descripción</Text>
					<Text className='font-bold text-naranja text-lg'>Compartir</Text>
				</View>

				<View className='flex mt-auto'>
					<TouchableOpacity className='ml-auto'>
						<View className='w-2 h-2 bg-gray-200 rounded-full '></View>
						<View className='w-2 h-2 bg-gray-200 rounded-full mt-[2px] mb-[2px] '></View>
						<View className='w-2 h-2 bg-gray-200 rounded-full '></View>
					</TouchableOpacity>
					<Text className='font-bold text-xl text-violeta '>US$200</Text>
				</View>
			</View>
		</ScrollView>
	)
}

export default CobroLinksCreados
