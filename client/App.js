import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import Nav from './src/components/Nav';
import { Historial } from './src/screens';

function App() {
  return (
   
      <NavigationContainer>
        <Historial/>
      </NavigationContainer>
    
  );
}

export default App;