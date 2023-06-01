import React, { PropsWithChildren, useState } from 'react'
import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
	Button,
	Image,
	ImageBackground,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Accordion from 'react-native-collapsible/Accordion'
import colors from '../../utils/colors'

import { MaterialIcons } from '@expo/vector-icons'

function PreguntasFrecuentes() {
	const [activeSections, setActiveSections] = useState([])
	const sections = [
		{
			title: 'Native development',
			content: (
				<Text style={styles.textSmall}>
					React Native lets you create truly native apps and doesn't compromise
					your users' experiences. It provides a core set of platform agnostic
					native components
				</Text>
			),
		},
		{
			title: 'Fast refresh',
			content: (
				<Text style={styles.textSmall}>
					See your changes as soon as you save. With the power of JavaScript,
					React Native lets you iterate at lightning speed.
				</Text>
			),
		},
		{
			title: 'Cross-platform',
			content: (
				<>
					<Text style={styles.textSmall}>
						React components wrap existing native code and interact with native
						APIs via React's declarative UI paradigm and JavaScript. This
						enables native app development for whole new teams of developers
					</Text>
					<View style={styles.seperator}></View>
					<Button title='See more...' />
				</>
			),
		},
	]

	function renderHeader(section, _, isActive) {
		return (
			<View style={styles.accordHeader}>
				<Text style={styles.accordTitle}>{section.title}</Text>
				{isActive ? (
					<MaterialIcons name='arrow-drop-down' size={27} color='white' />
				) : (
					<MaterialIcons name='arrow-right' size={27} color='white' />
				)}
			</View>
		)
	}

	function renderContent(section, _, isActive) {
		return <View style={styles.accordBody}>{section.content}</View>
	}
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior='automatic'
				style={styles.container}
			>
				<ImageBackground
					source={require('../../../assets/fondoHistorial.webp')}
					resizeMode='cover'
					className='h-[100] object-center'
				>
					<View className='flex py-10 h-56 w-full items-center'>
						<View className='flex flex-row w-full justify-around  items-center px-4'>
							<View className=' w-8 h-8 rounded-full flex items-center justify-center border-[1px] border-gris_background '>
								<Image
									source={require('../../../assets/back_arrow.png')}
								></Image>
							</View>
							<Text className='text-slate-50 font-black text-lg'>
								Pregunts frecuentes
							</Text>
						</View>
					</View>
				</ImageBackground>
				<Text className='text-center mt-8 mb-6'>Estamos para aayudarte</Text>
				<Accordion
					align='bottom'
					sections={sections}
					activeSections={activeSections}
					renderHeader={renderHeader}
					renderContent={renderContent}
					onChange={sections => setActiveSections(sections)}
					sectionContainerStyle={styles.accordContainer}
				/>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	accordContainer: {
		paddingBottom: 4,
	},
	accordHeader: {
		padding: 12,
		backgroundColor: '#666',
		color: '#eee',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	accordTitle: {
		fontSize: 20,
	},
	accordBody: {
		padding: 12,
	},
	textSmall: {
		fontSize: 16,
	},
	seperator: {
		height: 12,
	},
})
export default PreguntasFrecuentes
