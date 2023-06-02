import React, { useState } from 'react';
import Constants from 'expo-constants';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

const TransferMoney = () => {

  const [ value, setValue ] = useState('0');

  const handleSubmit = (number) => {

    const isNumeric = !isNaN(number);

    setValue((prevValue) => 
      isNumeric? (prevValue === '0'? number.toString() : prevValue.toString() + number.toString()) :  prevValue.slice(0, -1)
    );
  };
 
  const numbers = Array.from({length: 9}, (_, index) => index + 1);
  numbers.push({ icon: 'closecircleo', size: 24, color: 'white' }, 0, { icon: 'arrowright', size: 24, color: 'white' });

  return (
    <LinearGradient
      colors={['#7029E2', '#55B7FF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ marginTop: Constants.statusBarHeight, flexGrow: 1, height: '100%', width: '100%' }}
    >
      <View className='w-full h-[18%] flex-row items-center justify-between p-4'> 
        <Text><AntDesign name="bells" size={20} color="white" /></Text>
        <Text className='text-[22px] text-white font-semibold'>Transferir Dinero</Text>
        <Image className='bg-slate-100 w-[40px] h-[40px] rounded-full border-[2px] border-white' source={''}/>
      </View>
      <View className='rounded-tl-[36px] rounded-tr-[36px] w-full h-[82%] p-10 bg-[#FBFBFB]'>
        <View className='flex-row justify-center items-center border-slate-300 border-[1px] rounded-[20px] py-5'>
          <Image className='bg-slate-100 w-[48px] h-[48px] rounded-full mr-2' source={''}/>
          <View>
            <Text className='text-[15px] font-semibold leading-[22px]'>Nombre y Apellido</Text>
            <Text className='text-[15px] font-semibold text-slate-500'>CVU - 0070 8822 1102 2255</Text>
          </View>
        </View>
        <Text className='w-full text-center pt-10 pb-10 text-[40px] text-[#6D39E5] font-medium'>US$ {Number(value).toLocaleString()}</Text>
        <View className='w-full flex-row flex-wrap'>
          {
            numbers.map((item, index) => (
              <View key={index} className='w-1/3 justify-center items-center p-2'>  
              {
                typeof item === 'number' ? (
                <TouchableOpacity onPress={() => handleSubmit(item)} className='rounded-full w-[70px] h-[70px] bg-slate-50 p-5 justify-center items-center'>
                  <Text className='text-[26px] font-semibold'>{item}</Text>
                </TouchableOpacity>
                ) : (
                <TouchableOpacity onPress={() => handleSubmit(item.icon)} style={item.icon === 'closecircleo'? { backgroundColor: '#BABABA' } : { backgroundColor: '#6D39E5' }} className='rounded-full w-[70px] h-[70px] p-5 justify-center items-center'>
                  <AntDesign name={item.icon} size={item.size} color={item.color} />
                </TouchableOpacity>
                )
              }
            </View>
            ))
          }
        </View>
      </View>
    </LinearGradient>
  );
};

export default TransferMoney;
