import { Text, View,StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const VerifyEmail = ({ onSubmit }) => {
  
  const handleSubmit = () => {
    onSubmit('hola');
  };
  return (
    <View style={styles.container}>
        <Text style={styles.labelTitle}>Verifica tu correo</Text>
        <Text style={styles.labelInfo}>Escribe el código de verificación que</Text>
        <Text style={styles.labelInfo}>enviamos al:</Text>
        <Text style={styles.labelInfo}>ejemplo@correo.com</Text>
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
    fontSize: 22,
    lineHeight: 33,
    marginBottom:30,
    color:'white'
  },
  labelInfo:{
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
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
});