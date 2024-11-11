import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const PlatformSpecificContent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {Platform.OS === 'ios' ? 'Bienvenido, usuario de iOS!' : 'Bienvenido, usuario de Android!'}
            </Text>
            <Text style={styles.description}>
                {Platform.OS === 'ios'
                    ? 'Esta es una vista optimizada para iOS.'
                    : 'Esta es una vista optimizada para Android.'}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: Platform.OS === 'ios' ? '#E0F7FA' : '#FFF8E1', // Fondo diferente para cada SO
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Platform.OS === 'ios' ? '#007AFF' : '#3DDC84', // Color de texto específico para cada SO
        marginBottom: 10,
    },
    description: {
        fontSize: 18,
        textAlign: 'center',
        color: Platform.OS === 'ios' ? '#555' : '#444',
    },
});

export default PlatformSpecificContent;