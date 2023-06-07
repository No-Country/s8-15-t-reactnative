import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import PickerModal from './PickerModal';
import { useSelector, useDispatch } from 'react-redux';
import { setChangeScreen } from '../../reduxApp/feature/changeScreenSlice';

const SelectedContact = () => {

    const [ isOpen, setIsOpen ] = useState(false);
    const [ selectedValue, setSelectedValue ] = useState({ categoryName: 'Amistades', icon: 'users', color: '#1C1B1F' });

    const transferData = useSelector(state => state.transferData);

    const dispatch = useDispatch();

    return (
        <View>
            <Text className='text-[#6D39E5] text-center text-xl font-semibold'>{transferData.name}</Text>
            <View className='pt-7'>
                <Text className='text-[#1D1B20] text-center text-lg font-bold'>CBU</Text>
                <Text className='text-[#1D1B20] text-center text-lg'>{transferData.cbu}</Text>
            </View>
            <View className='pt-7'>
                <Text className='text-[#1D1B20] text-center text-lg font-bold'>Alias</Text>
                <Text className='text-[#1D1B20] text-center text-lg'>{transferData.alias}</Text>
            </View>
            <View className='pt-7'>
                <Text className='text-[#1D1B20] text-center text-lg font-bold'>DNI</Text>
                <Text className='text-[#1D1B20] text-center text-lg'>{transferData.dni}</Text>
            </View>
            <Text className='text-[#1D1B20] text-center text-lg font-semibold pt-5'> Categoría de Transacción</Text>
            <TouchableOpacity 
                onPress={()=> setIsOpen(true)} 
                className='w-[200px] h-[64] flex-row justify-between items-center rounded-[4px] border px-4 m-auto mt-8'
            >
                {
                    selectedValue.categoryName === 'Amistades'?
                    <Feather name={selectedValue.icon} size={20.4} color={selectedValue.color} />
                    :
                    <MaterialCommunityIcons name={selectedValue.icon} size={19.5} color={selectedValue.color} />
                }
                <Text className='text-[#1D1B20] text-[15px]'>{selectedValue.categoryName}</Text>
                <AntDesign name="down" size={11.31} color="#1C1B1F" />
            </TouchableOpacity>
            <PickerModal isOpen={isOpen} setIsOpen={setIsOpen} setSelectedValue={setSelectedValue}/>
            <TouchableOpacity 
                className='bg-[#F18805] w-[200px] py-[12px] rounded-[25px] m-auto mt-12'
                onPress={()=> dispatch(setChangeScreen('TransferMoney'))}
            >
                <Text className='text-center text-white text-[18px] font-semibold'>Continuar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SelectedContact;