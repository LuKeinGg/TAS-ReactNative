import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageChanger from './components/ImageChanger';

const App = () => {
    return (
        <View style={styles.container}>
            <ImageChanger />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
