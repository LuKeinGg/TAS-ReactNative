import React, { useState } from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';


const ImageGallery = () => {
    const images = [
        { source: require('../../assets/Gatito.jpg'), description: 'Nombre: Simba' + '\n' + 'Edad: 1 año' + '\n' + 'Raza: Siames' + '\n' + 'Descripción: Es un gato muy juguetón y cariñoso' },
        { source: require('../../assets/PerroMascota.jpg'), description: 'Nombre: Rocco' + '\n' + 'Edad: 2 años' + '\n' + 'Raza: Husky Siberiano' + '\n' + 'Descripción: Es un perro muy activo y le encanta jugar' },
        { source: require('../../assets/Conejo.jpg'), description: 'Nombre: Orejas' + '\n' + 'Edad: 6 meses' + '\n' + 'Raza: Conejo enano' + '\n' + 'Descripción: Es un conejo muy tranquilo y le encanta comer zanahorias' },
        { source: require('../../assets/Erizo.jpg'), description: 'Nombre: Quisky' + '\n' + 'Edad: 1 año' + '\n' + 'Raza: Erizo Africano' + '\n' + 'Descripción: Es un erizo muy curioso y le encanta dormir' },
        { source: require('../../assets/Tortuga.jpg'), description: 'Nombre: Rayo' + '\n' + 'Edad: 3 años' + '\n' + 'Raza: Tortuga de orejas rojas' + '\n' + 'Descripción: Es una tortuga muy tranquila y le encanta nadar' },
    ];

    return (
        <ScrollView style={StyleSheet.container}>
            <Text style={styles.tittle}>Galería de mascotas</Text>
            {images.map((item, index) => (
                <View key={index} style={styles.imageContainer}>
                    <Image source={item.source} style={styles.image} />
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            ))}
        </ScrollView>

    );

};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    imageContainer: {
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: 'center',
        padding: 10,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
    },
    description: {
        marginTop: 5,
        fontSize: 16,
        color: '#333',
    },
    tittle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        border: '#444444',
        backgroundColor: '#03DAC6',
        padding: 10,
        borderRadius: 8,
        textAlign: 'center',
    },
});

export default ImageGallery;
