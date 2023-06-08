import { View,Text,TouchableOpacity,StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

export const CustomAlert = ({ title, message, onClose }) => {
  return (
    <View style={styles.container}>
      <View style={styles.alert}>
        <Text style={styles.title}>{title}</Text>
        <Ionicons name="close-circle-outline" size={80} color="red" />
        <Text style={styles.message}>{message}</Text>
        <TouchableOpacity onPress={onClose} style={styles.button}>
          <Ionicons name="close" size={24} color="white" style={styles.closeIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
    width: '80%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 20,
    marginBottom: 20,
    lineHeight:30,
    textAlign: 'center',
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
});