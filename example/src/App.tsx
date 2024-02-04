import * as React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PickerNativeView } from 'react-native-picker-native';

export default function App() {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => console.log('Hello from PickerNativeView')}
      >
        <PickerNativeView />
        <Text>CLICK ME</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 300,
    marginTop: 100,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  box: {
    height: 100,
    width: 10,
    left: 100,
    top: 300,
    marginVertical: 20,
  },
});