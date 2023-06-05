import React, { useEffect, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View,StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

export const CustomDialogPassword = ({onClose}) => {
  const [counter, setCounter] = useState(130); // Valor inicial en segundos: 2 minutos y 10 segundos
  const [inputValue, setInputValue] = useState('');
  const [activeButtonModify,setActiveButtonModify] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter === 0) {
          clearInterval(interval); // Detener el contador cuando llega a 00:00
          return prevCounter;
        } else {
          return prevCounter - 1;
        }
      });
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${padZero(minutes)}:${padZero(remainingSeconds)}`;
  };
  
  const padZero = (number) => {
    return number.toString().padStart(2, '0');
  };

  const formatInputValue = (text) => {
    let formattedText = text.replace(/[^0-9]/g, '');
    formattedText = formattedText.slice(0, 11); // Limitar la longitud máxima a 11 caracteres
  
    // Aplicar el formato específico "04-42395-208"
    if (formattedText.length >= 2) {
      formattedText = `${formattedText.slice(0, 2)}-${formattedText.slice(2)}`;
    }
    if (formattedText.length >= 7) {
      const lastDigits = formattedText.slice(7);
      formattedText = `${formattedText.slice(0, 7)}-${lastDigits.slice(0, 3)}`;
    }
  
    return formattedText;
  };

  const handleInputChange = (text) => {
    setInputValue(text);
    if (text === '12-2222-222') {
      setActiveButtonModify(true)
      console.log("igualdad")
    }
    else{
        setActiveButtonModify(false)
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.alert}>
        <Text style={styles.title}>Ya casi...¡Un último paso!</Text>
        <Text style={styles.message}>Se envió un correo electrónico para restablecer tu contraseña.</Text>
        {
            formatTime(counter)==="00:00" ? (
                <Text style={styles.titleDescription}>Podés volver a enviar el codigo numérico</Text>
            ):(
                <Text style={styles.titleDescription}>Podés volver a enviar el correo en {formatTime(counter)}</Text>
            )
        }
        {/* <Text style={styles.titleDescription}>Podés volver a enviar el correo en {formatTime(counter)}</Text> */}

        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Codigo numerico"
                value={formatInputValue(inputValue)}
                onChangeText={handleInputChange}
                keyboardType="numeric"
            />
        </View>

        {
            activeButtonModify ? (
                <TouchableOpacity style={styles.buttonModifyPassword}>
                    <Text style={styles.buttonText}>Modificar contraseña</Text>
                </TouchableOpacity>
            ):(
                <TouchableOpacity style={styles.buttonEmail}>
                    <Text style={styles.buttonText}>Recuperar clave</Text>
                </TouchableOpacity>
            )
        }

        <TouchableOpacity
        style={[
            styles.buttonEmailResend,
            counter === 0 && styles.buttonEmailResendActive,
        ]}
        >
        <Text
            style={[
            styles.buttonTextResend,
            counter === 0 && styles.buttonTextResendActive,
            ]}
        >
            Reenviar email
        </Text>
        </TouchableOpacity>
        
        <TouchableOpacity  style={styles.button} onPress={onClose}>
            <Ionicons name="close" size={24} color="white" style={styles.closeIcon} />
        </TouchableOpacity>
        </View>
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
        backgroundColor: '#A9A6AC',
        paddingVertical: 10,
        borderRadius: 30,
        marginTop: 30,
        width:290
    },
    buttonModifyPassword:{
        backgroundColor: '#F18805',
        paddingVertical: 10,
        borderRadius: 30,
        marginTop: 30,
        width:290
    },
    buttonEmailResend:{
        backgroundColor: '#FFFFFF',
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
    buttonTextResend: {
        color: '#A9A6AC',
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
        fontSize: 20,
        textAlign:'center'
    },
    buttonEmailResendActive: {
        backgroundColor: '#55B7FF',
    },
    buttonTextResendActive: {
        color: '#FFFFFF',
    },
    
});