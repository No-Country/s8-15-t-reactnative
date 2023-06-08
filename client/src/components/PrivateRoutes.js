import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reduxApp/feature/authSlice';
import { setUserData } from '../reduxApp/feature/userSlice';
import {
  CambiarDinero,
  CryptoMetric,
  CryptoTransferencia,
  Home,
  Login,
  Onboarding,
  Profile,
  ProgressStepUser,
  
} from '../screens';
import FaceIdVerification from './FaceIdVerification/FaceIdVerification';
import FingerprintVerification from './FingerprintVerification/FingerprintVerification';
import TabBar from './TabBar';
import Registro from '../screens/Registro/Registro';
import {View} from 'react-native-animatable';
import {ActivityIndicator} from 'react-native';

const Stack = createStackNavigator();

const PrivateRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Bar" component={TabBar} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="CryptoMetric" component={CryptoMetric} />
      <Stack.Screen
        name="VerificationUser"
        component={ProgressStepUser}
      />
      <Stack.Screen
        name="FingerprintVerification"
        component={FingerprintVerification}
      />
      <Stack.Screen
        name="FaceIdVerification"
        component={FaceIdVerification}
      />
      <Stack.Screen
        name="CryptoTransferencia"
        component={CryptoTransferencia}
      />
      <Stack.Screen name="CryptoCambio" component={CambiarDinero} />
    </Stack.Navigator>
  );
};

export default PrivateRoutes;
