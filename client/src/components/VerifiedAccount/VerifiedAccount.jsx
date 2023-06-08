import { Text, View,StyleSheet,Image,TouchableOpacity } from 'react-native'
import CircleWithCheck from '../../Images/CircleWithCheck.jsx';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import axios from 'axios';

export const VerifiedAccount = ({form2Data,setShowAlertPassword}) => {

  const navigation = useNavigation();
  const user = useSelector(state => state.user?.user);
  console.log("Data usuario",user)
  const handleSubmit = async() => {
    try {
        const { country, dni, ...formDataToSend } = form2Data;
        const response = await axios.put(
          `https://s8-15-t-reactnative-production.up.railway.app/user-edit/${user?.id}`,
          formDataToSend
        );
        // Realizar acciones adicionales después de la solicitud exitosa
        console.log(response.data); // Puedes mostrar la respuesta en la consola o realizar otras acciones
        navigation.navigate('UserProfile');
    } catch (error) {
        // Manejar errores de la solicitud
        console.error(error);
    }
    // setShowAlertPassword(true)
  };
  return (
    <View style={styles.container}>
        <Text style={styles.labelTitle}>Finalizar</Text>
        <View style={styles.viewData}>
            <Image
                source={{ uri: form2Data.avatar }}
                style={[styles.avatar, { position: 'absolute', top: 10, left: 10 }]}
            />
            <CircleWithCheck/>
        </View>
        <View style={{marginTop:28}}>
            <Text style={styles.labelTitleFinaly}>Cuenta Verificada</Text>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Ir a Payfriend</Text>
            </TouchableOpacity>
        </View>
    </View>

  )
}
export const styles = StyleSheet.create({
    container: {
      paddingHorizontal:15,
      alignItems: 'center',
      gap:25
    },
    viewData:{
        marginTop:30,
        gap:23,
        marginBottom:40,
        transform: [{ translateX: -76 }, { translateY: -50 }],
    },
    labelTitle: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 26,
        lineHeight: 33,
        marginBottom:25,
        color:'white'
    },
    labelTitleFinaly:{
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 36,
        letterSpacing:0.02,
        color:'white'
    },
    avatar: {
        width: 190,
        height: 185,
        borderRadius: 120,
        marginHorizontal: 10
    },
    button: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        borderRadius: 20,
        marginTop: 80,
        width:210
    },
    buttonText: {
        color: '#6D39E5',
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})