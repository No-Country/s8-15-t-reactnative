import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { useState } from "react";
import { ButtonsCryptoScreen } from "../ButtonsCryptoScreen";


const HeaderCryptoList = () => {
	const [ocultarNumero, setOcultarNumero] = useState(false)

	const dineroDisponible = 3215

	const numeroNormalizado = dineroDisponible.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
	const numeroOculto = numeroNormalizado.replace(/[0-9]/g, '·');

	return(
	<View>
		<ImageBackground
			source={require('../../../assets/fondoHistorial.webp')}
			className="h-[280] rounded-b-[45px] overflow-hidden"
		>
			<View style={{
				paddingTop: Constants.statusBarHeight + 27,
				paddingHorizontal: 20
			}} className='rouded-bl-3xl'>
				<View className='flex flex-row justify-between items-center mb-4'>
					<TouchableOpacity>
						<MaterialIcons name="notifications-none" size={27} color="white" />
					</TouchableOpacity>
					<Text className='text-3xl text-white' style={{ fontFamily: 'poppins-semiBold' }}>Cryptomonedas</Text>
					<View className='flex flex-row justify-center items-center 
				gap-x-7'>
						<View className='border-solid border-2 border-white rounded-full'>
							<Image
								className='h-[40px] w-[40px] rounded-full'
								source={{ uri: 'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg' }} />
						</View>
					</View>
				</View>
				<View className="flex items-center">
					<View className='flex flex-row justify-center items-center gap-x-3'>
						<Text className='font-medium text-[20px] text-white'
							style={{ fontFamily: 'poppins-semiBold' }}>Portfolio total
						</Text>
						<TouchableOpacity onPress={() => setOcultarNumero(!ocultarNumero)}>
							<Ionicons name="ios-eye-outline" size={24} color="#fff" />
						</TouchableOpacity>
					</View>
					<Text className='text-[60px] text-white' style={{ fontFamily: 'poppins-bold' }}>US ${ocultarNumero ? numeroOculto : numeroNormalizado}</Text>
				</View>
			</View>
		</ImageBackground>
		<View className='flex flex-row justify-evenly w-[90%] mx-auto top-[-40px]' >
			<ButtonsCryptoScreen texto='Transferir'/>
			<ButtonsCryptoScreen texto='Cambiar' />
			<ButtonsCryptoScreen texto='Métrica' />
		</View>
	</View>)
};

export default HeaderCryptoList;
