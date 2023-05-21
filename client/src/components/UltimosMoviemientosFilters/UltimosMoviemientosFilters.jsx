import { Text, TouchableOpacity, View } from 'react-native';
import { Book, House, Utensils } from '../../../assets/svgMaterialIcons/icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../utils/colors';

const UltimosMoviemientosFilters = () => {
	return <View className='flex flex-row justify-evenly'>
		<TouchableOpacity className='flex items-center'>
			<Utensils size={23} color={colors.lila} />
			<Text className='font-medium text-base mt-2' style={{ color: colors.lila }}>
				Comida
			</Text>
		</TouchableOpacity>

		<TouchableOpacity className='flex items-center'>
			<House size={23} color={colors.verde_claro} />
			<Text className='font-medium text-base mt-2' style={{ color: colors.verde_claro }}>
				Hogar
			</Text>
		</TouchableOpacity>

		<TouchableOpacity className='flex items-center'>
			<Book size={23} color={colors.celeste} />
			<Text className='font-medium text-base mt-2' style={{ color: colors.celeste }}>
				Estudio
			</Text>
		</TouchableOpacity>

		<TouchableOpacity className='flex items-center'>
			<MaterialCommunityIcons name="piggy-bank-outline" size={23} color={colors.naranja_claro} />
			<Text className='font-medium text-base mt-2' style={{ color: colors.naranja_claro }}>
				Ahorros
			</Text>
		</TouchableOpacity>
	</View>;
};

export default UltimosMoviemientosFilters;
