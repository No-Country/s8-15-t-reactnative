import { View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const Stepper = ({ activeStep }) => {
	const renderDot = index => {
		const isActive = index === activeStep

		return (
			<View key={index} style={[styles.dot, isActive && styles.activeDot]}>
				{isActive && (
					<LinearGradient
						colors={['#7029E2', '#55B7FF']}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
						style={styles.gradient}
					/>
				)}
			</View>
		)
	}

	return (
		<View
			className='
        flex
        justify-center
        items-center
        flex-row
        mt-10
    '
		>
			{renderDot(0)}
			{renderDot(1)}
			{renderDot(2)}
		</View>
	)
}

const styles = StyleSheet.create({
	dot: {
		width: 10,
		height: 10,
		borderRadius: 10,
		marginHorizontal: 5,
		backgroundColor: 'rgba(84, 72, 200, 0.2)',
	},
	activeDot: {
		width: 21,
		height: 10,
	},
	gradient: {
		flex: 1,
		borderRadius: 5,
	},
})

export default Stepper
