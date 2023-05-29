import { Text, View, ImageBackground } from 'react-native'
import colors from '../../utils/colors'
import fondo from '../../Images/fondo.webp'
import { MaterialIcons } from '@expo/vector-icons'
const CambiarDinero = () => {
	return (
		<View className='flex items-center '>
			<ImageBackground
				source={require('../../../assets/fondoHistorial.webp')}
				resizeMode='cover'
			>
				<View className='flex rounded-b-[40px] pt-6 h-56 w-full items-center'>
					<View className='flex flex-row w-full justify-around items-center mb-3 px-4'>
						<MaterialIcons name='notifications-none' size={27} color='white' />
						<Text className='text-slate-50 font-black text-lg'>
							Cryptomonedas
						</Text>
						<View className='w-10 h-10 bg-slate-100 rounded-full'></View>
					</View>
					<Text className='text-slate-50 mb-3 '>Portfolio Total</Text>
					<Text className='text-slate-50 font-black text-3xl'>US $3.214</Text>
					<View className='flex flex-row justify-around items-center mt-7 w-11/12  '>
						<View className='bg-slate-50 p-2 rounded-t-2xl w-10/12 px-4'>
							<Text>Cambiar</Text>
							<View className='flex flex-row justify-between items-center'>
								<View className='flex flex-row items-center'>
									<MaterialIcons name='money-off' size={30} color='#6bbafb' />
									<Text>Bitcoin</Text>
								</View>
								<View>
									<Text className='font-black text-blue-600 text-lg'>4000</Text>
								</View>
							</View>
							<View className='flex flex-row justify-between '>
								<Text className='text-slate-400 text-[12px]'>000425 BTC</Text>
								<View>
									<Text className=' text-blue-600 text-[12px]'>BTC</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
			</ImageBackground>

			<Text className='font-black mt-20 text-violet-600 text-3xl'>0,40000</Text>
			<View className='flex flex-row justify-between w-10/12  gap-2'>
				<View className='flex w-14'>
					<View className='flex justify-center items-center bg-slate-100 w-14 h-14 rounded-full mb-2'>
						<Text className='font-black text-xl'>1</Text>
					</View>
					<View className='flex justify-center items-center bg-slate-100 w-14 h-14 rounded-full mb-2'>
						<Text className='font-black text-xl'>4</Text>
					</View>
					<View className='flex justify-center items-center bg-slate-100 w-14 h-14 rounded-full mb-2'>
						<Text className='font-black text-xl'>7</Text>
					</View>
					<View className='flex justify-center items-center bg-slate-100 w-14 h-14 rounded-full mb-2'>
						<Text className='font-black text-xl'>*</Text>
					</View>
				</View>
				<View className='flex w-14'>
					<View className='flex justify-center items-center bg-slate-100 w-14 h-14 rounded-full mb-2'>
						<Text className='font-black text-xl'>2</Text>
					</View>
					<View className='flex justify-center items-center bg-slate-100 w-14 h-14 rounded-full mb-2'>
						<Text className='font-black text-xl'>5</Text>
					</View>
					<View className='flex justify-center items-center bg-slate-100 w-14 h-14 rounded-full mb-2'>
						<Text className='font-black text-xl'>8</Text>
					</View>
					<View className='flex justify-center items-center bg-slate-100 w-14 h-14 rounded-full mb-2'>
						<Text className='font-black text-xl'>0</Text>
					</View>
				</View>
				<View className='flex w-14'>
					<View className='flex justify-center items-center bg-slate-100 w-14 h-14 rounded-full mb-2'>
						<Text className='font-black text-xl'>3</Text>
					</View>
					<View className='flex justify-center items-center bg-slate-100 w-14 h-14 rounded-full mb-2'>
						<Text className='font-black text-xl'>6</Text>
					</View>
					<View className='flex justify-center items-center bg-slate-100 w-14 h-14 rounded-full mb-2'>
						<Text className='font-black text-xl'>9</Text>
					</View>
					<View className='flex justify-center items-center bg-slate-100 w-14 h-14 rounded-full mb-2'>
						<Text className='font-black text-xl'>0</Text>
					</View>
				</View>
			</View>
		</View>
	)
}
export default CambiarDinero
