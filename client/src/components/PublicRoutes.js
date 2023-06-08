import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding, Login, ProgressStepUser } from '../screens';
import Registro from '../screens/Registro/Registro';

const Stack = createStackNavigator();

const PublicRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Registro} />
      <Stack.Screen
        name="VerificationUser"
        component={ProgressStepUser}
      />
    </Stack.Navigator>
  );
};

export default PublicRoutes;
