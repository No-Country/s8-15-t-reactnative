import { View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

const CircleWithCheck = () => {
  return (
    <View>
      <Svg width={80} height={80} viewBox="0 0 200 200">
        <Circle
          cx={100}
          cy={100}
          r={90}
          fill="white"
          stroke="rgba(0, 184, 18, 1)"
          strokeWidth={15}
        />
        <Path
          d="M70 100L100 130L140 80"
          fill="none"
          stroke="rgba(0, 184, 18, 1)"
          strokeWidth={12}
        />
      </Svg>
    </View>
  );
};

export default CircleWithCheck;