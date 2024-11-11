import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const CameraPickerComponent = () => {
    const [image, setImage] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const takePhoto = async () => {
        // Esto es para solicitar permisos para acceder a la cámara
        let { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permiso para acceder a la cámara fue denegado.');
            return;
        }

        // Abro la cámara
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            quality: 1,
        });

        console.log("Resultado de la foto:", result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);  // Guardo la URI de la foto tomada
            setErrorMsg(null);  // Limpio el mensaje de error
        } else {
            setErrorMsg('No se tomó ninguna foto.');
        }
    };

    return (
        <View style={styles.container}>
            {errorMsg ? (
                <Text style={styles.errorText}>{errorMsg}</Text>
            ) : (
                <View>
                    <Button title="Tomar Foto" onPress={takePhoto} />
                    {/* Muestro la imagen tomada si existe */}
                    {image ? (
                        <Image source={{ uri: image }} style={styles.image} />
                    ) : (
                        <Text style={styles.placeholderText}>No se ha tomado ninguna foto</Text>
                    )}
                </View>
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
        marginBottom: 10,
    },
    placeholderText: {
        color: 'gray',
        fontSize: 16,
        marginTop: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 20,
        borderRadius: 10,
    },
});

export default CameraPickerComponent;
