import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { DigitButtons } from './DigitButtons';

export const PinCodeInput = ({ onComplete }) => {
  const [pinCode, setPinCode] = useState('');

  const handleDigitPress = (digit) => {
    if (pinCode.length < 4) {
      setPinCode(pinCode + digit);
    }
  };

  const handleBackspacePress = () => {
    if (pinCode.length > 0) {
      setPinCode(pinCode.slice(0, -1));
    }
  };

  const handleSubmit = () => {
    if (pinCode.length === 4) {
      onComplete(pinCode);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingrese su PIN</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={4}
          value={pinCode}
          onChangeText={setPinCode}
          secureTextEntry
        />
      </View>
      <View style={styles.digitContainer}>
        <DigitButtons handleDigitPress={handleDigitPress} handleBackspacePress={handleBackspacePress} />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        borderRadius: 0,
        width: 200,
        height: 40,
        paddingHorizontal: 10,
        fontSize: 16,
    },
    submitButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    submitButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
})