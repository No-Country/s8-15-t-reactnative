import { StyleSheet } from 'react-native'
import colors from '../../utils/colors'

export const styles = StyleSheet.create({
	basicButtonStyle: {
		backgroundColor: '#fff',
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: colors.gris_medio,
        width: '100%',
	},
	buttonStyle: {
		borderRadius: 100,
	},
	contactCardStyle: {
        height: 70,
		borderRadius: 20,
    },
})
