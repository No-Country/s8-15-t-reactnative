import { Text, View,StyleSheet,Image,TouchableOpacity } from 'react-native'

export const VerifiedAccount = ({form2Data}) => {
  const handleSubmit = () => {

  };
  return (
    <View style={styles.container}>
        <Text style={styles.labelTitle}>Finalizar</Text>
        <View style={styles.viewData}>
            <Image
                source={{ uri: form2Data.avatar }}
                style={styles.avatar}
            />
            <Text style={styles.labelTitleFinaly}>Cuenta Verificada</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Ir a Payfriend</Text>
        </TouchableOpacity>
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
        gap:23,
        marginBottom:30
    },
    labelTitle: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 22,
        lineHeight: 33,
        marginBottom:15,
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
        width: 170,
        height: 170,
        borderRadius: 120,
        marginHorizontal: 10
    },
    button: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        borderRadius: 20,
        marginTop: 20,
        width:210
    },
    buttonText: {
        color: '#6D39E5',
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})