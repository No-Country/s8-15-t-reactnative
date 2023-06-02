import React, { useState } from 'react';
import Constants from 'expo-constants';
import { View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Entypo } from '@expo/vector-icons';
   
const SendMoney = () => {

    const [ value, setValue ] = useState('');

    const contacts = [
        {
            name: 'Alan Megri',
            cbu: '01702046600000087865',
            alias: 'Adrian.buffo.payfriend',
            dni: '46349304'
        },
        {
            name: 'Maria Garcia',
            cbu: '01702046600000012345',
            alias: 'MariaGarcia123',
            dni: '12345678'
        },
        {
            name: 'Juan Perez',
            cbu: '01702046600000098765',
            alias: 'JuanPerez789',
            dni: '98765432'
        },
        {
            name: 'Laura Martinez',
            cbu: '01702046600000054321',
            alias: 'LauraMtz',
            dni: '54321098'
        },
        {
            name: 'Carlos Fernandez',
            cbu: '01702046600000024680',
            alias: 'CarlosFdez',
            dni: '24681357'
        },
        {
            name: 'Ana Lopez',
            cbu: '01702046600000013579',
            alias: 'AnaLopez246',
            dni: '13579246'
        },
        {
            name: 'Pedro Sanchez',
            cbu: '01702046600000075319',
            alias: 'Sanchez123',
            dni: '75319024'
        },
        {
            name: 'Lucia Rodriguez',
            cbu: '01702046600000086420',
            alias: 'LuciaRod',
            dni: '86420975'
        },
        {
            name: 'Sergio Gonzalez',
            cbu: '01702046600000099999',
            alias: 'SergioG',
            dni: '99999999'
        },
        {
            name: 'Mariana Ramirez',
            cbu: '01702046600000011111',
            alias: 'MarianaR',
            dni: '11111111'
        }
    ];

    const findContact = contacts.filter(
        (contact) => 
            contact.name.toLowerCase().includes(value.toLowerCase()) || 
            contact.cbu.toLowerCase().includes(value.toLowerCase()) || 
            contact.alias.toLowerCase().includes(value.toLowerCase())   
    );

    return (
        <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1}} className='bg-[#FBFBFB] w-screen h-full'>
            <LinearGradient
            colors={['#7029E2', '#55B7FF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{height: 150, width: '100%' }}
            className='rounded-bl-[36px] rounded-br-[36px] flex-row items-center justify-between p-4 relative z-30'
            >
                <Text><AntDesign name="bells" size={20} color="white" /></Text>
                <Text className='text-[22px] text-white font-semibold'>Enviar dinero</Text>
                <Image className='bg-slate-100 w-[40px] h-[40px] rounded-full border-[2px] border-white' source={''}/>
                <View className='justify-center items-center absolute bottom-[-25] inset-x-0'>
                    <TextInput
                        className={`w-[328px] h-[56px] bg-white p-5 border-[1px] border-[#CAC4D0] ${value === ''? 'rounded-[28px]' : 'rounded-tl-[28px] rounded-tr-[28px]'}`}
                        placeholder='Nombre/Cbu/Alias'
                        value={value}
                        onChangeText={(text)=> setValue(text)}
                    />
                    <View className='absolute right-[60] top[50%] z-60 transform -translate-y-[-12]'>
                        <Entypo name="magnifying-glass" size={20} color="black" />
                    </View>
                    <View 
                        className={`w-[328px] bg-white rounded-bl-[28px] rounded-br-[28px] border-[1px] border-[#CAC4D0] absolute top-[56] ${value === '' && 'hidden'}`}
                    >
                        {
                            findContact.map(contact =>(
                                <TouchableOpacity key={contact.dni} className='flex-row justify-between items-center p-2'>
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
                </View>
            </LinearGradient>
            <View className='p-10'>
                <Text className='text-center text-[#1D1B20] font-semibold text-[20px]'>Mis contactos</Text>
                <View className='h-64 w-full overflow-auto'>
                    {
                        contacts.map(contact =>(
                            <TouchableOpacity 
                                key={contact.dni} 
                                className='flex-row justify-between items-center p-2 border-b border-1 border-[#CAC4D0]'
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
            </View>
        </View>
    );
};

export default SendMoney;
