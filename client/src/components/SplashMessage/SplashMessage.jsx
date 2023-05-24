import { View, Text, TouchableOpacity } from 'react-native'
import colors from '../../utils/colors'
import Stepper from '../Stepper/Stepper'

const SplashMessage = ({
	title,
	description,
	buttonTitle,
	buttonColor,
	buttonAction,
	activeStep,
}) => {
	return (
		<View
			className='mt-auto items-center  bg-white h-2/4'
			style={{
				borderTopLeftRadius: 20,
				borderTopRightRadius: 20,
				fontFamily: 'poppins-regular',
			}}
		>
			<View className='mt-20 items-center px-11'>
				<Text className='text-2xl' style={{ fontFamily: 'poppins-medium' }}>
					{title}
				</Text>
				<Text
					className='mt-8'
					style={{
						fontFamily: 'poppins-medium',
						fontSize: 17,
						lineHeight: 25.5,
						textAlign: 'center',
						fontWeight: '600',
					}}
				>
					{description}
				</Text>
				<TouchableOpacity
					className='mt-16 rounded-full px-14 py-2.5'
					style={{
						backgroundColor: colors[buttonColor],
						justifyContent: 'center',
						alignItems: 'center',
					}}
					onPress={buttonAction}
				>
					<Text
						style={{
							color: 'white',
							fontFamily: 'poppins-medium',
							fontSize: 18,
							lineHeight: 20,
							textAlign: 'center',
							fontWeight: '600',
						}}
					>
						{buttonTitle}
					</Text>
				</TouchableOpacity>
				<Stepper activeStep={activeStep} />
			</View>
		</View>
	)
}

export default SplashMessage
