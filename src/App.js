import React from 'react';
import { View, StyleSheet } from 'react-native';
import LocationInfo from './components/LocationInfo';

const App = () => {
    return (
        <View style={styles.container}>
            <LocationInfo />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
