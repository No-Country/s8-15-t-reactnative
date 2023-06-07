import { useState } from 'react';
import { View, Text } from 'react-native';
import HeaderSendMoney from '../../components/Transfer/HeaderSendMoney';
import SelectedContact from '../../components/Transfer/SelectedContact';
import MyContacts from '../../components/Transfer/MyContacts';
   
const SendMoney = () => {

    const [ isSelected, setIsSelected ] = useState(false);

    return (
        <View style={{flexGrow: 1}} className='bg-[#FBFBFB] w-screen h-full'>
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
