/* eslint-disable react/prop-types */
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import colors from '../../utils/colors'
import { Controller } from 'react-hook-form'
import { useState } from 'react'
import { MoneyIcon, Receipe } from '../../../assets/svgMaterialIcons/icons'

const InputSecondModel = ({
	label,
	name,
	placeholder,
	icon,
	readOnly = false,
	inputMode = 'none',
	control,
	error,
	isDirty,
}) => {
	const [isFocused, setIsFocused] = useState(false)

	const returnIcon = () => {
		switch (icon) {
			case 'account':
				return (
					<MaterialCommunityIcons
						name='account-circle-outline'
						size={24}
						color={colors.gris_texto}
					/>
				)
			case 'receip':
				return <Receipe size={24} color={colors.gris_texto} />
			case 'date':
				return (
					<MaterialCommunityIcons
						name='calendar-month-outline'
						size={24}
						color={colors.gris_texto}
					/>
				)

			case 'amount':
				return <MoneyIcon size={24} color={colors.gris_texto} />

			default:
				return ''
		}
	}

	return (
		<View className='mb-5'>
			<Controller
				control={control}
				rules={{
					required: {
						value: true,
						message: 'Campo requerido',
					},
				}}
				render={({ field: { onChange, onBlur, value, ref } }) => (
					<View
						className={`flex flex-row items-center border border-solid ${
							isFocused || isDirty ? 'border-violeta' : 'border-gris_texto'
						} rounded-full p-3 relative`}
					>
						<Text
							className={`absolute bg-white px-1 left-[5%] top-[-30%] ${
								isFocused || isDirty ? 'text-violeta' : 'text-gris_texto'
							}`}
						>
							{label}
						</Text>
						{returnIcon()}
						<TextInput
							className={`flex-1 ml-2 text-base ${
								isFocused || isDirty ? 'text-violeta' : 'text-gris_texto'
							}`}
							placeholder={placeholder}
							onBlur={() => {
								onBlur()
								setIsFocused(false)
							}}
							onFocus={() => {
								setIsFocused(true)
							}}
							onChangeText={onChange}
							value={value}
							ref={ref}
							inputMode={inputMode}
							readOnly={readOnly}
						/>
					</View>
				)}
				name={name}
			/>
			{error?.message && <Text className='text-rojo'>{error.message}</Text>}
		</View>
	)
}

export default InputSecondModel
