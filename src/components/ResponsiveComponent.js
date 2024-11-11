import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const ResponsiveComponent = () => {
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
    const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);

    useEffect(() => {
        const updateDimensions = ({ window }) => {
            setScreenWidth(window.width);
            setScreenHeight(window.height);
        };

        const subscription = Dimensions.addEventListener('change', updateDimensions);
        return () => subscription?.remove();
    }, []);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: screenWidth > 600 ? 40 : 20,
        },
        title: {
            fontSize: screenWidth > 600 ? 32 : 24,
            fontWeight: 'bold',
            textAlign: 'center',
        },
        subtitle: {
            fontSize: screenWidth > 600 ? 18 : 14,
            color: 'gray',
            textAlign: 'center',
            marginVertical: 10,
        },
        box: {
            width: screenWidth > 600 ? 300 : 150,
            height: screenHeight > 800 ? 200 : 100,
            backgroundColor: 'lightblue',
            marginVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
        },
        boxText: {
            fontSize: screenWidth > 600 ? 20 : 14,
            color: 'white',
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Aplicación Responsive</Text>
            <Text style={styles.subtitle}>
                El contenido se ajusta según el tamaño del dispositivo
            </Text>
            <View style={styles.box}>
                <Text style={styles.boxText}>Caja ajustable</Text>
            </View>
        </View>
    );
};

export default ResponsiveComponent;
