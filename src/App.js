import React from 'react';
import { View, StyleSheet } from 'react-native';
import CameraPickerComponent from './components/CameraPickerComponent';

const App = () => {
    return (
        <View style={styles.container}>
            <CameraPickerComponent />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
