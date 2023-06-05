import {StyleSheet} from 'react-native';
import styled from 'styled-components';
export const styles = StyleSheet.create({
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

export const StyledButton = styled.TouchableOpacity`
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