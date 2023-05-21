// import { StatusBar } from 'expo-status-bar'
// import { StyleSheet, Text, View,Image } from 'react-native'
// import image from './assets/red-diamond.png'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Components/SplashScreen'
import HomeScreen from './Components/HomeScreen'

const Stack = createStackNavigator();
export default function App() {
	return (
		// <SafeAreaProvider>
		// 	<SplashScreen/>
		// </SafeAreaProvider>
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
			  <Stack.Screen name="Splash" component={SplashScreen} />
			  <Stack.Screen name="Home" component={HomeScreen} />
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
