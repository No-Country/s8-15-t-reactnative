import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Nav from './src/components/Nav';

function App() {
  return (
   
      <NavigationContainer>
         <Nav />
      </NavigationContainer>
    
  );
}

export default App;