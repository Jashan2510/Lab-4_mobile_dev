import React from 'react';
import { View, TextInput, Button, StyleSheet} from 'react-native';

const ToDoForm = ({ onAddTask }) => {
    const [taskText, setTaskText] = React.useState('');

    return(  
        <View style={Styles.form}>
            <TextInput
                style={Styles.input}
                placeholder="Enter a new task..."
                onChangeText={setTaskText}
                value={taskText}
            />
            <Button
                title="Add Task"
                onPress={() => {
                    onAddTask(taskText);
                    setTaskText('');
                }}
            />
        </View>
    );
};

const Styles = StyleSheet.create({
    form: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginHorizontal: 20, 
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#4CAF50', 
        color: '#333', 
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 20, 
    },
});

export default ToDoForm;
