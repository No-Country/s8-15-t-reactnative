import { useState,useRef,useEffect } from 'react';
import {Pressable,Keyboard, Text,StyleSheet} from "react-native"
import * as SMS from 'expo-sms';
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient';
// styled components
export const OTPInputSection = styled.View`
  justify-content: center;
  align-items:center;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: transparent;
`;

export const HiddenTextInput = styled.TextInput`
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
`;
export const OTPInputContainer = styled.Pressable`
  width: 70%;
  flex-direction: row;
  justify-content: space-around;
`;

export const OTPInput = styled.View`
  border-color: lightskyblue;
  min-width: 15%;
  border-width: 2px;
  border-radius: 5px;
  padding: 12px;
  color: black;
  background-color:#EEF0F3;
`;

export const OTPInputText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  color: black;
`;

export const OTPInputFocused = styled(OTPInput)`
  border-color: red;
  background-color: #55B7FF;
`;

const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin-top:5px;
  margin-bottom: 5px;
  width: 50%;
  border-radius:15px;
`;

export const ButtonText = styled.Text`
  color: black;
  font-size: 15px;
`;

export const ViewButton = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 70px;
`;
export const ViewText = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 50px;

`;

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
    try {
      const isAvailable = await SMS.isAvailableAsync();
      if (isAvailable) {
        const { result } = await SMS.sendSMSAsync(['+51997433697'], `Tu código de verificación es: 1234`);
        if (result && result === SMS.SentStatus.Sent) {
          console.log('Mensaje de verificación enviado correctamente');
        } else {
          console.log('Error al enviar el mensaje de verificación');
        }
      } else {
        console.log('No es posible enviar mensajes SMS en este dispositivo');
      }
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

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    color:"white",
    gap:10,
  },
  linkText: {
    color: '#ffffff',
    textDecorationLine: 'underline',
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkTextTitle: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  textInfo:{
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  }
})

export default PinCodeUser