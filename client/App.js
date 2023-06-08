<<<<<<< HEAD
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import Nav from './src/components/Nav'
import { store } from './src/reduxApp/store'
import { StatusBar } from 'react-native'
=======
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProgressStepUser from './src/screens/ProgressStepUser/ProgressStepUser';
import { UserProfile } from './src/components/UserProfile/UserProfile';
// import PinCodeUser from './src/screens/PinCodeUser/PinCodeUser';
>>>>>>> jose-armando

function App() {
	return (
<<<<<<< HEAD
		<Provider store={store}>
			<StatusBar
				translucent
				backgroundColor='transparent'
				barStyle='light-content'
			/>

			<NavigationContainer>
				<Nav />
			</NavigationContainer>
		</Provider>
=======
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
			  <Stack.Screen name="Home" component={ProgressStepUser} />
			  <Stack.Screen name="UserProfile" component={UserProfile} />
			</Stack.Navigator>
		</NavigationContainer>
>>>>>>> jose-armando
	)
}

export default App
