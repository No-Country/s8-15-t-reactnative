import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import ScannQr from '../screens/ScannQr'
import TabBar from './TabBar'
import Onboarding from '../screens/Onboarding/Onboarding'


const Stack = createStackNavigator()

const Nav = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>

			<Stack.Screen name='Onboarding' component={Onboarding} />
			<Stack.Screen name='Bar' component={TabBar} />
			<Stack.Screen name='Profile' component={Profile} />
			
		</Stack.Navigator>
	)
}

export default Nav
