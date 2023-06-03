// import { StatusBar } from 'expo-status-bar'
// import { StyleSheet, Text, View,Image } from 'react-native'
// import image from './assets/red-diamond.png'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Components/SplashScreen'
// import PinCodeUser from './src/screens/PinCodeUser/PinCodeUser';
// import ProgressBar from './Components/ProgressBar';
// import Form from './Components/Form';
// import Progress from './Components/Progress';
// import ProgressStepUser from './src/screens/ProgressStepUser/ProgressStepUser';
import PinCodeUser from './src/screens/PinCodeUser/PinCodeUser';
import ProgressStepUser from './src/screens/ProgressStepUser/ProgressStepUser';
// import HomeScreen from './Components/HomeScreen'
// import PinCode from './Components/PinCode';
// import { StepProgresUser } from './Components/StepProgresUser';

// import { StepUser } from './Components/StepUser';

const Stack = createStackNavigator();
export default function App() {
	return (
		// <SafeAreaProvider>
		// 	<SplashScreen/>
		// </SafeAreaProvider>
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
			  <Stack.Screen name="Splash" component={SplashScreen} />
			  <Stack.Screen name="Home" component={ProgressStepUser} />
			</Stack.Navigator>
		</NavigationContainer>
		// <View style={styles.container}>
		// 	<Text style={styles.title}>Holesd</Text>
		// 	<Image
		// 		source={image}
		// 		style={styles.image}
		// 	/>
		// 	<StatusBar style='auto' />
		// </View>
	)
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#292929',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// 	title:{
// 		fontSize:30,
// 		color:'#fff'
// 	},
// 	image:{height:200,width:200,borderRadius:100}
// })
