import React from 'react';
import { View, StyleSheet } from 'react-native';
import List from './components/List';

const App = () => {
    return (
        <View style={styles.container}>
            <List />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
        backgroundColor: '#f5f5f5',
    },
});

export default App;
