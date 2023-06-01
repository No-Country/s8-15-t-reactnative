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
import Accordion from 'react-native-collapsible/Accordion'
import colors from '../../utils/colors'

import { MaterialIcons } from '@expo/vector-icons'

function PreguntasFrecuentes() {
	const [activeSections, setActiveSections] = useState([])
	const sections = [
		{
			title: '¿Qué es Payfriend?',
			content: (
				<Text style={styles.textSmall}>
					Payfriend es una billetera virtual que simplificá tus cobros, facilita
					a sus clientes el acceso a promociones y servicios financieros sin
					comisiones ni gastos extras. Además podés comprar y vender
					criptomonedas de forma rápida y simple.
				</Text>
			),
		},
		{
			title: '¿Cómo pago mis servicios?',
			content: (
				<Text style={styles.textSmall}>
					Se ofrece la opción de abonar los servicios mediante el código QR o la
					escritura manual de la factura, brindando a los usuarios la
					posibilidad de seleccionar entre diferentes categorías o servicios de
					pago.
				</Text>
			),
		},
		{
			title: '¿Existe costo de mantenimiento?',
			content: (
				<>
					<Text style={styles.textSmall}>
						Payfriend no cuenta con costo de solicitud o mantenimiento. En
						ningún momento se pedirá que comiences a pagar por nuestros
						servicios.
					</Text>
				</>
			),
		},
		{
			title: '¿Puedo recibir pagos?',
			content: (
				<>
					<Text style={styles.textSmall}>
						Si, debes ingresar en la sección “Cobrar” y crear el link de pago de
						tu producto o servicio. Luego podrás compartirlo con tus clientes.
					</Text>
				</>
			),
		},
		{
			title: '¿Cómo recibo mi tarjeta?',
			content: (
				<>
					<Text style={styles.textSmall}>
						La tarjeta Payfriend será entregada en la puerta de tu casa a través
						de un medio de envío de tu elección. El envío es sin costo.
					</Text>
				</>
			),
		},
	]

	function renderHeader(section, _, isActive) {
		return (
			<View style={styles.accordHeader}>
				<Text style={styles.accordTitle}>{section.title}</Text>
				{isActive ? (
					<MaterialIcons name='arrow-drop-down' size={27} color='black' />
				) : (
					<MaterialIcons name='arrow-right' size={27} color='black' />
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
					underlayColor={colors.violeta_background}
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
		color: '#eee',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderBottomColor: '#56565611',
	},
	accordTitle: {
		fontSize: 14,
	},
	accordBody: {
		padding: 12,
	},
	textSmall: {
		fontSize: 12,
	},
	seperator: {
		height: 12,
	},
})
export default PreguntasFrecuentes
