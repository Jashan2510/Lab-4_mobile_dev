import React from 'react';
import { View, ScrollView, Text, Pressable, StyleSheet } from 'react-native';

const ToDoList = ({ taskItems }) => {
    return (
        <ScrollView style={Styles.container}>
            {taskItems.map((task, index) => (
                <Pressable key={index}>
                    <View style={Styles.task}>
                        <Text style={Styles.taskText}>{task}</Text>
                    </View>
                </Pressable>
            ))}
        </ScrollView>
    );
};

const Styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    task: {
        marginVertical: 10,
        padding: 15,
        borderWidth: 2,
        borderColor: '#3498db', 
        borderRadius: 12,
        backgroundColor: '#ecf0f1', 
    },
    taskText: {
        fontSize: 18,
        color: '#333', 
    },
});

export default ToDoList;
