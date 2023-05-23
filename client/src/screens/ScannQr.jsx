import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, ActivityIndicator, Image, TouchableOpacity, Modal } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import QRCode from 'react-native-qrcode-svg';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import qr from '../Images/codigoqr.png'
import {MaterialCommunityIcons } from '@expo/vector-icons';


const ScannQr = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    alert(`QR code: ${data}`);
  };

  const handleShowQRCode = () => {
    setScanned(false);
    setShowQR(!showQR);
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera.</Text>;
  }

  return (
    < >
      
          {scanned ? (
            <View className='flex flex-1 h-full w-full justify-center items-center' >
              <Text>Gdsdadadddfsfsf</Text>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{height: '100%', width:'100%'}}
              /> 
              </View>
          ) : (
            <View className='flex flex-1 h-full w-full bg-slate-700'>
            <LinearGradient colors={[ '#6D39E5', '#5C91F7']} 
             start={{ x: 0, y: 0 }} 
             end={{ x: 1, y: 0 }} 
             className='flex flex-1 items-center justify-around' > 
             <TouchableOpacity onPress={() => setScanned(true)} >
        <Animatable.Image
        animation="pulse" // Tipo de animación: pulse (crecimiento y encogimiento)
        easing="ease-out" // Curva de aceleración de la animación
        iterationCount="infinite" // Repetición infinita
        source={require('../Images/codigoqr.png')} // Ruta de tu imagen
        style={{ top:150, width: 200, height: 200 }} />
        </TouchableOpacity>
              <Button className='' title="Mostrar QR" onPress={handleShowQRCode} />
                </LinearGradient>
            </View>
          )}
          <Modal transparent={true}  animationType='slide' visible={showQR} >
            <View style={{flex:1, bottom:50, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
            <View  className='bg-white rounded-t-3xl  flex absolute bottom-0 h-96 w-full justify-center items-center'>
          <TouchableOpacity className='absolute top-6 left-7 justify-center items-center ' onPress={handleShowQRCode} >
          <MaterialCommunityIcons name='close' size={30}  />
          </TouchableOpacity>
              <Text className='absolute top-6 font-semibold text-2xl text-violeta' >Recibir</Text>
              <View className='-top-2' >
          <QRCode  value="Your QR Code Data" size={120} />
              </View>
              <Text className='font-normal text-base text-zinc-500 w-52 text-center' >Escanear dirección para recibir el pago</Text>
              <TouchableOpacity className='bg-naranja p-3 rounded-3xl mt-4' >
                <Text className='text-white font-semibold text-lg ' >Soliciatar pagos</Text>
              </TouchableOpacity>
            </View>
            </View>
        </Modal>
        </>
      )}
  
  




const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  qrContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  loadingIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ScannQr;

