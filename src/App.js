import React from 'react';
import { View, StyleSheet } from 'react-native';
import ResponsiveComponent from './components/ResponsiveComponent';

const App = () => {
    return (
        <View style={styles.container}>
            <ResponsiveComponent />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
