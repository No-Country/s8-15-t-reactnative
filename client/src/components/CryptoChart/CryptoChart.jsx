import React from 'react';
import { Text, View } from 'react-native';
import { VictoryAxis, VictoryChart, VictoryLine } from 'victory-native';
import colors from '../../utils/colors';

const CryptoChart = () => {

	const chartData = [
		{ x: '01/02', y: 11.004243 },
		{ x: '01/02', y: 9.00004247 },
		{ x: '01/03', y: 5.00004245 },
		{ x: '01/05', y: 16.00004240 },
		{ x: '01/06', y: 15.00004238 },
		{ x: '01/07', y: 12.00004244 },
		{ x: '01/08', y: 11.00004243 },
	];

	const months =  {x: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']}

	return (
		<View horizontal={true} className='px-4 mt-2'>
			<View className='px-3'>
				<Text className='text-3xl' style={{ fontFamily: 'poppins-semiBold' }}>Gráficos</Text>
			</View>
			<View>
				<VictoryChart>
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
						tickFormat={(tick) =>  tick}
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
							data: { stroke: "#000" },
							parent: { borderWidth: 5 },
						}}
						// categories={months}
						domain={{ y: [0, 50] }}
						data={chartData}
					/>
				</VictoryChart>
			</View>
		</View>
	)
};

export default CryptoChart;
