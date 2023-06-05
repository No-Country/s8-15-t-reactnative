import React from 'react'
import { Text,View,StyleSheet, TouchableOpacity,Image } from 'react-native'

export const DataUser = ({form2Data,setActiveStep}) => {
  const handleSubmit = () => {
    setActiveStep(4);
  };
  const handleSubmitModifify = ()=>{
    setActiveStep(0);
  } 
  return (
    <View style={styles.container}>
        <Text style={styles.labelTitle}>Tus datos</Text>
        <View style={styles.containerData}>
            <View style={styles.dataContainer}>
                <View style={styles.dataUser}>
                    <Text style={styles.titleUser}>Nombre:</Text>
                    <Text style={styles.titleData}>{form2Data?.email}</Text>
                </View>
                <View style={styles.dataUser}>
                    <Text style={styles.titleUser}>Número de teléfono:</Text>
                    <Text style={styles.titleData}>{form2Data?.celphone}</Text>
                </View>
                <View style={styles.dataUser}>
                    <Text style={styles.titleUser}>Lugar de creación de cuenta:</Text>
                    <Text style={styles.titleData}>{form2Data?.country}</Text>
                </View>
                <View style={styles.dataUser}>
                    <Text style={styles.titleUser}>Número de documento:</Text>
                    <Text style={styles.titleData}>{form2Data?.dni}</Text>
                </View>
            </View>
            <View>
                <Image
                    source={{ uri: form2Data?.avatar }}
                    style={styles.avatar}
                />
            </View>
        </View>
        <View>
        <TouchableOpacity style={styles.buttonModified} onPress={handleSubmitModifify}>
          <Text style={styles.buttonTextModified}>Modificar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export const styles = StyleSheet.create({
    container: {
      paddingHorizontal:15,
      alignItems: 'center',
      gap:25
    },
    containerData:{
        flexDirection: 'row', // División horizontal
        gap:1
    },
    labelTitle: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 22,
        lineHeight: 33,
        marginBottom:15,
        color:'white'
    },
    titleData:{
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 17,
        lineHeight: 24,
        color:'white'
    },
    titleUser:{
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 19,
        lineHeight: 24,
        color:'white'
    },
    dataContainer:{
        gap:24,
    },
    dataUser:{
        gap:2
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
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonModified:{
        backgroundColor: 'orange',
        paddingVertical: 10,
        borderRadius: 20,
        marginTop: 20,
        width:210
    },
    buttonTextModified:{
        color: 'white',
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        marginHorizontal: 10,
    },
})