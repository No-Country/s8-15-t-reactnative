import {
	ScrollView,
	StatusBar,
	View,
	TouchableOpacity,
	Text,
	ActivityIndicator,
	Pressable,
	Modal,
	TextInput,
} from 'react-native'
import { InputSecondModel, SmallProfilePicture } from '../../components'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import Constants from 'expo-constants'
import { useFonts } from 'expo-font'
import { useCallback, useState } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import colors from '../../utils/colors'
import { BackArrow } from '../../../assets/svgMaterialIcons/icons'
import { useForm, Controller } from 'react-hook-form'
import DatePicker from 'react-native-modern-datepicker'
import { Fontisto } from '@expo/vector-icons'

SplashScreen.preventAutoHideAsync()

const PagarFactura = () => {
	const [showModal, setShowModal] = useState(false)
	const [expireDateCalendar, setExpireDateCalendar] = useState('')
	const splitDate = expireDateCalendar.split('/')
	const formatedDate = splitDate[2] + '/' + splitDate[1] + '/' + splitDate[0]

	const navigation = useNavigation()

	const {
		control,
		handleSubmit,
		setValue,
		formState: { errors, dirtyFields, isValid },
	} = useForm({
		defaultValues: {
			company: '',
			clientNumber: '',
			facturaNumber: '',
			expireDate: '',
			amount: '',
			note: '',
		},
	})

	const onSubmit = data => console.log(data)
	const [isFocused, setIsFocused] = useState(false)

	const [fontsLoaded] = useFonts({
		'poppins-semiBold': require('../../../assets/poppinsFonts/Poppins-SemiBold.ttf'),
	})

	const onLayoutPagoFactura = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync()
		}
	}, [fontsLoaded])

	if (!fontsLoaded) {
		return <ActivityIndicator size='large' color={colors.violeta} />
	}

	return (
		<ScrollView onLayout={onLayoutPagoFactura} className='flex bg-white '>
			<LinearGradient
				colors={['#7029E2', '#55B7FF']}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				style={{ width: '100%' }}
			>
				<StatusBar
					translucent
					backgroundColor='transparent'
					barStyle='light-content'
				/>
				<View
					style={{ paddingTop: Constants.statusBarHeight + 27 }}
					className='flex flex-row justify-between items-center px-4 pb-14'
				>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<BackArrow />
					</TouchableOpacity>
					<View className='flex flex-row justify-between items-center gap-x-2 '>
						<Text
							className='text-3xl text-white'
							style={{ fontFamily: 'poppins-semiBold' }}
						>
							Pagar Factura
						</Text>
					</View>
					<SmallProfilePicture />
				</View>
			</LinearGradient>

			<View className='bg-white px-5 rounded-t-3xl top-[-20px]'>
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
							className={`flex flex-row items-center border border-solid bg-white relative top-[-20px] ${
								isFocused || dirtyFields.company
									? 'border-violeta'
									: 'border-gris_texto'
							} rounded-full pl-2 pr-5 py-3 relative`}
						>
							<TextInput
								className={`flex-1 ml-2 text-base ${
									isFocused || dirtyFields.company
										? 'text-violeta'
										: 'text-gris_texto'
								}`}
								placeholder='Empresa/Beneficiario'
								placeholderTextColor={colors.gris_oscuro}
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
							/>
							<View>
								<Fontisto name='search' size={20} color={colors.gris_oscuro} />
							</View>
						</View>
					)}
					name='company'
				/>

				<InputSecondModel
					control={control}
					error={errors.clientNumber}
					placeholder='000 000 00000'
					label='Número de Cliente'
					name='clientNumber'
					isDirty={dirtyFields.clientNumber}
					inputMode='numeric'
					icon='account'
				/>

				<InputSecondModel
					control={control}
					error={errors.facturaNumber}
					placeholder='123 45678798797 5654'
					label='Número de Factura'
					name='facturaNumber'
					isDirty={dirtyFields.facturaNumber}
					inputMode='numeric'
					icon='receip'
				/>
				<TouchableOpacity
					onPress={() => {
						setShowModal(true)
					}}
				>
					<InputSecondModel
						control={control}
						error={errors.expireDate}
						placeholder='DD/MM/AAAA'
						label='Fecha de Vencimiento'
						name='expireDate'
						isDirty={expireDateCalendar.length > 0}
						inputMode='none'
						icon='date'
						readOnly={true}
					/>
				</TouchableOpacity>

				<Modal
					visible={showModal}
					transparent={true}
					style={{ elevation: 5, width: '90%' }}
					animationType='slide'
				>
					<View className='bg-white border border-solid border-gris_border'>
						<DatePicker
							mode='calendar'
							onSelectedChange={date => setExpireDateCalendar(date)}
							options={{
								mainColor: '#6D39E5',
								textHeaderColor: '#6D39E5',
								selectedTextColor: '#fff',
								borderColor: '#cdcdcd',
							}}
						/>
						<Pressable
							className='py-2.5 px-6 '
							onPress={() => {
								setShowModal(false)
								setValue('expireDate', formatedDate)
							}}
						>
							<Text
								className='text-center text-xl'
								style={{ fontFamily: 'poppins-regular' }}
							>
								Cerrar
							</Text>
						</Pressable>
					</View>
				</Modal>

				<InputSecondModel
					control={control}
					error={errors.amount}
					placeholder='$0.00'
					label='Monto a pagar'
					name='amount'
					isDirty={dirtyFields.amount}
					icon='amount'
					inputMode='numeric'
				/>

				<InputSecondModel
					control={control}
					error={errors.note}
					placeholder='Nota para el comprobante'
					label='Nota'
					name='note'
					isDirty={dirtyFields.note}
				/>

				<Text
					className='text-violeta text-center px-5'
					style={{ fontFamily: 'poppins-regular' }}
				>
					Una vez realizado el pago se enviará el comprobante a la empresa
					emisora
				</Text>

				<Pressable
					onPress={handleSubmit(onSubmit)}
					className='bg-naranja py-2.5 px-6 rounded-full w-[60%] my-5 mx-auto'
				>
					<Text
						className='text-white text-center text-xl'
						style={{ fontFamily: 'poppins-semiBold' }}
					>
						{isValid ? 'Pagar' : 'Continuar'}
					</Text>
				</Pressable>
			</View>
		</ScrollView>
	)
}

export default PagarFactura
