import React, {useState, useEffect} from 'react';
import { Alert, StyleSheet, View, FlatList, Dimensions } from 'react-native';
import axios from 'axios';

import Button from './components/Button';
import { API_HOST, GRID_COLUMNS } from './constants';
import { payload } from './payloadMock';

// const data = payload;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 0,
    justifyContent: 'center',
    backgroundColor: '#333333',
  },
});

const renderItem = ({ item, index }) => {
  const {label, event} = item;
  return <Button label={label} event={event} />;
};

const App = () => {
  const [events, setEvents] = useState([]);
  
  useEffect(async () => {
    const result = await axios.get(`${API_HOST}/events`);
    const payload = result.data.events;

    if (payload.length < 8) {
      Array.from(Array(8 - payload.length).keys()).forEach(
        () => payload.push({ label: '', event: '', color: '', description: '' })
      );
    }

    setEvents(payload);
  }, []);

  return (
    <FlatList
      data={events}
      style={styles.container}
      renderItem={renderItem}
      numColumns={GRID_COLUMNS}
    />
  );
};

export default App;
