import React from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';
import useBLE from './useBLE';

const App = () => {
  const bleManager = useBLE();

  const scanForDevices = () => {
    bleManager.requestPermissions(isGranted => {
      if (isGranted) {
        bleManager.scanForPeripherals();
      }
    });
  };

  return (
    <SafeAreaView>
      <Button title="Scan" onPress={scanForDevices} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
