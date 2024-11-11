import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

const LocationInfo = () => {
    const [location, setLocation] = useState(null);
    const [address, setAddress] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            // Esto es para solicitar permisos de ubicación al usuario
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permiso para acceder a la ubicación fue denegado.');
                return;
            }

            // Para obtener la ubicación actual
            let currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation);

            // Realizar la geocodificación inversa para obtener la dirección
            let locationAddress = await Location.reverseGeocodeAsync({
                latitude: currentLocation.coords.latitude,
                longitude: currentLocation.coords.longitude,
            });

            // Para guardar la primera dirección obtenida
            if (locationAddress.length > 0) {
                setAddress(locationAddress[0]);
            }
        })();
    }, []);

    return (
        <View style={styles.container}>
            {errorMsg ? (
                <Text style={styles.errorText}>{errorMsg}</Text>
            ) : location ? (
                <View>
                    <Text style={styles.locationText}>Latitud: {location.coords.latitude}</Text>
                    <Text style={styles.locationText}>Longitud: {location.coords.longitude}</Text>
                    {address && (
                        <View style={styles.addressContainer}>
                            <Text style={styles.addressText}>Ciudad: {address.city}</Text>
                            <Text style={styles.addressText}>País: {address.country}</Text>
                        </View>
                    )}
                </View>
            ) : (
                <Text style={styles.loadingText}>Obteniendo ubicación...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    errorText: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center',
    },
    locationText: {
        fontSize: 16,
        marginVertical: 5,
    },
    addressContainer: {
        marginTop: 10,
    },
    addressText: {
        fontSize: 16,
    },
    loadingText: {
        fontSize: 16,
        color: '#888',
    },
});

export default LocationInfo;
