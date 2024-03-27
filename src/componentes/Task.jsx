/* Task */

import { StyleSheet, View, Text } from "react-native";
import { IconButton } from 'react-native-paper'; // npm install react-native-paper

const Task = ({handleCheck, handleEdit, handleModal, item}) => {

    console.log(handleModal);
 
    return (
        <View style={styles.renderTodos}>
            <IconButton icon={item.isFinished ? "check" : "square"} iconColor="#fff" onPress={() => handleCheck(item.id)}/>
            <Text style={styles.renderTodos__Text}>{item.title}</Text>
            <IconButton icon="pencil" iconColor='#fff' onPress={() => handleEdit(item)}/>
            <IconButton icon="tools" iconColor='#fff' onPress={() => handleModal(item)}/>
        </View>
    )
}; export default Task;

const styles = StyleSheet.create({
    /* renderTodos */
    renderTodos: {
        backgroundColor: "#1e90ff",
        borderRadius: 6,
        paddingHorizontal: 6,
        paddingVertical: 12,
        marginBottom: 12,
        flexDirection: "row",
        alignItems: "center"
    },
    renderTodos__Text: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "800",
        flex: 1
    }
});