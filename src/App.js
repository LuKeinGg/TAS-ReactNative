import React from 'react';
import { View, StyleSheet } from 'react-native';
import MovieApp from './components/MovieApp';

const App = () => {
    return (
        <View style={styles.container}>
            <MovieApp />
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
