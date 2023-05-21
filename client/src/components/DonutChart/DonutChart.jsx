import { View } from 'react-native';
import { VictoryPie, VictoryLabel } from "victory-native";
import colors from '../../utils/colors';

const DonutChart = () => {

	const data = [
		{ x: '12%', y: 12 },
		{ x: '13%', y: 13 },
		{ x: '25%', y: 25 },
		{ x: '50%', y: 50 },
	];

	const chartSize = 180;

	return <View className='flex items-center'>
		<VictoryPie
			data={data}
			colorScale={[colors.celeste, colors.naranja, colors.lila, colors.verde_claro]}
			labels={({ datum }) => `${datum.x}`}
			labelPlacement='perpendicular'
			innerRadius={80}
			width={chartSize}
			height={chartSize}
			labelComponent={<VictoryLabel verticalAnchor={({ text }) => text.length > 1 ? "start" : "middle"} angle={2}/>}
		/>
	</View>;
};

export default DonutChart;
