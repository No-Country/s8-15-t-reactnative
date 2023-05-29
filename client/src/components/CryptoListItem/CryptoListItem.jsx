import { Image, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from '../../utils/colors';

const CryptoListItem = ({ icon, coin, coinSymbol, profit, amountOwned, inUsd }) => {

	const profitColor = profit > 0 ? colors.verde_claro : colors.rojo
	const iconTrending = profit > 0 ? "trending-up" : "trending-down"

	return <View className='flex items-stretch border-gray-300 border-b border-solid py-3 px-4' >
		<View className='mb-4 flex flex-row justify-between items-center'>
			<View className='flex flex-row items-center justify-center'>
				<Image source={{ uri: icon }} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
				<Text className='text-xl text-gris_oscuro ml-3'>{coin}</Text>
			</View>
			<View className='flex flex-row items-center'>
				<Feather name={iconTrending} size={24} color={profitColor} />
				<Text className='text-xl ml-4 font-semibold' style={{ color: profitColor }}>{profit}%</Text>
			</View>
		</View>
		<View className='flex flex-row justify-between relative'>
			<Text className='text-azul_oscuro text-2xl font-semibold '>
				{amountOwned} {coinSymbol}
			</Text>
			<Text className='text-azul_oscuro text-2xl absolute w-full text-center'>|</Text>
			<Text className='text-azul_oscuro text-2xl font-semibold '>
				US${inUsd}
			</Text>
		</View>
	</View>;
};

export default CryptoListItem;
