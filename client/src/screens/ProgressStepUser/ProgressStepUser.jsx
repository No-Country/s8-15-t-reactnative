import { useState } from 'react';
import { View,TouchableOpacity, Text, Button,Image } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import StepForm from '../../components/StepForm/StepForm';
import { customStyles } from './ProgressStep.styles';
import { VerifyEmail } from '../../components/VerifyEmail/VerifyEmail';
// import { DataForm } from '../../components/DataForm/DataForm';
import { ProfileUser } from '../../components/ProfileUser/ProfileUser';
// import { DataForm } from '../../components/DataForm/DataForm';
import { DataUser } from '../../components/DataUser/DataUser';
import { CustomAlert } from '../../components/CustomAlert/CustomAlert';
import { VerifiedAccount } from '../../components/VerifiedAccount/VerifiedAccount';
import { LinearGradient } from 'expo-linear-gradient'
import fondo from '../../images/wave.webp'
import { CustomDialog } from '../../components/CustomDialog/CustomDialog';
import { AntDesign } from '@expo/vector-icons'; 

const ProgressStepUser = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    country: '',
    celphone: '',
    dni: '',
  });

  const [form1Data, setForm1Data] = useState(null);
  const [form2Data, setForm2Data] = useState(null);

  const [showAlert, setShowAlert] = useState(false);
  const [showAlertData, setShowAlertData] = useState(false);

  const [showAlertPassword, setShowAlertPassword] = useState(false);

  const handleForm1Submit = (formData) => {
    setForm1Data(formData);
    setActiveStep(1);
  };

  const handleForm1DataSubmit = (newForm1Data) => {
    setForm2Data(newForm1Data);
    setActiveStep(3);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  const handleCloseAlertCelphone = ()=>{
    setShowAlertData(false)
  }
  const handlePreviousStep = () => {
    console.log('Botón de flecha presionado');
  };
  // close olvido contrasena
  const handleClosePassword = () => {
    setShowAlertPassword(false);
  };
  return (
    <View style={{ flex: 1,gap:34,flexDirection:'column'}} >
      <LinearGradient
        colors={['#7029E2', '#55B7FF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: '100%', width: '100%', position: 'relative' }}
      >
        <Image
					source={fondo}
					className='absolute w-full object-fill justify-center items-center -bottom-5'
          style={{ 
            position: 'absolute', 
            bottom: 0, 
            left: 3,
            height:'40%',
            width: '99%',
          }}
        />
        <View>
          <TouchableOpacity style={{marginTop:60}} onPress={handlePreviousStep}>
            <AntDesign name="left" size={34} color="white" />
          </TouchableOpacity>
        </View>

        <View style={{marginTop:'6%'}}>
          <StepIndicator
            currentPosition={activeStep}
            stepCount={5}
            customStyles={customStyles}
          />
        </View>
        
        <View style={{marginTop:30}}>
          {activeStep === 0 && (
            <View>
              <StepForm 
                onSubmit={handleForm1Submit} 
                setShowAlert={setShowAlert} 
                setShowAlertData={setShowAlertData}
                form2Data={form2Data}
              />
            </View>
          )}
          {activeStep === 1 && (
            <View>
              <VerifyEmail setActiveStep={setActiveStep} />
            </View>
          )}
          {activeStep === 2 && (
            <View>
              <ProfileUser form1Data={form1Data} onForm1DataSubmit={handleForm1DataSubmit}/>
              {/* Renderizar los campos del paso 3 y el botón "Next" */}
              {/* <TouchableOpacity onPress={() => setActiveStep(3)}>
                <Text>Next</Text>
              </TouchableOpacity> */}
            </View>
          )}
          {activeStep === 3 && (
            <View>
              {/* <DataForm /> */}
              <DataUser form2Data={form2Data} setActiveStep={setActiveStep}/>
              {/* <Text>{JSON.stringify(form2Data)}</Text> */}
              {/* Renderizar los campos del paso 3 y el botón "Next" */}
              {/* <TouchableOpacity onPress={() => setActiveStep(4)}>
                <Text>Next</Text>
              </TouchableOpacity> */}
            </View>
          )}
          {activeStep === 4 && (
            <View>
              <VerifiedAccount form2Data={form2Data} setShowAlertPassword={setShowAlertPassword}/>
              {/* Renderizar los campos del paso 4 y el botón "Finish" */}
              {/* <TouchableOpacity onPress={() => setActiveStep(4)}>
                <Text>Finish</Text>
              </TouchableOpacity> */}
            </View>
          )}
        </View>
        {showAlert && (
          // <CustomDialog onClose={handleCloseAlert}/>
            <CustomAlert
            title="Datos Incompletos"
            message= {`Por favor complete\ntodos los datos`}
            onClose={handleCloseAlert}
            />
        )}
        {showAlertPassword && (
          <CustomDialog onClose={handleClosePassword}/>
            // <CustomAlert
            //   title="Datos Incompletos"
            //   message= {`Por favor complete\ntodos los datos`}
            //   onClose={handleCloseAlert}
            // />
        )}
        {showAlertData && (
            <CustomAlert
              title="Datos invalidos"
              message= {`Por favor Ingrese\ncorrectamente los datos`}
              onClose={handleCloseAlertCelphone}
            />
        )}
      </LinearGradient>
    </View>
  );
};

export default ProgressStepUser;