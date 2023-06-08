import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import Nav from './src/components/Nav'
import { store } from './src/reduxApp/store'
import { StatusBar } from 'react-native'

function App() {
	return (
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
	)
}

export default App
