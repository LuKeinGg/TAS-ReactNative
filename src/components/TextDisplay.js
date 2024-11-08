import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextDisplay = () => {
    const [inputText, setInputText] = useState('');

    return (
        <View style={StyleSheet.container}>
            <TextInput
                style={StyleSheet.input}
                placeholder="Escribe algo..."
                value={inputText}
                onChangeText={setInputText}
            />
            <Text style={styles.displayText}>Texto ingresado: {inputText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20,
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: '#888',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginBottom: 50,
    },
    displayText: {
        marginTop: 20,
        fontSize: 18,
        color: '#03DAC5',
        backgroundColor: '#f3f3f3',
    },
});


export default TextDisplay;
