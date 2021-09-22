import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {colors} from "../colors";
import { FontAwesome5,MaterialCommunityIcons } from '@expo/vector-icons';

export default function WeatherDetails({currentWeather}) {
const {
  main:{feels_like, humidity, pressure},
  wind:{speed}} = currentWeather
  return (
    <View style={styles.weatherDetails}>
      <View style={styles.weatherRow}>
        <View style={styles.weatherbox} >
        <View style={styles.weatherRow}>
         <FontAwesome5 name="temperature-low" size={25} color={colors.PRIMARY} />
        <View style={styles.item} >

          <Text>Feels Like :</Text>
          <Text style={styles.textSecondary}>{feels_like}°</Text>
        </View>
        </View>
        </View>
          
        <View style={styles.weatherbox}>
          
          <View style={styles.weatherRow}>
         <MaterialCommunityIcons name="water" size={30} color={colors.PRIMARY} />
        <View style={styles.item} >

          <Text>Humidity :</Text>
          <Text style={styles.textSecondary}>{humidity}%</Text>
        </View>
        </View>
        </View>
      </View>
      <View style={styles.weatherRow}>
        <View style={styles.weatherbox} >
        <View style={styles.weatherRow}>
         <MaterialCommunityIcons name="speedometer" size={25} color={colors.PRIMARY} />
        <View style={styles.item} >

          <Text>Pressure :</Text>
          <Text style={styles.textSecondary}>{pressure}</Text>
        </View>
        </View>
        </View>
          
        <View style={styles.weatherbox}>
          
          <View style={styles.weatherRow}>
         <MaterialCommunityIcons name="weather-windy" size={30} color={colors.PRIMARY} />
        <View style={styles.item} >

          <Text>Wind Speed :</Text>
          <Text style={styles.textSecondary}>{speed} hpa</Text>
        </View>
        </View>
        </View>
      </View>
    
     
    </View>
  );
}

const styles = StyleSheet.create({
  weatherDetails: {
    marginTop: "auto",

    
    margin: 15
  },
  weatherRow:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  weatherbox:{
    flex: 1,
    padding: 20,
    margin: 3,
     borderWidth: 3,
    borderColor: colors.BORDER,
    borderRadius: 10
  },
  textSecondary:{
    fontSize:15,
    color: colors.SECONDARY,
    fontWeight:"700",
    margin: 2
  },
  item:{
    justifyContent: "flex-end",
    alignItems: "flex-end"
  }
  
});
