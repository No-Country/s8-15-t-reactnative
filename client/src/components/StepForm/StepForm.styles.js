import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      paddingHorizontal:15,
      alignItems: 'center',
    },
    fieldContainer: {
      marginTop:12,
      marginBottom: 10,
    },
    fieldContainerTop: {
      alignSelf: 'stretch',
    },
    fieldContainerGroup: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'stretch',
    },
    fieldContainerGroupItem: {
      flex: 1,
      marginRight: 10,
    },
    label: {
      marginBottom: 5,
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 16,
      lineHeight: 24,
      color:'white'
    },
    labelTitle: {
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 22,
      lineHeight: 33,
      marginBottom:15,
      color:'white'
    },
    input: {
      width: '100%',
      height: 48,
      paddingHorizontal: 10,
      borderRadius:14,
      backgroundColor: '#EDF1F3',
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: '#AAD4EF',
      fontSize:19
    },
    inputField1: {
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
    },
    inputField4: {
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
    },
    button: {
      backgroundColor: '#FFFFFF',
      paddingVertical: 10,
      paddingHorizontal: 65,
      borderRadius: 20,
      marginTop: 20,
    },
    buttonText: {
      color: '#6D39E5',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    error: {
      fontSize:16,
      color: 'black',
      fontWeight: 'bold',
      marginTop: 3,
    },
    pickerContainer: {
      borderWidth: 1,
      borderRadius: 14,
      overflow: 'hidden',
    },
  });