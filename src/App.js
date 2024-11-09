import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageGallery from './components/ImageGallery';

const App = () => {
    return (
        <View style={styles.container}>
            <ImageGallery />
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
