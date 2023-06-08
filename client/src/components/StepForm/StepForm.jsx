import { useEffect, useMemo, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text} from 'react-native';
import { styles } from './StepForm.styles';
import {Picker} from '@react-native-picker/picker';
import { countries } from '../../utils/stepFormCountries';

const StepForm = ({ onSubmit,setShowAlert,setShowAlertData,form2Data }) => {
  // const [activeErrorEmail,setActiveErrorEmail] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    country: '',
    celphone: '',
    dni: '',
  });

  useEffect(() => {
    if (form2Data) {
      const { country,celphone, ...rest } = form2Data;

      console.log("country valor",country)
      const countryData= celphone;
      const phoneNumber = celphone.split(' ')[1];
      const data = { country: '', celphone: phoneNumber, ...rest };
      console.log("alfondo hay sitio", data);
      setFormData(data);
    }
  }, [form2Data]);

  const handleInputChange = (fieldName, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const selectedCountry = useMemo(() => countries.find((c) => c.value === formData.country), [
    formData.country,
  ]);

  // const phoneNumberError = useMemo(() => {
  //   if (selectedCountry) {
  //     const { maxLength, minLength } = selectedCountry;
  //     const { celphone } = formData;
  //     if (celphone.length < minLength) {
  //       return `El celular debe tener al menos ${minLength} dígitos`;
  //     }
  //     if (celphone.length > maxLength) {
  //       return `El celular debe tener como máximo ${maxLength} dígitos`;
  //     }
  //   }
  //   return '';
  // }, [selectedCountry, formData]);

  // const dniError = useMemo(() => {
  //   if (selectedCountry) {
  //     const { digitCelphone } = selectedCountry;
  //     const { dni } = formData;
      
  //     if (dni.length < digitCelphone) {
  //       return `El DNI debe tener al menos ${digitCelphone} dígitos`;
  //     }
      
  //     if (dni.length > digitCelphone) {
  //       return `El DNI debe tener como máximo ${digitCelphone} dígitos`;
  //     }  
  //   }
  //   return '';
  // }, [selectedCountry, formData]);

  const emailError = useMemo(() => {
    const { email } = formData;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    if (!emailRegex.test(email)) {
      return 'El correo electrónico ingresado no es válido';
    }
    
    return '';
  }, [formData]);

  const renderError = (error) => {
    if (error) {
      return <Text style={styles.error}>{error}</Text>;
    }
    return null;
  };

  const handleSubmit = () => {
    const countryName = formData.country.split(' - ')[1];
    const celPhoneCode = formData.country.split(' - ')[0];
    const modifiedFormData = { ...formData, country: countryName,celphone: celPhoneCode+' '+ formData.celphone };
    onSubmit(modifiedFormData);

    // if (Object.values(formData).some(value => value === '')) {
    //   setShowAlert(true);
    // } else if (phoneNumberError !== '') {
    //   setShowAlertData(true)
    // } else if (dniError !== ''){
    //   setShowAlertData(true)
    // }else if(emailError!==''){
    //   setActiveErrorEmail(true)
    //   setShowAlertData(true)
    // }
    
    // else {
    //   const countryName = formData.country.split(' - ')[1];
    //   const celPhoneCode = formData.country.split(' - ')[0];
    //   const modifiedFormData = { ...formData, country: countryName,celphone: celPhoneCode+' '+ formData.celphone };
    //   onSubmit(modifiedFormData);
    // }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.labelTitle}>Completar tus datos</Text>
      <View style={[styles.fieldContainer, styles.fieldContainerTop]}>
        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          style={[styles.input, styles.inputField1]}
          placeholder="ejemplo@correo.com"
          value={formData.email}
          onChangeText={(value) => handleInputChange('email', value)}
        />
        {/* {activeErrorEmail && renderError(emailError)} */}
      </View>
      <View style={styles.fieldContainerGroup}>
        {/* <View style={[styles.fieldContainer, styles.fieldContainerGroupItem]}>
          <Text style={styles.label}>País</Text>
          <TextInput
            style={styles.input}
            value={formData.country}
            onChangeText={(value) => handleInputChange('country', value)}
          />
        </View> */}
        <View style={[styles.fieldContainer, styles.fieldContainerGroupItem]}>
          <Text style={styles.label}>País</Text>
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.input}
              selectedValue={formData.country}
              onValueChange={(value) => handleInputChange('country', value)}
            >
              <Picker.Item label="Seleccione un código" value="" />
              {countries.map((country) => (
                <Picker.Item key={country.value} label={country.label} value={country.value} />
              ))}
            </Picker>
          </View>
        </View>
        <View style={[styles.fieldContainer, styles.fieldContainerGroupItem]}>
          <Text style={styles.label}>Número de teléfono</Text>
          <TextInput
            style={styles.input}
            value={formData.celphone}
            onChangeText={(value) => handleInputChange('celphone', value)}
          />
          {/* {renderError(phoneNumberError)} */}
        </View>
      </View>

      <View style={[styles.fieldContainer, styles.fieldContainerTop]}>
        <Text style={styles.label}>DNI/Cédula de Identidad</Text>
        <TextInput
          style={[styles.input, styles.inputField4]}
          value={formData.dni}
          onChangeText={(value) => handleInputChange('dni', value)}
        />
        {/* {renderError(dniError)} */}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StepForm;