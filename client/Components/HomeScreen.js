import { View,Text,StyleSheet } from "react-native"
import { PinCodeInput } from "./PinCodeInput";
// import * as LocalAuthentication from 'expo-local-authentication'

export default function HomeScreen(){

    const handlePinComplete = (pin) => {
        if(pin==="12345"){
            console.log('PIN correcto:', pin);
        }
        else{
            console.log('PIN incorrecto');
        }
        // Aquí puedes realizar la validación del PIN o realizar cualquier acción necesaria
        // console.log('PIN completado:', pin);
    };
    

    return (
      <View style={styles.container}>
        <PinCodeInput onComplete={handlePinComplete} />
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
	    flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})