import { Text, View } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const CryptoListItem = ({icon, coin, profit, amountOwned, inUsd}) => {


	return <View className='flex items-stretch border-gray-300 border-b border-solid py-3 px-4' >
		<View className='mb-4 flex flex-row justify-between items-center'>
			<View className='flex flex-row items-center justify-center'>
				{icon}
				<Text className='text-xl text-gris_oscuro ml-3'>{coin}</Text>
			</View>
			<View className='flex flex-row items-center'>
				<Feather name="trending-down" size={24} color="black" />
				<Text className='text-xl ml-4 font-semibold'>-{profit}%</Text>
			</View>
		</View>
		<View className='flex flex-row justify-between relative'>
			<Text className='text-azul_oscuro text-2xl font-semibold '>
				{amountOwned} BTC
			</Text>
				<Text className='text-azul_oscuro text-2xl absolute w-full text-center'>|</Text>
			<Text className='text-azul_oscuro text-2xl font-semibold '>
				US${inUsd}
			</Text>
		</View>
	</View>;
};

export default CryptoListItem;
