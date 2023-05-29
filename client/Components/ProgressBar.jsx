import { View } from 'react-native';

const ProgressBar = ({ progress }) => {
const width = parseFloat(progress);
  return (
    <View style={{ height: 10, backgroundColor: '#ddd' }}>
      <View
        style={{
          height: '100%',
          width: `${width}%`,
          backgroundColor: '#0d6efd',
        }}
      />
    </View>
  );
};

export default ProgressBar;