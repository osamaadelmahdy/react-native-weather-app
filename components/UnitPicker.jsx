import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {colors} from "../colors";

import {Picker} from '@react-native-picker/picker';

export default function WeatherInfo({unit, setUnit}) {

  return (
    <View style={styles.container}>
      <Picker selectedValue={unit} onValueChange={(item)=>setUnit(item)} mode="dialog" style={{fontSize:20,border:"none"}} >
        <Picker.Item label="C°" value="metric" />
        <Picker.Item label="F°" value="imperial" />
      </Picker>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  
});
