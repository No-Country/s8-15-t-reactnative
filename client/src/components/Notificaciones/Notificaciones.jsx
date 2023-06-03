import { ScrollView, StyleSheet, Text, View, Switch } from 'react-native'
import colors from '../../utils/colors'
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'
const Notificaciones = () => {
	const [isAll, setIsAll] = useState(false)
	const toggleAll = () => setIsAll(previousState => !previousState)
	const [istransfer, setIsTransfer] = useState(false)
	const toggleTransfer = () => setIsTransfer(previousState => !previousState)
	const [isIngresos, setIsIngresos] = useState(false)
	const toggleIngresos = () => setIsIngresos(previousState => !previousState)
	const [isPagos, setIsPagos] = useState(false)
	const togglePagos = () => setIsPagos(previousState => !previousState)
	const [isLinks, setIsLinks] = useState(false)
	const toggleLinks = () => setIsLinks(previousState => !previousState)
	return (
		<ScrollView className='flex pt-10'>
			<View className='flex gap-4 mb-4 flex-row  mr-auto ml-auto w-10/12'>
				<MaterialIcons
					name='notifications-none'
					size={27}
					color={colors.violeta}
				/>
				<Text className='text-center text-violeta text-2xl text-bold'>
					Notificaciones
				</Text>
			</View>
			<View className='flex justify-center items-center w-10/12 mr-auto ml-auto'>
				<View className='flex h-10 flex-row border-b-[1px] border-gris_medio justify-between items-center w-full'>
					<Text className='text-xl'>Pausar todas</Text>
					<Switch
						className='flex justify-center items-center'
						trackColor={{
							false: colors.gris_background,
							true: colors.gris_background,
						}}
						thumbColor={isAll ? colors.naranja_claro : colors.gris_medio}
						onValueChange={toggleAll}
						value={isAll}
					/>
				</View>
			</View>
			<View className='flex justify-center items-center w-10/12 mr-auto ml-auto'>
				<View className='flex h-10 flex-row border-b-[1px] border-gris_medio justify-between items-center w-full'>
					<Text className='text-xl'>Por transferencias</Text>
					<Switch
						className='flex justify-center items-center'
						trackColor={{
							false: colors.gris_background,
							true: colors.gris_background,
						}}
						thumbColor={istransfer ? colors.naranja_claro : colors.gris_medio}
						onValueChange={toggleTransfer}
						value={istransfer}
					/>
				</View>
			</View>
			<View className='flex justify-center items-center w-10/12 mr-auto ml-auto'>
				<View className='flex h-10 flex-row border-b-[1px] border-gris_medio justify-between items-center w-full'>
					<Text className='text-xl'>Por ingresos</Text>
					<Switch
						className='flex justify-center items-center'
						trackColor={{
							false: colors.gris_background,
							true: colors.gris_background,
						}}
						thumbColor={isIngresos ? colors.naranja_claro : colors.gris_medio}
						onValueChange={toggleIngresos}
						value={isIngresos}
					/>
				</View>
				<View className='flex h-10 flex-row border-b-[1px] border-gris_medio justify-between items-center w-full'>
					<Text className='text-xl'>Pagos realizados</Text>
					<Switch
						className='flex justify-center items-center'
						trackColor={{
							false: colors.gris_background,
							true: colors.gris_background,
						}}
						thumbColor={isPagos ? colors.naranja_claro : colors.gris_medio}
						onValueChange={togglePagos}
						value={isPagos}
					/>
				</View>
				<View className='flex h-10 flex-row border-b-[1px] border-gris_medio justify-between items-center w-full'>
					<Text className='text-xl'>Links creados</Text>
					<Switch
						className='flex justify-center items-center'
						trackColor={{
							false: colors.gris_background,
							true: colors.gris_background,
						}}
						thumbColor={isLinks ? colors.naranja_claro : colors.gris_medio}
						onValueChange={toggleLinks}
						value={isLinks}
					/>
				</View>
			</View>
		</ScrollView>
	)
}

export default Notificaciones
