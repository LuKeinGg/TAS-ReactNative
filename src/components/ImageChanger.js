import React, { useState } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';

const ImageChanger = () => {
    const [imageIndex, setImageIndex] = useState(0);

    const images = [
        require('../../assets/PerroBroma.jpg'),
        require('../../assets/PerroEnojado.jpg')
    ];

    const changeImage = () => {
        setImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    };

    return (
        <View style={styles.container}>
            {/* Para Mostrar la imagen actual */}
            <Image source={images[imageIndex]} style={styles.image} />
            {/* Botón para cambiar la imagen */}
            <Button title="Change Image" onPress={changeImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 400,
        height: 400,
        marginBottom: 20
    }
});

export default ImageChanger;
