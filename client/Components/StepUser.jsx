import { useState } from "react";
import { Button, View } from "react-native";
import { formSteps } from "../utils/formSteps";
import { RenderFormStep } from "./RenderFormStep";

export const StepUser = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <RenderFormStep
            formSteps={formSteps}
            step={step}
            formData={formData}
            handleChange={handleChange}
            />
            <View style={{ flexDirection: 'row' }}>
            {step > 0 && (
                <Button title="Previous" onPress={handlePrevious} />
            )}
            {step < formSteps.length - 1 ? (
                <Button title="Next" onPress={handleNext} />
            ) : (
                <Button title="Submit" onPress={() => console.log(formData)} />
            )}
            </View>
        </View>
    )
}
