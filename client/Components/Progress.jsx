import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import StepIndicator from 'react-native-step-indicator';

const Progress = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formInputs, setFormInputs] = useState({
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
  });
  const { field1, field2, field3, field4,field5 } = formInputs;

  const stepLabels = ['Paso 1', 'Paso 2', 'Paso 3', 'Paso 4','Paso 5'];

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleInputChange = (inputName, value) => {
    setFormInputs((prevState) => ({
      ...prevState,
      [inputName]: value,
    }));
  };

  const handleFinish = () => {
    // Lógica para guardar los datos del formulario y finalizar el proceso
  };

  const customStyles = {
    stepIndicatorLabelUnFinishedColor: 'black', // Cambia el color de los círculos inactivos
    stepIndicatorUnFinishedColor: '#D0EFFF', // Cambia el color de la barra de progreso inactiva
    stepStrokeUnFinishedColor: 'red', // Cambia el color de la línea de progreso inactiva
    stepIndicatorFinishedColor: '#47A7FF',
    stepIndicatorLabelFinishedColor: 'black',
    separatorStrokeWidth: 10,
    currentStepStrokeWidth: 5,
    stepStrokeCurrentColor: '#47A7FF',
    separatorFinishedColor: '#47A7FF',
    separatorUnFinishedColor: '#D0EFFF',
    stepIndicatorLabelFontSize: 15,
    currentStepIndicatorLabelFontSize: 15,
    labelColor: '#666666',
    labelSize: 15,
  };
  
  return (
    <View style={{ flex: 1, marginTop: 100 }}>
      <StepIndicator
        currentPosition={currentStep}
        stepCount={stepLabels.length}
        customStyles={customStyles}
      />
      {currentStep === 0 && (
        <View>
          <TextInput
            placeholder="Campo 1"
            value={field1}
            onChangeText={(text) => handleInputChange('field1', text)}
          />
          <TouchableOpacity onPress={handleNextStep}>
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      )}
      {currentStep === 1 && (
        <View>
          <TextInput
            placeholder="Campo 2"
            value={field2}
            onChangeText={(text) => handleInputChange('field2', text)}
          />
          <TouchableOpacity onPress={handleNextStep}>
            <Text>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePreviousStep}>
            <Text>Previous</Text>
          </TouchableOpacity>
        </View>
      )}
      {currentStep === 2 && (
        <View>
          <TextInput
            placeholder="Campo 3"
            value={field3}
            onChangeText={(text) => handleInputChange('field3', text)}
          />
          <TouchableOpacity onPress={handleNextStep}>
            <Text>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePreviousStep}>
            <Text>Previous</Text>
          </TouchableOpacity>
        </View>
      )}
      {currentStep === 3 && (
        <View>
          <TextInput
            placeholder="Campo 4"
            value={field4}
            onChangeText={(text) => handleInputChange('field4', text)}
          />
          <TouchableOpacity onPress={handleNextStep}>
            <Text>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePreviousStep}>
            <Text>Previous</Text>
          </TouchableOpacity>
        </View>
      )}
      {currentStep === 4 && (
        <View>
          <TextInput
            placeholder="Campo 5"
            value={field5}
            onChangeText={(text) => handleInputChange('field5', text)}
          />
          <TouchableOpacity onPress={handleFinish}>
            <Text>Finish</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePreviousStep}>
            <Text>Previous</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Progress;