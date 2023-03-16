import React from 'react';
import { View, StyleSheet } from 'react-native';

const Screen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row1} />
      <View style={styles.row2}>
        <View style={styles.row2Column1} />
        <View style={styles.row2Column2} />
      </View>
      <View style={styles.row3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  row1: {
    flex: 1,
    backgroundColor: 'red',
  },
  row2: {
    flex: 2,
    flexDirection: 'row',
  },
  row2Column1: {
    flex: 1,
    backgroundColor: 'green',
  },
  row2Column2: {
    flex: 1,
    backgroundColor: 'blue',
  },
  row3: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});

export default Screen;
