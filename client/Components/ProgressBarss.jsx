import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProgressBarss = ({ progress, totalSteps, currentStep }) => {
  const stepStyle = (stepNumber) => {
    if (stepNumber < currentStep) {
      return styles.completedStep;
    } else if (stepNumber === currentStep) {
      return styles.currentStep;
    } else {
      return styles.inactiveStep;
    }
  };

  const renderSteps = () => {
    const steps = [];
    for (let i = 1; i <= totalSteps; i++) {
      steps.push(
        <View key={i} style={styles.stepContainer}>
          <View style={[styles.step, stepStyle(i)]}>
            {i < currentStep && (
              <Ionicons name="checkmark" size={20} color="white" />
            )}
            {i === currentStep && (
              <Text style={styles.stepText}>{i}</Text>
            )}
          </View>
          {i !== totalSteps && <View style={styles.line} />}
        </View>
      );
    }
    return steps;
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>
      <View style={styles.stepsContainer}>{renderSteps()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 10,
    backgroundColor: '#ddd',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#0d6efd',
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  stepContainer: {
    alignItems: 'center',
  },
  step: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  completedStep: {
    backgroundColor: '#0d6efd',
  },
  currentStep: {
    backgroundColor: '#0d6efd',
  },
  inactiveStep: {
    backgroundColor: '#ddd',
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: '#ddd',
    marginHorizontal: 5,
  },
  stepText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProgressBarss;