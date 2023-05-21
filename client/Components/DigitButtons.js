import { View, Text,StyleSheet, TouchableOpacity } from 'react-native';

export const DigitButtons = ({ handleDigitPress,handleBackspacePress }) => {
    const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '←', '0'];
  
    return (
      <View style={styles.digitContainer}>
        {digits.map((digit) => (
          <TouchableOpacity
            key={digit}
            style={styles.digitButton}
            onPress={() => {
                if (digit === '←') {
                  handleBackspacePress();
                } else {
                  handleDigitPress(digit);
                }
            }}
          >
            <Text style={styles.digitText}>{digit}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
};

const styles = StyleSheet.create({
    digitContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 20,
    },
    digitButton: {
        width: 70,
        height: 70,
        margin: 10,
        borderRadius: 35,
        backgroundColor: '#e0e0e0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    digitText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
})