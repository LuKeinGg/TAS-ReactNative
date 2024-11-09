import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';


const List = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, { id: Date.now().toString(), text: task }]);
            setTask('');
        }
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    // Función para renderizar el botón de eliminación al hacer swipe
    const renderRightActions = (id) => (
        <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTask(id)}>
            <Text style={styles.deleteText}>Eliminar</Text>
        </TouchableOpacity>
    );

    return (
        <GestureHandlerRootView style={styles.container}>
            <Text style={styles.header}>Desliza a la izquierda en una tarea para eliminarla</Text>
            <TextInput
                style={styles.input}
                placeholder="Nueva tarea"
                value={task}
                onChangeText={setTask}
            />
            <Button title="Agregar Tarea" onPress={addTask} />
            <FlatList
                data={tasks}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Swipeable renderRightActions={() => renderRightActions(item.id)}>
                        <View style={styles.taskContainer}>
                            <Text style={styles.taskText}>{item.text}</Text>
                        </View>
                    </Swipeable>
                )}
            />
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        paddingHorizontal: 20,
        flex: 1,
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
    taskContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        minWidth: '100%',
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    taskText: {
        fontSize: 16,
    },
    deleteButton: {
        backgroundColor: '#FF5252',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: '100%',
    },
    deleteText: {
        color: 'white',
        fontSize: 16,
    },

    header: {
        fontSize: 20,
        marginBottom: 10,
    },
});


export default List;