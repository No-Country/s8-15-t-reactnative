import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Nav from './src/components/Nav';


const Stack = createStackNavigator();
export default function App() {
	return (
		<NavigationContainer>
		<Nav />
		</NavigationContainer>
	)
}
