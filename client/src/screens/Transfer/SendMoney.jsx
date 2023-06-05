import React, { useState } from 'react';
import Constants from 'expo-constants';
import { View, Text } from 'react-native';
import MyContacts from '../../components/Transfer/MyContacts';
import SelectedContact from '../../components/Transfer/SelectedContact';
import HeaderSendMoney from '../../components/Transfer/HeaderSendMoney';
   
const SendMoney = () => {

    const [ isSelected, setIsSelected ] = useState(false);

    return (
        <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1}} className='bg-[#FBFBFB] w-screen h-full'>
            <HeaderSendMoney setIsSelected={ setIsSelected }/>
            <View className='p-10'>
                <Text className='text-center text-[#1D1B20] font-semibold text-[20px] mt-2'>{!isSelected && 'Mis contactos'}</Text>
                {
                    isSelected?
                    <SelectedContact />
                    :
                    <MyContacts setIsSelected={setIsSelected}/>
                }
               
            </View>
        </View>
    );
};

export default SendMoney;
