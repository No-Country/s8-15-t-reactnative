import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
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