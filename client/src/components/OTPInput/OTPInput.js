import React, { useRef, useState } from 'react'
import { View, TextInput } from 'react-native'

export const OTPInput = ({ length, disabled, value, onChange }) => {
	const [otpValue, setOtpValue] = useState(value)
	const inputRefs = useRef([])

	const handleChange = (text, index) => {
		const newValue = [...otpValue]
		newValue[index] = text
		setOtpValue(newValue)
		onChange(newValue)

		if (text.length !== 0) {
			return inputRefs.current[index + 1]?.focus()
		}

		return inputRefs.current[index - 1]?.focus()
	}

	const handleBackspace = (event, index) => {
		const { nativeEvent } = event

		if (nativeEvent.key === 'Backspace') {
			handleChange('', index)
		}
	}

	return (
		<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
			{[...Array(length)].map((_, index) => (
				<TextInput
					ref={ref => {
						if (ref && !inputRefs.current.includes(ref)) {
							inputRefs.current = [...inputRefs.current, ref]
						}
					}}
					key={index}
					maxLength={1}
					contextMenuHidden={true}
					selectTextOnFocus={true}
					editable={!disabled}
					style={{
						fontSize: 24,
						textAlign: 'center',
						width: 55,
						height: 55,
						backgroundColor: '#ffffff',
						borderRadius: 10,
						marginLeft: 10,
					}}
					keyboardType='decimal-pad'
					onChangeText={text => handleChange(text, index)}
					onKeyPress={event => handleBackspace(event, index)}
					secureTextEntry={true}
				/>
			))}
		</View>
	)
}
