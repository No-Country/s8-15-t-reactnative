import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import ProgressBarss from './ProgressBarss';

const Form = () => {
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = () => {
    if (progress < 100 && currentStep < 4) {
      setProgress(progress + 25);
      setCurrentStep(currentStep + 1);
    }
  };

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={(text) => handleInputChange('name', text)}
            />
            {/* Otros campos para el primer formulario */}
          </View>
        );
      case 2:
        return (
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={(text) => handleInputChange('email', text)}
            />
            {/* Otros campos para el segundo formulario */}
          </View>
        );
      case 3:
        return (
          <View style={styles.form}>
            {/* Campos para el tercer formulario */}
          </View>
        );
      case 4:
        return (
          <View style={styles.form}>
            {/* Campos para el cuarto formulario */}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <ProgressBarss progress={progress} totalSteps={4} currentStep={currentStep} />

      {renderForm()}

      <Button title="Next" onPress={handleNextStep} disabled={progress >= 100} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  form: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Form;