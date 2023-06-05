import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import contacts from './contacts';
import { useDispatch } from 'react-redux';
import { setTransferData } from '../../reduxApp/feature/transferDataSlice';

const MyContacts = ({ setIsSelected }) => {

    const dispatch = useDispatch();

    const selectedData = (data)=>{
        setIsSelected(true);
        dispatch(setTransferData({...data}));
    };

    return (
        <View className='h-64 w-full overflow-auto mt-5'>
            {
                contacts.map(contact =>(
                    <TouchableOpacity 
                        key={contact.dni} 
                        className='flex-row justify-between items-center p-2 border-b border-1 border-[#CAC4D0]'
                        onPress={()=> selectedData(contact)}
                    >
                        <View className='flex-row justify-center items-center'>
                            <View className='w-[40px] h-[40px] rounded-full bg-[#DDE7FF] items-center justify-center mr-4'>
                                <Text className='text-[#21005D] text-base font-medium'>{contact.name.split('')[0]}</Text>
                            </View>
                            <Text className='text-base'>{contact.name}</Text>
                        </View>
                        <Text><AntDesign name="caretright" size={10} color="#1D1B20" /></Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    );
};

export default MyContacts;