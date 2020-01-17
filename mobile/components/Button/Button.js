import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';

import axios from 'axios';

import { API_HOST, COLORS, GRID_COLUMNS } from '../../constants';

const colorSample = colors => colors[Math.floor(Math.random() * colors.length)];

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4D243D',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / GRID_COLUMNS,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

const executeAction = event => axios.get(`${API_HOST}/events/${event}`);

const Button = ({ label, event, color, description }) => (
  <TouchableOpacity
    style={{ ...styles.container, backgroundColor: colorSample(COLORS) }}
    onPress={() => executeAction(event)}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

export default Button;
