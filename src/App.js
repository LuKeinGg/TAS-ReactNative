import React from 'react';
import { View, StyleSheet } from 'react-native';
import PlatformSpecificContent from './components/PlatformSpecificContent';

const App = () => {
    return (
        <View style={styles.container}>
            <PlatformSpecificContent />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
