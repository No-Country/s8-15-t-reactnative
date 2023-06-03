import { ScrollView, StyleSheet, Text, View, Switch } from 'react-native'
import colors from '../../utils/colors'
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'
const Notificaciones = () => {
	const [isEnabled, setIsEnabled] = useState(false)
	const toggleSwitch = () => setIsEnabled(previousState => !previousState)
	return (
		<ScrollView className='flex bg-red-200 pt-10'>
			<View className='flex flex-row justify-around  bg-blue-200 mr-auto ml-auto w-10/12'>
				<MaterialIcons
					name='notifications-none'
					size={27}
					color={colors.violeta}
				/>
				<Text className='text-center text-violeta text-2xl text-bold'>
					Notificaciones
				</Text>
				<View style={styles.container}>
					<Switch
						trackColor={{ false: '#767577', true: '#81b0ff' }}
						thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
						ios_backgroundColor='#3e3e3e'
						onValueChange={toggleSwitch}
						value={isEnabled}
					/>
				</View>
			</View>
		</ScrollView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
})

export default Notificaciones
