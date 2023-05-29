import React from 'react';
import { View, Text } from 'react-native';

const ProgressBars = ({ progress, totalSteps }) => {
  const stepNumber = Math.floor((progress / totalSteps) * 100);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={{ flex: 1, height: 10, backgroundColor: '#ddd' }}>
        <View
          style={{
            height: '100%',
            width: `${progress}%`,
            backgroundColor: '#0d6efd',
          }}
        />
      </View>
      <Text style={{ marginLeft: 10 }}>{stepNumber}</Text>
    </View>
  );
};

export default ProgressBars;