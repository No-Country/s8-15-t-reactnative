import { View,Text, TextInput } from "react-native";

export const RenderFormStep = ({ formSteps, step, formData, handleChange }) => {
    const currentStep = formSteps[step];

    return (
      <View>
        <Text>{currentStep.title}</Text>
        {currentStep.fields.map((field, index) => (
          <TextInput
            key={index}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChangeText={(value) => handleChange(field.name, value)}
          />
        ))}
      </View>
    );
}
