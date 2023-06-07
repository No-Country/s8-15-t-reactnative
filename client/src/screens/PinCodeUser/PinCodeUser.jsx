import { useState,useRef,useEffect } from 'react';
import {Pressable,Keyboard, Text} from "react-native"
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonText, HiddenTextInput, OTPInput, OTPInputContainer, OTPInputFocused, OTPInputSection, OTPInputText, StyledButton, ViewButton, ViewText, styles } from './PinCode.styles';
import { random } from 'lodash';

const PinCodeUser = () => {
  const [code,setCode] = useState("");
  const [pinReady,setPinReady]= useState(false);
  // monitoring input focus
  const [inputContainerIsFocused,setInputContainerIsFocused]=useState(false);
  const [generateCode, setGenerateCode] = useState("");
  const [showGeneratedCode, setShowGeneratedCode] = useState(false);

  const MAX_CODE_LENGTH = 4;
  // ref for text input
  const textInputRef = useRef(null);
  const codeDigitsArray = new Array(MAX_CODE_LENGTH).fill(0);

  const handleOnPress =()=>{
    setInputContainerIsFocused(true);
    setCode(generateCode);
    textInputRef?.current?.focus();
  }
  
  const handleShowGeneratedCode = () => {
    setShowGeneratedCode(true);
  };

  const handleOnBlur =()=>{
    setInputContainerIsFocused(false);
  };

  const sendVerificationCode = async (verificationCode) => {
    console.log("entrando...")
    try {

      await axios.post('https://s8-15-t-reactnative-production.up.railway.app/sendSMS', {
        phoneNumber: "+51997433697",
        message: `Tu código de verificación es: ${verificationCode}`,
      });
      setGenerateCode(verificationCode);
      console.log('Mensaje de verificación enviado correctamente');
    } catch (error) {
      console.log('Error al enviar el mensaje de verificación:', error);
    }
  };
  
  useEffect(()=>{
    // update pin ready value
    setPinReady(code.length === MAX_CODE_LENGTH);
    return ()=> setPinReady(false);
  },[code]);

  useEffect(() => {
    const verificationCode = String(random(1000, 9999));
    sendVerificationCode(verificationCode);
  }, []);


  const toCodeDigitInput = (_value,index)=>{
    const emptyInputChar =" ";
    const digit = code[index] || emptyInputChar;
    const generatedDigit = generateCode[index] || emptyInputChar; 
    // formatting
    const isCurrentDigit = index === code.length;
    const isLastDigit = index === MAX_CODE_LENGTH-1;
    const isCodeFull = code.length === MAX_CODE_LENGTH;

    const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);

    const StyleOTPInput = inputContainerIsFocused && isDigitFocused 
    ? OTPInputFocused: OTPInput;

    return(
      <StyleOTPInput key={index}>
         <OTPInputText>{showGeneratedCode ? generatedDigit : digit}</OTPInputText>
      </StyleOTPInput>
    );
  }


  return (
    <LinearGradient
    colors={['#7029E2', '#55B7FF']}
    start={[0,1.1]}
    end={[1.5, 1.2]}
    locations={[0.2, 0.6]}
    style={styles.container}
    >
      <ViewText>
        <Text style={styles.linkTextTitle}>Verifica tu teléfono</Text>
      </ViewText>
      <ViewText>
        <Text style={styles.textInfo}>Por favor ingrese</Text>
        <Text style={styles.textInfo}>los 4 digitos del codigo</Text>
        <Text style={styles.textInfo}>enviado al 505-287-8051 </Text>
      </ViewText>

      <Pressable onPress={Keyboard.dismiss}>
        <OTPInputSection>
          <OTPInputContainer onPress={handleOnPress}>
            {codeDigitsArray.map(toCodeDigitInput)}
          </OTPInputContainer>
          <HiddenTextInput
            value={code}
            onChangeText={setCode}
            maxLength={MAX_CODE_LENGTH}
            keyboardType="number-pad"
            returnKeyType="done"
            textContentType="oneTimeCode"
            ref={textInputRef}
            onBlur={handleOnBlur}
          />
        </OTPInputSection>

        <ViewText>
          <Text style={styles.linkText} onPress={handleShowGeneratedCode}>Codigo recibido</Text>
        </ViewText>
        <ViewButton>
          <StyledButton
            disabled={!pinReady}
          >
            <ButtonText>
              Confirmar
            </ButtonText>
          </StyledButton>
        </ViewButton>
      </Pressable>
    </LinearGradient>

  )
};

export default PinCodeUser