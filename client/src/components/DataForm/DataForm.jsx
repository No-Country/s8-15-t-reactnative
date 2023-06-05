import { useState } from 'react';
import { Text,View,TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './DataForm.styles';

export const DataForm = ({ onSubmit,form1Data }) => {

    console.log("data formulario",form1Data);
    
    const [formData, setFormData] = useState({
        field1: '',
        field2: '',
        field3: '',
        field4: '',
      });
    
      const handleInputChange = (fieldName, value) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [fieldName]: value,
        }));
      };
    
      const handleSubmit = () => {
        onSubmit(formData);
      };
    
      return (
        <View style={styles.container}>
          <Text style={styles.labelTitle}>Tus datos</Text>
          <View style={[styles.fieldContainer, styles.fieldContainerTop]}>
            <Text style={styles.label}>Correo electrónico</Text>
            <TextInput
              style={[styles.input, styles.inputField1]}
              placeholder="ejemplo@correo.com"
              value={formData.field1}
              onChangeText={(value) => handleInputChange('field1', value)}
            />
          </View>
          <View style={styles.fieldContainerGroup}>
            <View style={[styles.fieldContainer, styles.fieldContainerGroupItem]}>
              <Text style={styles.label}>País</Text>
              <TextInput
                style={styles.input}
                value={formData.field2}
                onChangeText={(value) => handleInputChange('field2', value)}
              />
            </View>
            <View style={[styles.fieldContainer, styles.fieldContainerGroupItem]}>
              <Text style={styles.label}>Número de teléfono</Text>
              <TextInput
                style={styles.input}
                value={formData.field3}
                onChangeText={(value) => handleInputChange('field3', value)}
              />
            </View>
          </View>
    
          <View style={[styles.fieldContainer, styles.fieldContainerTop]}>
            <Text style={styles.label}>DNI/Cédula de Identidad</Text>
            <TextInput
              style={[styles.input, styles.inputField4]}
              value={formData.field4}
              onChangeText={(value) => handleInputChange('field4', value)}
            />
          </View>
    
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      );
}