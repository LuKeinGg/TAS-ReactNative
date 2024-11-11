import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImagePickerComponent = () => {
    const [image, setImage] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const pickImage = async () => {
        //  Esto es para solicitar permisos para acceder al álbum de fotos
        let { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permiso para acceder al álbum de fotos fue denegado.');
            return;
        }

        // Esto es para poder abrir el selector de imágenes
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        // Verifico resultado en consola para depuración
        console.log("Resultado de selección de imagen:", result);

        // Si el usuario seleccionó una imagen, actualizo el estado
        if (!result.canceled) {
            setImage(result.assets[0].uri);
            console.log("URI de la imagen seleccionada:", result.assets[0].uri);
            setErrorMsg(null);
        } else {
            console.log("Selección de imagen cancelada.");
        }
    };

    return (
        <View style={styles.container}>
            {errorMsg ? (
                <Text style={styles.errorText}>{errorMsg}</Text>
            ) : (
                <View>
                    <Button title="Seleccionar Imagen" onPress={pickImage} />
                    {/* Verifico que image tenga una URI válida antes de mostrar el componente Image */}
                    {image ? (
                        <Image source={{ uri: image }} style={styles.image} />
                    ) : (
                        <Text style={styles.placeholderText}>No se ha seleccionado ninguna imagen</Text>
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

export default ImagePickerComponent;
