import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import Nav from './src/components/Nav';
import { Historial } from './src/screens';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';

// SplashScreen.preventAutoHideAsync();

function App() {

  // const [fontsLoaded] = useFonts({
  //   'poppins-medium': require('./assets/poppinsFonts/Poppins-SemiBold.ttf'),
  //   'poppins-semiBold': require('./assets/poppinsFonts/Poppins-SemiBold.ttf'),
  //   'poppins-bold': require('./assets/poppinsFonts/Poppins-Bold.ttf'),
  //   'roboto-regular': require('./assets/robotoFonts/Roboto-Regular.ttf'),
  //   'roboto-medium': require('./assets/robotoFonts/Roboto-Medium.ttf'),
  //   'roboto-bold': require('./assets/robotoFonts/Roboto-Bold.ttf'),
  //   'roboto-black': require('./assets/robotoFonts/Roboto-Black.ttf'),
  // });

  // const onLayoutRootApp = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return <Text>Cargando...</Text>;
  // }

  // onLayout={onLayoutRootApp}
  return (

    <NavigationContainer>
      <Historial />
    </NavigationContainer>

  );
}

export default App;