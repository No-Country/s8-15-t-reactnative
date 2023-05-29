import { useState } from 'react';
import { View,TouchableOpacity, Text } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import StepForm from '../../components/StepForm/StepForm';
import { customStyles } from './ProgressStep.styles';
import { VerifyEmail } from '../../components/VerifyEmail/VerifyEmail';
import { DataForm } from '../../components/DataForm/DataForm';
import { ProfileUser } from '../../components/ProfileUser/ProfileUser';

const ProgressStepUser = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [form1Data, setForm1Data] = useState(null);
  const [form2Data, setForm2Data] = useState(null);

  const handleForm1Submit = (formData) => {
    setForm1Data(formData);
    setActiveStep(1);
  };
  const handleForm2Submit = (formData) => {
    console.log("dta")
    setActiveStep(2);
  };

  return (
    <View style={{ flex: 1,gap:34,flexDirection:'column',backgroundColor:'#7029E2'}}>
      <View style={{marginTop:90}}>
        <StepIndicator
          currentPosition={activeStep}
          stepCount={5}
          customStyles={customStyles}
        />
      </View>
      <View>
        {activeStep === 0 && (
            <View>
              <StepForm onSubmit={handleForm1Submit} />
            </View>
        )}
        {activeStep === 1 && (
          <View>
            <VerifyEmail onSubmit={handleForm2Submit} />
          </View>
        )}
        {activeStep === 2 && (
          <View>
            <ProfileUser/>
            {/* Renderizar los campos del paso 3 y el botón "Next" */}
            <TouchableOpacity onPress={() => setActiveStep(3)}>
              <Text>Next</Text>
            </TouchableOpacity>
          </View>
        )}
        {activeStep === 3 && (
          <View>
            <Text>{JSON.stringify(form1Data)}</Text>
            {/* Renderizar los campos del paso 3 y el botón "Next" */}
            <TouchableOpacity onPress={() => setActiveStep(4)}>
              <Text>Next</Text>
            </TouchableOpacity>
          </View>
        )}
        {activeStep === 4 && (
          <View>
            {/* Renderizar los campos del paso 4 y el botón "Finish" */}
            <TouchableOpacity onPress={() => setActiveStep(5)}>
              <Text>Finish</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default ProgressStepUser;