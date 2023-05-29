import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text} from 'react-native';
import { styles } from './StepForm.styles';

const StepForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    country: '',
    celphone: '',
    dni: '',
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
      <Text style={styles.labelTitle}>Completar tus datos</Text>
      <View style={[styles.fieldContainer, styles.fieldContainerTop]}>
        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          style={[styles.input, styles.inputField1]}
          placeholder="ejemplo@correo.com"
          value={formData.email}
          onChangeText={(value) => handleInputChange('email', value)}
        />
      </View>
      <View style={styles.fieldContainerGroup}>
        <View style={[styles.fieldContainer, styles.fieldContainerGroupItem]}>
          <Text style={styles.label}>País</Text>
          <TextInput
            style={styles.input}
            value={formData.country}
            onChangeText={(value) => handleInputChange('country', value)}
          />
        </View>
        <View style={[styles.fieldContainer, styles.fieldContainerGroupItem]}>
          <Text style={styles.label}>Número de teléfono</Text>
          <TextInput
            style={styles.input}
            value={formData.celphone}
            onChangeText={(value) => handleInputChange('celphone', value)}
          />
        </View>
      </View>

      <View style={[styles.fieldContainer, styles.fieldContainerTop]}>
        <Text style={styles.label}>DNI/Cédula de Identidad</Text>
        <TextInput
          style={[styles.input, styles.inputField4]}
          value={formData.dni}
          onChangeText={(value) => handleInputChange('dni', value)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StepForm;