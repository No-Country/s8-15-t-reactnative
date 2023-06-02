import React, { useState } from 'react';
import Constants from 'expo-constants';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

const Voucher = () => {
  return (
    <LinearGradient
      colors={['#7029E2', '#55B7FF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ marginTop: Constants.statusBarHeight, flexGrow: 1, height: '100%', width: '100%' }}
    >
      <View className='w-full h-[18%] flex-row items-center justify-between p-4'> 
        <Text><AntDesign name="leftcircleo" size={25} color="white" /></Text>
        <Text className='text-[22px] text-white font-semibold'>Comprobante</Text>
        <Image className='bg-slate-100 w-[40px] h-[40px] rounded-full mr-2 border-[2px] border-white' source={''}/>
      </View>
      <View className='rounded-tl-[36px] rounded-tr-[36px] w-full h-[82%] p-10 bg-[#FBFBFB] relative'>
        <Text className='text-center mb-5'><AntDesign name="checkcircle" size={73.02} color="#32C993" /></Text>
        <Text className='absolute right-10 top-10'><AntDesign name="export" size={21.58} color="#5449C8" /></Text>
        <Text className='font-semibold text-[20px] text-center '>Transferencia exitosa</Text>
        <Text className='text-center text-[#B3B3B5] font-semibold text-[16px] px-10 py-5'>Tu dinero fue transferido con éxito.</Text>
        <View className='flex-row justify-evenly py-5'>
          <Text className='text-[#B3B3B5] font-semibold text-[16px]'>Monto transferido</Text>
          <Text className='text-[#6D39E5] font-semibold text-[16px]'>US$2000</Text>
        </View>
        <View className='flex-row justify-center items-center border-slate-300 border-[1px] rounded-[20px] py-5'>
          <Image className='bg-slate-100 w-[48px] h-[48px] rounded-full mr-2' source={''}/>
          <View>
            <Text className='text-[15px] font-semibold leading-[22px]'>Nombre y Apellido</Text>
            <Text className='text-[15px] font-semibold text-slate-500'>CVU - 0070 8822 1102 2255</Text>
          </View>
        </View>
        <View className='flex-row justify-between py-8'>
          <View className='flex-col gap-3'>
            <Text className='text-[#B3B3B5] font-semibold text-[16px]'>Fecha y Hora</Text>
            <Text className='text-[#B3B3B5] font-semibold text-[16px]'>No. Ref</Text>
            <Text className='text-[#B3B3B5] font-semibold text-[16px]'>Categoría</Text>
          </View>
          <View className='flex-col gap-3'>
            <Text className='font-semibold text-[16px]'>01/05/2023, 10:30PM</Text>
            <Text className='font-semibold text-[16px]'>11288889058722</Text>
            <Text className='font-semibold text-[16px]'>Amistades</Text>
          </View>
        </View>
        <TouchableOpacity className='bg-[#F18805] w-[200px] py-[12px] rounded-[25px] m-auto'>
          <Text className='text-center text-white text-[18px] font-semibold'>Finalizar</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Voucher;
