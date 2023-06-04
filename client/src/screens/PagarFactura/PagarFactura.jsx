import React from 'react'
import { ScrollView, StatusBar, View, TouchableOpacity, Text } from 'react-native'
import { Input, SmallProfilePicture } from '../../components'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import Constants from 'expo-constants'

const PagarFactura = () => {
	const navigation = useNavigation()

	return (
		<ScrollView>
			<LinearGradient
				colors={['#7029E2', '#55B7FF']}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				style={{ height: '100%', width: '100%' }}
			>
				<StatusBar
					translucent
					backgroundColor='transparent'
					barStyle='light-content'
				/>
				<View
					style={{ paddingTop: Constants.statusBarHeight + 27 }}
					className='flex flex-row justify-between items-center px-4'
				>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Ionicons
							name='chevron-back-circle-outline'
							size={44}
							color='#fff'
						/>
					</TouchableOpacity>
					<View className='flex flex-row justify-between items-center gap-x-2 '>
						<Text
							className='text-3xl text-white'
							style={{ fontFamily: 'poppins-semiBold' }}
						>
							Pagar Factura
						</Text>
					</View>
					<SmallProfilePicture />
				</View>
			</LinearGradient>
			<Input />
		</ScrollView>
	)
}

export default PagarFactura
