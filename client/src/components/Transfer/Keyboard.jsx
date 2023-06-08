/* eslint-disable react/prop-types */
import { View, Text, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const Keyboard = ({ handleSubmit }) => {
	const numbers = Array.from({ length: 9 }, (_, index) => index + 1)
	numbers.push({ icon: 'closecircleo', size: 24, color: 'white' }, 0, {
		icon: 'arrowright',
		size: 24,
		color: 'white',
	})

	return (
		<View className='w-full flex-row flex-wrap'>
			{numbers.map((item, index) => (
				<View key={index} className='w-1/3 justify-center items-center p-2'>
					{typeof item === 'number' ? (
						<TouchableOpacity
							onPress={() => handleSubmit(item)}
							className='rounded-full w-[70px] h-[70px] bg-slate-50 p-5 justify-center items-center'
						>
							<Text className='text-[26px] font-semibold'>{item}</Text>
						</TouchableOpacity>
					) : (
						<TouchableOpacity
							onPress={() => handleSubmit(item.icon)}
							style={
								item.icon === 'closecircleo'
									? { backgroundColor: '#BABABA' }
									: { backgroundColor: '#6D39E5' }
							}
							className='rounded-full w-[70px] h-[70px] p-5 justify-center items-center'
						>
							<AntDesign name={item.icon} size={item.size} color={item.color} />
						</TouchableOpacity>
					)}
				</View>
			))}
		</View>
	)
}

export default Keyboard
