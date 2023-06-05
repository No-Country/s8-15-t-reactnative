import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Nav from './src/components/Nav';
import { store } from './src/reduxApp/store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Nav />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
