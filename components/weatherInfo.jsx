import * as React from 'react';

import {useEffect,useState} from "react"
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import {colors} from "../colors";


export default function WeatherInfo({currentWeather}) {


  
  const {
      main: { temp },
      weather,
      name,
      sys
    } = currentWeather;
    const {icon, main, description} = weather[0]

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`
  return (
    <View style={styles.container}>
    
     
    
      <Text style={styles.textScondaryone}>{name}</Text>
     <Image
      style={styles.logo}
        source={{
          uri: iconUrl,
        }}
      />

      <Text style={styles.textPrimary}>{temp}°</Text>
      <Text style={{color:colors.SECONDARY}} >{description}</Text>
      <Text style={styles.textScondary}>{main}</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 200,
    width: 200,
  },
  textPrimary:{
    fontSize:40,
    color: colors.PRIMARY
  },
  textScondary: {
    fontSize:20,
    color: colors.SECONDARY,
    fontWeight: "500",
    marginTop: 10
  },
  textScondaryone:{
    fontSize:40,
    color: colors.SECONDARY,
    fontWeight: "500",
    marginTop: 10
  }
});
