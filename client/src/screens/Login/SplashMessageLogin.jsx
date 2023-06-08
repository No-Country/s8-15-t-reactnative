import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import FormularioLogin from './FormularioLogin'
import { useState } from 'react';
import { CustomDialog } from '../../components/CustomDialog/CustomDialog';

// eslint-disable-next-line react/prop-types
const SplashMessageLogin = ({ title, description1,setShowAlertPassword }) => {
	return (
		<View
			className='mt-auto items-center bg-white h-3/4'
			style={{
				borderTopLeftRadius: 20,
				borderTopRightRadius: 20,
			}}
		>
			<SafeAreaView className='w-full'>
				<ScrollView>
					<View className='mt-5 items-center'>
						<Text
							className='text-2xl'
							style={{
								fontFamily: 'poppins-semiBold',
								color: '#383081',
								fontSize: 20,
								lineHeight: 30,
								fontWeight: '600',
								textAlign: 'center',
							}}
						>
							{title}
						</Text>

						<Text
							className='mt-4 text-xl'
							style={{
								fontFamily: 'poppins-regular',
								lineHeight: 24,
								textAlign: 'center',
								color: '#383081',
							}}
						>
							{description1}
						</Text>

						<FormularioLogin setShowAlertPassword={setShowAlertPassword}/>
					</View>
				</ScrollView>
			</SafeAreaView>
		</View>
	)
}

export default SplashMessageLogin
