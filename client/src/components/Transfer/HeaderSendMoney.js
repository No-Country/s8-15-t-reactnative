/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback } from 'react'
import {
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
	ActivityIndicator,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo, MaterialIcons } from '@expo/vector-icons'
import FindContacts from './FindContacts'
import { SvgXml } from 'react-native-svg'
import { waveSvg } from '../../../assets/whiteLinesSvg/wave'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import colors from '../../utils/colors'
import { SmallProfilePicture } from '../SmallProfilePicture'

SplashScreen.preventAutoHideAsync()
const HeaderSendMoney = ({ setIsSelected }) => {
	const [value, setValue] = useState('')
	const [svgXml, setSvgXml] = useState('')

	useEffect(() => {
		setSvgXml(waveSvg)
	}, [])

	const [fontsLoaded] = useFonts({
		'poppins-semiBold': require('../../../assets/poppinsFonts/Poppins-SemiBold.ttf'),
	})

	const onLayoutHeaderEnvio = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync()
		}
	}, [fontsLoaded])

	if (!fontsLoaded) {
		return <ActivityIndicator size='large' color={colors.violeta} />
	}

	return (
		<LinearGradient
			colors={['#7029E2', '#55B7FF']}
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 0 }}
			style={{ height: 150, width: '100%' }}
			className='rounded-bl-[36px] rounded-br-[36px] flex-row items-center justify-between p-4 relative z-30'
		>
			<View
				onLayout={onLayoutHeaderEnvio}
				className='w-screen h-full absolute top-[40] overflow-hidden'
			>
				{svgXml !== '' && (
					<SvgXml
						xml={svgXml}
						width='100%'
						height={300}
						className='opacity-50 '
					/>
				)}
			</View>
			<View className='flex flex-row justify-between items-center mb-4 w-full'>
				<TouchableOpacity>
					<MaterialIcons name='notifications-none' size={27} color='white' />
				</TouchableOpacity>
				<Text
					className='text-3xl text-white'
					style={{ fontFamily: 'poppins-semiBold' }}
				>
					Enviar dinero
				</Text>
				<View
					className='flex flex-row justify-center items-center 
				gap-x-7'
				>
					<SmallProfilePicture />
				</View>
			</View>
			<View className='justify-center items-center absolute bottom-[-25] inset-x-0'>
				<TextInput
					className={`w-[328px] h-[56px] bg-white p-5 border-[1px] border-[#CAC4D0] ${
						value === ''
							? 'rounded-[28px]'
							: 'rounded-tl-[28px] rounded-tr-[28px]'
					}`}
					placeholder='Nombre/Cbu/Alias'
					value={value}
					onChangeText={text => setValue(text)}
				/>
				<View className='absolute right-[60] top[50%] z-60 transform -translate-y-[-12]'>
					<Entypo name='magnifying-glass' size={20} color='black' />
				</View>
				<FindContacts
					value={value}
					setIsSelected={setIsSelected}
					setValue={setValue}
				/>
			</View>
		</LinearGradient>
	)
}

export default HeaderSendMoney
