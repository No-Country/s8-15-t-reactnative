/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import contacts from './contacts';
import { useDispatch } from 'react-redux';
import { setTransferData } from '../../reduxApp/feature/transferDataSlice';

const FindContacts = ({ value, setIsSelected, setValue }) => {

    const findContact = contacts.filter(
        (contact) => 
            contact.name.toLowerCase().includes(value.toLowerCase()) || 
            contact.cbu.toLowerCase().includes(value.toLowerCase()) || 
            contact.alias.toLowerCase().includes(value.toLowerCase())   
    );

    const dispatch = useDispatch();

    const selectedData = (data)=>{
        setIsSelected(true);
        dispatch(setTransferData({...data}));
        setValue('');
    };

    return (
        <View 
            className={`w-[328px] bg-white rounded-bl-[28px] rounded-br-[28px] border-[1px] border-[#CAC4D0] absolute top-[56] ${value === '' && 'hidden'}`}
        >
            {
                findContact.map((contact) =>(
                    <TouchableOpacity 
                        key={contact.dni} 
                        className='flex-row justify-between items-center p-2'
                        onPress={()=> selectedData(contact)}
                    >
                        <View className='flex-row justify-center items-center'>
                            <View className='w-[40px] h-[40px] rounded-full bg-[#EADDFF] items-center justify-center mr-4'>
                                <Text className='text-[#21005D] text-base font-medium'>{contact.name.split('')[0]}</Text>
                            </View>
                            <Text className='text-base text-[#1D1B20]'>{contact.name}</Text>
                        </View>
                    </TouchableOpacity>
                ))
            }
        </View>
    );
};

export default FindContacts;