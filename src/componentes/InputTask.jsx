/* InputTask */

import { StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";

const InputTask = ({text, setText, editedText, handleUpdated, handleAdd}) => {

    return (
        <>
            <TextInput style={styles.TodoScreen__TextInput} placeholder='Add a Task' value={text} onChangeText={(userText) => setText(userText)} />
            { 
                editedText 
                ? 
                <TouchableOpacity style={styles.TodoScreen__TouchableOpacity} onPress={handleUpdated}>
                    <Text style={styles.TouchableOpacity__Text}>Save</Text>
                </TouchableOpacity>
                :  
                <TouchableOpacity style={styles.TodoScreen__TouchableOpacity} onPress={handleAdd}>
                    <Text style={styles.TouchableOpacity__Text}>Add</Text>
                </TouchableOpacity>
            }
        </>
    )
}; export default InputTask;

const styles = StyleSheet.create({
    // InputTask
    TodoScreen__TextInput: {
        borderWidth: 2,
        borderColor: "#1e90ff", 
        borderRadius: 6,
        paddingVertical: 8, 
        paddingHorizontal: 16,
    },
    TodoScreen__TouchableOpacity: {
        backgroundColor: "#000",
        borderRadius: 6,
        paddingVertical: 8,
        marginVertical: 24,
        alignItems: "center"
    }, 
    TouchableOpacity__Text: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,   
    },
});