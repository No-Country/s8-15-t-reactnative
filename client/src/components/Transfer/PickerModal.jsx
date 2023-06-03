import React from 'react';
import { View, Text, TouchableOpacity, Modal} from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { setTransferData } from '../../reduxApp/feature/transferDataSlice';

const PickerModal = ({ isOpen, setSelectedValue, setIsOpen }) => {

    const pickerCategories = [
        {
            categoryName: 'Amistades',
            icon: 'users',
            iconColor: '#1D1B20'
        },
        {
            categoryName: 'Comida',
            icon: 'food-fork-drink',
            iconColor: '#BE7EDC'
        },
        {
            categoryName: 'Regalos',
            icon: 'gift',
            iconColor: '#FFB6CC'
        },
        {
            categoryName: 'Hogar',
            icon: 'home',
            iconColor: '#70CD6E'
        },
        {
            categoryName: 'Estudios',
            icon: 'book-open-blank-variant',
            iconColor: '#91DBF2'
        }
    ];

    const transferData = useSelector(state => state.transferData);
    const dispatch = useDispatch();

    const handleOptionSelect = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
        dispatch(setTransferData({...transferData, categoryName: value.categoryName}))
    };

    console.log(transferData)

    return (
        <Modal visible={isOpen} animationType='slide' transparent={true}>
            <TouchableOpacity className='w-full h-full justify-center items-center bg-transparent' onPress={()=> setIsOpen(false)}>
                <View className='w-[201px] bg-white rounded-[4px] shadow-2xl border-[#CAC4D0] border-[0.2px]'>
                    {
                        pickerCategories.map(category =>(
                            <TouchableOpacity 
                                onPress={() => handleOptionSelect({ categoryName: category.categoryName, icon: category.icon, color: category.iconColor })}
                                className='px-3 flex-row py-[20px]'
                                key={category.categoryName}
                            >
                                {
                                    category.categoryName === 'Amistades'?
                                    <Feather name="users" size={20.4} color="#1C1B1F" />
                                    :
                                    <MaterialCommunityIcons name={category.icon} size={19.5} color={category.iconColor} />
                                }
                                <Text className='pl-2 text-[15px]'>{category.categoryName}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </TouchableOpacity>
            </Modal>
    );
};

export default PickerModal;