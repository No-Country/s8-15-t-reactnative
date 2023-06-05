import { StyleSheet } from "react-native";

const AVATAR_SIZE = 85;
export const styles = StyleSheet.create({
    carouselContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      gap:45
    },
    avatar: {
      width: AVATAR_SIZE,
      height: AVATAR_SIZE,
      borderRadius: AVATAR_SIZE / 2,
      marginHorizontal: 10
    },
    arrowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10
    },
    arrow: {
      marginHorizontal: 10
    },
    labelInfo:{
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 16,
      lineHeight: 24,
      color:'white',
      alignItems: 'center',
    },
    labelTitle:{
      alignItems: 'center',
      justifyContent: 'center',
    },
    labelMain:{
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 20.5,
      lineHeight: 20,
      color:'white',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#FFFFFF',
      paddingVertical: 10,
      borderRadius: 20,
      marginTop: 20,
      width:210
    },
    buttonText: {
      color: '#6D39E5',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    buttonTransparent: {
      backgroundColor: 'transparent',
      paddingVertical: 10,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#FFFFFF',
      width:210
    },
    textButtonTransparent:{
      color: '#ffffff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    buttonView:{
      gap:10
    }
});