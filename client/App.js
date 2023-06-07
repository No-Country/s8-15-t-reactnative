import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProgressStepUser from './src/screens/ProgressStepUser/ProgressStepUser';
// import PinCodeUser from './src/screens/PinCodeUser/PinCodeUser';

const Stack = createStackNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
			  <Stack.Screen name="Home" component={ProgressStepUser} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

