import { View,Text,TouchableOpacity,StyleSheet,TextInput } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { CustomDialogPassword } from './CustomDialogPassword';

export const CustomDialog = ({onClose}) => {
  const [showAlertTwo, setShowAlertTwo] = useState(false);

  const submitEmail = () =>{
    console.log("activee")
    setShowAlertTwo(true);
  }

  const handleClosePassword = () => {
    setShowAlertTwo(false);
  };

  return (
    <View style={styles.container}>
        <View style={styles.alert}>
        <Text style={styles.title}>¿Olvidaste la contraseña?</Text>
        <Text style={styles.message}>Recuperá tu clave en simples pasos</Text>
        <Text style={styles.titleDescription}>Ingresa a tu correo electrónico para recuperarla.</Text>

        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="correo@gmail.com"
            />
        </View>

        <TouchableOpacity style={styles.buttonEmail} onPress={submitEmail} >
            <Text style={styles.buttonText}>Envíar email</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.button} onPress={onClose}>
            <Ionicons name="close" size={24} color="white" style={styles.closeIcon} />
        </TouchableOpacity>
        </View>
        {showAlertTwo && (
          <CustomDialogPassword onClose={handleClosePassword}/>
        )}

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    alert: {
      backgroundColor: '#fff',
      width: '85%',
      padding: 30,
      borderRadius: 10,
      position: 'relative',
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 15,
      textAlign:'left'
    },
    titleDescription:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign:'left',
        lineHeight:35
    },
    message: {
      fontSize: 18,
      marginBottom: 20,
      lineHeight:30,
      textAlign: 'left',
    },
    button: {
      position: 'absolute',
      top: -10,
      right: -10,
      padding: 10,
      backgroundColor: 'red',
      borderRadius: 15,
    },
    closeIcon: {
      marginLeft: 2,
    },
    buttonEmail: {
        backgroundColor: '#6D39E5',
        paddingVertical: 10,
        borderRadius: 30,
        marginTop: 30,
        width:290
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 19,
        fontWeight: 500,
        textAlign: 'center',
        paddingVertical:5
    },
    inputContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        paddingHorizontal: 16,
        borderWidth: 2,
        borderColor: '#6D39E5',
    },
    input: {
        height: 54,
        fontSize: 17,
        textAlign:'center'
    },
  });