import React from 'react';
import { Text, View } from 'react-native';
import { VictoryAxis, VictoryChart, VictoryLabel, VictoryLine, VictoryTooltip, VictoryVoronoiContainer } from 'victory-native';
import colors from '../../utils/colors';
import { useSelector } from 'react-redux';

const CryptoChart = () => {

	const chartData = useSelector(state => state.myCryptoData.chartData)

	return (
		<View horizontal={true} className='px-4 mt-2'>
			<View className='px-3'>
				<Text className='text-3xl' style={{ fontFamily: 'poppins-semiBold' }}>Gráficos</Text>
			</View>
			<View>
				<VictoryChart
					events={[{
						target: 'parent',
						eventHandlers: {
							onTouchEnd: () => { },
						},
					},
					]}
					containerComponent={
						<VictoryVoronoiContainer voronoiDimension="x"
							labels={({ datum }) => `US$${datum.label}`}
							labelComponent={<VictoryTooltip
							
								active={false}
								flyoutPadding={({ text }) =>
									text.length > 1
										? 0
										: { top: 5, bottom: 5, left: 20, right: 20 }
								}
								pointerLength={5}
								cornerRadius={4}
								flyoutStyle={{ fill: colors.violeta, strokeWidth: 0 }}
								style={{ fill: '#fff', fontWeight: 'bold', fontFamily: 'poppins-semiBold' }} />}
						/>
					}
				>
					<VictoryAxis
						dependentAxis
						tickFormat={(num) => `$${num}`}
						style={{
							axis: {
								stroke: 'white'
							},
							tickLabels: {
								fill: colors.gris_medio,
								fontWeight: 'bold'
							},
							grid: {
								stroke: colors.gris_medio,
								strokeDasharray: '2',
							}
						}}
					/>
					<VictoryAxis
						tickFormat={(tick) => tick}
						style={{
							axis: {
								stroke: colors.gris_medio,
								strokeDasharray: '2',

							},
							tickLabels: {
								fill: colors.gris_medio,
								fontWeight: 'bold'

							},
							grid: {
								stroke: 'white',
							},

						}}
					/>
					<VictoryLine
						style={{
							data: { stroke: "#000", strokeWidth: 4 },
							parent: { borderWidth: 5 },
						}}
						// minDomain={{ y: 0 }}
						data={chartData}
						labelComponent={<VictoryLabel activateData={false} style={{ opacity: 0 }} />}
					/>
				</VictoryChart>
			</View>
		</View>
	)
};

export default CryptoChart;
