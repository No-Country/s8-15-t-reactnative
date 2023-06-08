import { useState } from 'react'
import { TextInput, View } from 'react-native'
import colors from '../../utils/colors'

// eslint-disable-next-line react/prop-types
const InputsBasic = ({icon, placeholder, inputMode = 'text', onChangeText, value, secureTextEntry=false}) => {
	const [isFocused, setIsFocused] = useState(false)

	return (
		<View
			style={{
				gap: 10,
				borderColor: isFocused ? colors.violeta : colors.gris_medio,
			}}
			className='flex flex-row items-center px-2 py-4 border border-solid rounded-full mt-5'
		>
			<View className='ml-2'>
				{icon}
			</View>
			<TextInput
				placeholder={placeholder}
				placeholderTextColor={isFocused ? colors.violeta : colors.gris_medio}
				keyboardType='default'
				inputMode={inputMode}
				secureTextEntry={secureTextEntry}
				onChangeText={onChangeText}
				value={value}
				className='flex-1 text-xl text-violeta'
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
		</View>
	)
}

export default InputsBasic
