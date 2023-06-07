import React, { useState } from 'react';
import Constants from 'expo-constants';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import Keyboard from '../../components/Transfer/Keyboard';
import { setTransferData } from '../../reduxApp/feature/transferDataSlice';
import { setChangeScreen } from '../../reduxApp/feature/changeScreenSlice';
import icon from '../../../assets/user.png';
import { GoBackButton, SmallProfilePicture } from '../../components';

const TransferMoney = () => {

  const [ value, setValue ] = useState('0');
  const dispatch = useDispatch();

  const transferData = useSelector(state => state.transferData);

  const handleSubmit = (number) => {

    const isNumeric = !isNaN(number);

    if(number !== 'arrowright'){
      setValue((prevValue) => 
        isNumeric? (prevValue === '0'? number.toString() : prevValue.toString() + number.toString()) :  prevValue.slice(0, -1)
      );
    }
    else{
      dispatch(setTransferData({...transferData, amount: value}));
      dispatch(setChangeScreen('Voucher'));
    }
    
  };

  return (
    <LinearGradient
      colors={['#7029E2', '#55B7FF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flexGrow: 1, height: '100%', width: '100%' }}
    >
      <View className='w-full h-[18%] flex-row items-center justify-between p-4'> 
        <GoBackButton/>
        <Text className='text-3xl text-white'style={{fontFamily: 'poppins-semiBold'}}>Transferir Dinero</Text>
        <SmallProfilePicture/>
      </View>
      <View className='rounded-tl-[36px] rounded-tr-[36px] w-full h-[82%] p-10 bg-[#FBFBFB]'>
        <View className='flex-row justify-center items-center border-slate-300 border-[1px] rounded-[20px] py-5'>
          <Image className='bg-slate-100 w-[48px] h-[48px] rounded-full mr-2' source={''}/>
          <View>
            <Text className='text-[15px] font-semibold leading-[22px]'>{transferData.name}</Text>
            <Text className='text-[15px] font-semibold text-slate-500'>CBU - {transferData.cbu}</Text>
          </View>
        </View>
        <Text className='w-full text-center pt-10 pb-10 text-[40px] text-[#6D39E5] font-medium'>US$ {Number(value).toLocaleString()}</Text>
        <Keyboard handleSubmit={handleSubmit}/>
      </View>
    </LinearGradient>
  );
};

export default TransferMoney;
