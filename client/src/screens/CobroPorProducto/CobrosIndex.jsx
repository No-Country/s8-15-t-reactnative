import { first } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CobroPorProducto from './CobroPorProducto'
import CobroPersonalizaLink from './CobroPersonalizaLink'
import CobroListo from './CobroListo'
import CobroDescripcion from './CobroDescripcion'
import CobroLinksCreados from './CobroLinksCreados'

const CobrosIndex = () => {
	const Stack = createNativeStackNavigator()

	return (
		<NavigationContainer independent={true}>
			<Stack.Navigator
				screenOptions={({ route }) => ({
					headerShown: false,
				})}
			>
				<Stack.Screen name='cobros' component={CobroPorProducto} />
				<Stack.Screen
					name='cobros-custom-link'
					component={CobroPersonalizaLink}
				/>
				{/* <Stack.Screen name='cobros-listo' component={CobroListo} />
				<Stack.Screen name='cobros-link-list' component={CobroLinksCreados} />
				<Stack.Screen name='cobros-descripcion' component={CobroDescripcion} /> */}
			</Stack.Navigator>
		</NavigationContainer>
	)
}
export default CobrosIndex
