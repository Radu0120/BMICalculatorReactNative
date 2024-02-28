import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, View, Alert } from 'react-native';

const BMICalculator = () => {
  const [height, onChangeHeight] = React.useState(0);
  const [weight, onChangeWeight] = React.useState(0);

  return (
      <View style={styles.container}>
        <Text style={styles.title}>BMI Calculator</Text>
        <TextInput
          autoFocus={true}
          style={styles.input}
        onChangeText={onChangeHeight}
        value={height}
          placeholder="Your height in meters"
        keyboardType="number-pad"
        />
        <TextInput
          style={styles.input}
        onChangeText={onChangeWeight}
        value={weight}
        placeholder="Your weight in kilograms"
        keyboardType="number-pad"
        />
      <View style={styles.button}>
        <Button 
        title="Calculate"
          color="#9fa1e8"
          onPress={() => calculateBMI({height, weight})}
        />
      </View>
        
      </View>
    
  );
};
calculateBMI = ({height, weight}) => {
  let result = weight / (height * height)
  console.log(formatResult(result))
  Alert.alert('Your BMI is:', formatResult(result), [
    { text: 'OK' },
  ]);
}
formatResult = (result) =>{
  return result.toString().substring(0, 5)
}
  
const styles = StyleSheet.create({
  input: {
    height: 40,
    marginHorizontal: 50,
    marginVertical: 10,
    borderWidth: 0,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#9fc5e8',
  },
  button:{
    marginHorizontal: 50,
    borderRadius: 15,
    marginTop: 20
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 8,
    fontSize: 28,
    color: "#ffffff"
  },
});

export default BMICalculator;