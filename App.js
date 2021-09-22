import React, { useState, useEffect } from 'react';
import {
  Platform,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from 'react-native';
import * as Location from 'expo-location';
import WeatherInfo from './components/weatherInfo.jsx';
import UnitPicker from './components/UnitPicker.jsx';
import WeatherDetails from './components/WeatherDetails.jsx';

export default function App() {
  const [location, setLocation] = useState();
  const [errorMsg, setErrorMsg] = useState();

  const [currentWeather, setCurrentWeather] = useState();
  const [unit, setUnit] = useState('metric');

  const weather_api_key = '9591cf0c41c11778e895bf41465f2704';
  const url = 'https://api.openweathermap.org/data/2.5/weather?';

  const cairo_lat = '38.9637';
  const cairo_long = '35.2433';
  const g_lat = '51';
  const g_long = '09';
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      const { longitude, latitude } = location.coords;

      const weather_url = `${url}lat=${cairo_lat}&lon=${cairo_long}&units=${unit}&appid=${weather_api_key}`;
      try {
        const respons = await fetch(weather_url);
        const weatherData = await respons.json();
        if (respons.ok) {
          setCurrentWeather(weatherData);
        } else {
          setErrorMsg(weatherData.message);
        }
      } catch (err) {
        setErrorMsg(err);
      }
    })();
  }, [unit]);

  if (currentWeather) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />

        <UnitPicker unit={unit} setUnit={setUnit} />
        <WeatherInfo
          currentWeather={currentWeather}
          
        />
        <WeatherDetails
          currentWeather={currentWeather}
          
        />
      </View>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Text>{errorMsg}</Text>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
