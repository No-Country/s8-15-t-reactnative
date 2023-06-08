import { useEffect, useState } from 'react';
import { Text, View,StyleSheet, TextInput, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

export const VerifyEmail = ({ setActiveStep,form1Data }) => {
  const [pin, setPin] = useState('');

  const handlePinChange = (value) => {
    setPin(value);
  };

  const handleSubmit = () => {
    console.log('Código PIN:', pin);
    setActiveStep(2);
  };

  const enviarCorreo = async()=>{
    try {
      const codigoAleatorio = Math.floor(Math.random() * 9000) + 1000; // Genera un número aleatorio de 4 dígitos

      const response = await axios.post('http://localhost:3001/enviar-correo', {
        destinatario: 'ccapo4matemacc@gmail.com',
        remitente: 'payfrend24@gmail.com',
        asunto: 'Asunto del correo',
        contenido: 'Contenido del correo',
        nombre: 'juan',
        codigo: codigoAleatorio.toString() // Convierte el código a una cadena de texto
      });

      console.log('Respuesta del servidor:', response.data);
      // Realiza cualquier acción adicional necesaria con la respuesta del servidor
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      // Maneja el error de alguna manera adecuada
    }
  }

  useEffect(() => {
    enviarCorreo();
  }, []);
  
  return (
    <View style={styles.container}>
        <Text style={styles.labelTitle}>Verifica tu correo</Text>
        <Text style={styles.labelInfo}>Escribe el código de verificación que</Text>
        <Text style={styles.labelInfo}>enviamos al:</Text>
        <Text style={styles.labelInfo}>{form1Data.email}</Text>
        <View style={styles.pinContainer}>
          <View style={styles.pinDigitContainer}>
            <TextInput
              style={styles.pinDigit}
              value={pin[0] || ''}
              onChangeText={(value) => handlePinChange(value + pin.substring(1))}
              maxLength={1}
              keyboardType="numeric"
              secureTextEntry
            />
          </View>
          <View style={styles.pinDigitContainer}>
            <TextInput
              style={styles.pinDigit}
              value={pin[1] || ''}
              onChangeText={(value) => handlePinChange(pin.substring(0, 1) + value + pin.substring(2))}
              maxLength={1}
              keyboardType="numeric"
              secureTextEntry
            />
          </View>
          <View style={styles.pinDigitContainer}>
            <TextInput
              style={styles.pinDigit}
              value={pin[2] || ''}
              onChangeText={(value) => handlePinChange(pin.substring(0, 2) + value + pin.substring(3))}
              maxLength={1}
              keyboardType="numeric"
              secureTextEntry
            />
          </View>
          <View style={styles.pinDigitContainer}>
            <TextInput
              style={styles.pinDigit}
              value={pin[3] || ''}
              onChangeText={(value) => handlePinChange(pin.substring(0, 3) + value)}
              maxLength={1}
              keyboardType="numeric"
              secureTextEntry
            />
          </View>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal:15,
    alignItems: 'center',
  },
  labelTitle: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 23,
    lineHeight: 33,
    marginBottom:50,
    color:'white'
  },
  labelInfo:{
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24,
    color:'white',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 65,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: '#6D39E5',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pinContainer: {
    flexDirection: 'row',
    marginTop:30,
    marginBottom:50
  },
  pinDigitContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginHorizontal: 5,
  },
  pinDigit: {
    width: 50,
    height: 60,
    color:'white',
    fontSize:20,
    textAlign: 'center',
  },
});