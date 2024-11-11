import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImagePickerComponent from './components/ImagePickerComponent';

const App = () => {
    return (
        <View style={styles.container}>
            <ImagePickerComponent />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
