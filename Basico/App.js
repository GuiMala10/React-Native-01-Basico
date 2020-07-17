import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import BoasVindas from './components/BoasVindas';
import Calculos from './components/Calculos';

const App = () => {
    return (
        <>
            <StatusBar translucent barStyle="light-content" backgroundColor="#7159c1" />
            <View style={styles.container}>
                <BoasVindas greeting="Bom dia!" />
                <Calculos />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     backgroundColor: '#7159c1',
  },
});

export default App;