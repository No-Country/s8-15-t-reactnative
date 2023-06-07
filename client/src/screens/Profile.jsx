import { useDispatch } from 'react-redux';
import { View, Text, StatusBar, TouchableOpacity, ImageBackground,   } from 'react-native'
import colors from '../utils/colors'
import {MaterialCommunityIcons , Octicons} from '@expo/vector-icons';
import { useState } from 'react';
import EditProfile from '../components/EditProfile';
import fondo from '../Images/fondo.webp'
import {useNavigation} from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setUserData} from '../reduxApp/feature/userSlice';
import {logout} from '../reduxApp/feature/authSlice';

const Profile = () => {
const dispatch = useDispatch()
const cerrar = async () => {
  try {
    await AsyncStorage.removeItem('userData');
    dispatch(setUserData(null))
    dispatch(logout())
    console.log('Logout Successful');
  } catch (error) {
    console.log('Error:', error);
  }
};

    const [active, setActive] = useState(false)
 const navigation = useNavigation()
    
    return (
        <>
        <StatusBar backgroundColor={colors.violeta} />
        
            <ImageBackground source={fondo}
             className={`h-80 rounded-bl-3xl rounded-br-3xl overflow-hidden justify-center items-center `}
            >
      {/*  <Image className='h-32 w-32 bg-slate-400 rounded-full ' source={''} /> */}
           <MaterialCommunityIcons name='account-circle' color={'gray'} size={110} />
           <Text className='text-lg text-white font-bold ' >Esteban Leisz</Text>
            <Text className='text-lg text-white font-normal' >esteban.leisz@gmail.com</Text>
        </ImageBackground>
        <View className='flex flex-row absolute top-60 items-center justify-center w-full' >
        <TouchableOpacity className='bg-white rounded-xl h-20 w-24 m-5 items-center' >
            <MaterialCommunityIcons name='wallet-outline' size={40} color={'black'} />
            <Text className='text-xs' >Cbu/Alias</Text></TouchableOpacity>
            <TouchableOpacity className='bg-white rounded-xl h-20 w-24 m-5 items-center' >
                <MaterialCommunityIcons name='bell-ring-outline' size={40} color={'black'} />
                <Text className='text-xs' >Notificaciones</Text></TouchableOpacity>
        </View>

       
        <View className='h-full p-10 top-4 '>
            <TouchableOpacity onPress={() => navigation.navigate('VerificationUser')} className='flex flex-row' >
            <MaterialCommunityIcons  name='account-box-outline' size={25} />
            <Text className='ml-2'>Datos Personales</Text>
            </TouchableOpacity>
             <View style={{height:1}} className='bg-slate-500 mt-3 mb-3 w-full' ></View>
            <TouchableOpacity className='flex flex-row mt-2' >
            <MaterialCommunityIcons  name='shield-account-variant-outline' size={25} />
            <Text className='ml-2'>Seguridad</Text>
            </TouchableOpacity>
            <View style={{height:1}} className='bg-slate-500 mt-3 mb-3 w-full' ></View>
            <TouchableOpacity className='flex flex-row mt-2' >
            <Octicons name='gear' size={25} />
            <Text className='ml-2'>Configuracion</Text>
            </TouchableOpacity>
            <View style={{height:1}} className='bg-slate-500 mt-3 mb-3 w-full' ></View>
            <TouchableOpacity className='flex flex-row mt-2' >
            <MaterialCommunityIcons name='handshake-outline' size={25} />
            <Text className='ml-2'>Privacidad de Datos</Text>
            </TouchableOpacity>
            <View style={{height:1}} className='bg-slate-500 mt-3 mb-3 w-full' ></View>
            <TouchableOpacity className='flex flex-row mt-2' >
            <MaterialCommunityIcons name='help-circle-outline' size={25} />
            <Text className='ml-2'>Ayuda</Text>
            </TouchableOpacity>
            <View style={{height:1}} className='bg-slate-500 mt-3 mb-3 w-full' ></View>
            
            <TouchableOpacity onPress={() => cerrar()} className='flex flex-row mt-2' >
            <Text className='ml-2 text-red-800 font-medium text-sm'>Cerrar Sesion</Text>
            </TouchableOpacity>

        </View>
        <EditProfile active={active} setActive={setActive} />
        </> 
    )
}

export default Profile


  