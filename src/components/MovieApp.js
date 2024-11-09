import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

const MovieApp = () => {
    const [movieName, setMovieName] = useState(''); // Almacena el nombre de la película ingresada
    const [movie, setMovie] = useState(null);       // Almacena los datos de la película obtenida
    const [error, setError] = useState(null);       // Almacena mensajes de error si no se encuentra la película

    const fetchMovie = async () => {
        const apiKey = 'fa36eeda';
        const url = `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.Response === 'True') {
                setMovie(data);
                setError(null);
            } else {
                setError('Película no encontrada');
                setMovie(null);
            }
        } catch (err) {
            setError('Error al buscar la película');
            setMovie(null);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Buscador de Películas</Text>

            <TextInput
                style={styles.input}
                placeholder="Ingrese el nombre de la película"
                value={movieName}
                onChangeText={text => setMovieName(text)}
            />
            <Button title="Buscar Película" onPress={fetchMovie} />

            {error && <Text style={styles.errorText}>{error}</Text>}

            {movie && (
                <View style={styles.movieContainer}>
                    <Image
                        source={{ uri: movie.Poster }}
                        style={styles.poster}
                        resizeMode="contain"
                    />
                    <Text style={styles.title}>{movie.Title}</Text>
                    <Text style={styles.plot}>{movie.Plot}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#888',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    errorText: {
        color: 'red',
        marginTop: 10,
        textAlign: 'center',
    },
    movieContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    poster: {
        width: 200,
        height: 300,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    plot: {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 10,
    },
});

export default MovieApp;
