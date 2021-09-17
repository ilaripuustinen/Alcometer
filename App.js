import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [bottle, setBottle] = useState(0);
  const [gender, setGender] = useState('male');
  const [time, setTime] = useState(0);
  const [promilles, setPromilles] = useState(0);

  const bottles = Array();
  bottles.push({ label: '1', value: 1 });
  bottles.push({ label: '2', value: 2 });
  bottles.push({ label: '3', value: 3 });
  bottles.push({ label: '4', value: 4 });
  bottles.push({ label: '5', value: 5 });
  bottles.push({ label: '6', value: 6 });

  const hours = Array();
  hours.push({ label: '1', value: 1 });
  hours.push({ label: '2', value: 2 });
  hours.push({ label: '3', value: 3 });
  hours.push({ label: '4', value: 4 });
  hours.push({ label: '5', value: 5 });
  hours.push({ label: '6', value: 6 });
  hours.push({ label: '7', value: 7 });
  hours.push({ label: '8', value: 8 });
  hours.push({ label: '9', value: 9 });
  hours.push({ label: '10', value: 10 });

  const genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ]

  function calculate() {
    const litres = bottle * 0.33;
    const grams = litres * 8 *4.5;
    const burning = weight / 10;
    const gramsLeft = grams - burning * time;
    const multiplier = gender === 'male' ? 0.7 : 0.6;
    const result = gramsLeft / (weight * multiplier);

    setPromilles(result);
  }

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text>Weight</Text>
        <TextInput
          styles={styles.input}
          onChangeText={text => setWeight(parseInt(text))}
          placeholder="in kilograms"
          keyboardType='numeric'>
        </TextInput>
      </View>

      <View style={styles.field}>
        <Text> Bottles</Text>
        <Picker
          onValueChange={(itemValue) => setBottle(parseInt(itemValue))}
          selectedValue={bottle}
        >
          {bottles.map((bottle,index) =>(
            <Picker.Item key={index} label={bottle.label} value={bottle.value}/>
          ))
          }
        </Picker>
      </View>

      <View style={styles.field}>
        <Text> Time</Text>
        <Picker
          onValueChange={(itemValue) => setTime(parseInt(itemValue))}
          selectedValue={time}
        >
          {hours.map((time,index) =>(
            <Picker.Item key={index} label={time.label} value={time.value}/>
          ))
          }
        </Picker>
      </View>

      <View style={styles.field}>
      <Text>Gender</Text>
      <RadioForm
      style={styles.radio}
      buttonSize = {10}
      radio_props={genders}
      initial={0}
      onPress={(value) => {setGender(value)}}
      />
      <Text>Promilles</Text>
      <Text>{promilles.toFixed(2)}</Text>
      </View>

      <Button onPress={calculate} title="Calculate"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
  },
  field: {
    margin: 10
  },
  input: {
    marginLeft: 10
  },
  radio: {
    marginTop: 10,
    marginBottom: 10
  }
});

