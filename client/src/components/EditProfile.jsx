import { View, TouchableOpacity, Modal, StyleSheet, TextInput, Text, Image } from 'react-native'
import {MaterialCommunityIcons } from '@expo/vector-icons';
import {  useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const EditProfile = ({ active, setActive }) => {
    const [inputs, setInputs] = useState({
        profilePicture: '',
        name: '',
        address: '',
        phone: '',
        date: '',
        email: ''
      });
    
      const handleInputChange = (key, value) => {
        setInputs(prevInputs => ({
          ...prevInputs,
          [key]: value
        }));
      };
    
   useEffect(() => {
    
   }, [active])
  

   const handleSave = () => {
  
    console.log('Profile Picture:', inputs.profilePicture);
    console.log('Name:', inputs.name);
    console.log('Address:', inputs.address);
    console.log('Phone:', inputs.phone);
    console.log('Date:', inputs.date);
    console.log('Email:', inputs.email);
  };


const user = {
    image: ''
}
    return (
      <Modal animationType='slide' transparent={true} visible={active}>
        <View style={styles.modalContainer}>
         
            <View style={styles.modalContent} >

      <Text className='font-medium text-xl m-2 top-4 justify-center ' >Informacion Personal </Text>
                <TouchableOpacity style={styles.handle} onPress={() => setActive(false)} >
                  <MaterialCommunityIcons name='close' size={30}  />
                </TouchableOpacity>



      <View className='top-14 items-center' >
      <TouchableOpacity>
        {
            user?.image ?
            <Image  />
            :

      <MaterialCommunityIcons name='account-circle' color={'gray'} size={110} />
        }
      <MaterialCommunityIcons style={{position: 'absolute', top: 80, left: 80 }} name='square-edit-outline' color={'black'} size={30} />
      </TouchableOpacity>
      <TextInput
        placeholder="Nombre y Apellido"
        value={inputs.name}
        onChangeText={value => handleInputChange('name', value)}
        className='border-b-2 w-full text-base  border-slate-400 p-2 mb-2 '
      />
      </View>


    <View className='w-full p-4 items-center top-24' >
      <TextInput
      keyboardType='email-address'
        placeholder="Email"
        value={inputs.email}
        onChangeText={value => handleInputChange('email', value)}
        className='border-b-2 w-full text-base  border-slate-400 p-2 mb-2 '
      />
      <TextInput
        placeholder="Direccion"
        value={inputs.address}
        onChangeText={value => handleInputChange('address', value)}
        className='border-b-2 w-full text-base border-slate-400 p-2 mb-2 '
      />
      <TextInput
       keyboardType='phone-pad'
        placeholder="Telefono"
        value={inputs.phone}
        onChangeText={value => handleInputChange('phone', value)}
        className='border-b-2 w-full text-base border-slate-400 p-2 mb-2 '
      />
       <TextInput
       
        placeholder="Fecha de nacimiento"
        value={inputs.date}
        onChangeText={value => handleInputChange('date', value)}
        className='border-b-2 w-full text-base border-slate-400 p-2 mb-2 '
      />
      <TouchableOpacity style={{backgroundColor:'#5448C8'}} onPress={handleSave} className='font-medium mt-10 h-10 justify-center items-center w-32 rounded-3xl'>
        <Text style={{ color: 'white', textAlign: 'center' }}>Guardar</Text>
      </TouchableOpacity>
    </View>
           
            </View>
          
        </View>
      </Modal>
    );
  };
  
  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: '100%',
      height: '80%',
      backgroundColor: 'white',
      borderRadius: 10,
      bottom: 0,
      position: 'absolute',
     
      alignItems: 'center',
    },
    handle: {
      width: '8%',
      height: '5%',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 16,
      left: 10
    },
  });

  export default EditProfile