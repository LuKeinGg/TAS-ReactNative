import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextDisplay from './components/TextDisplay';

const App = () => {
    return (
        <View style={styles.container}>
            <TextDisplay />
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
