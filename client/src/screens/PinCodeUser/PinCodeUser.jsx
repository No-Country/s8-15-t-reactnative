import { useState,useRef,useEffect } from 'react';
import {Pressable,Keyboard, Text} from "react-native"
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonText, HiddenTextInput, OTPInput, OTPInputContainer, OTPInputFocused, OTPInputSection, OTPInputText, StyledButton, ViewButton, ViewText, styles } from './PinCode.styles';
// styled components

const PinCodeUser = () => {
  const [code,setCode] = useState("");
  const [pinReady,setPinReady]= useState(false);
  // monitoring input focus
  const [inputContainerIsFocused,setInputContainerIsFocused]=useState(false);

  const MAX_CODE_LENGTH = 4;
  // ref for text input
  const textInputRef = useRef(null);
  const codeDigitsArray = new Array(MAX_CODE_LENGTH).fill(0);

  const handleOnPress =()=>{
    setInputContainerIsFocused(true);
    textInputRef?.current?.focus();
  }
  const handleOnBlur =()=>{
    setInputContainerIsFocused(false);
  };

  useEffect(()=>{
    // update pin ready value
    setPinReady(code.length === MAX_CODE_LENGTH);
    return ()=> setPinReady(false);
  },[code]);

  const toCodeDigitInput = (_value,index)=>{
    const emptyInputChar =" ";
    const digit = code[index] || emptyInputChar;

    // formatting
    const isCurrentDigit = index === code.length;
    const isLastDigit = index === MAX_CODE_LENGTH-1;
    const isCodeFull = code.length === MAX_CODE_LENGTH;

    const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);

    const StyleOTPInput = inputContainerIsFocused && isDigitFocused 
    ? OTPInputFocused: OTPInput;

    return(
      <StyleOTPInput key={index}>
        <OTPInputText>{digit}</OTPInputText>
      </StyleOTPInput>
    );
  }

  const sendVerificationCode = async () => {
    console.log("entrando...")
    try {
      const phoneNumber = "+51997433697"; // Reemplaza con el número de teléfono de destino
      const message = "Tu código de verificación es: 123";
  
      console.log('jannet');
      await axios.post('http://localhost:3001/sendSMS', {
        phoneNumber: "+51997433697",
        message: "Tu código de verificación es: 123",
      });
      console.log('Mensaje de verificación enviado correctamente');
    } catch (error) {
      console.log('Error al enviar el mensaje de verificación:', error);
    }
  };

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
          <Text style={styles.linkText}>Codigo recibido</Text>
        </ViewText>

        <ViewButton>
          <StyledButton
            disabled={!pinReady}
            onPress={sendVerificationCode}
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