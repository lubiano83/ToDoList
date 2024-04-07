/* Task */

import { StyleSheet, View, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Task = ({handleCheck, handleEdit, handleModal, item}) => {

    console.log(handleModal);
 
    return (
        <View style={styles.renderTodos}>
            { !item.isFinished ? <Feather name="square" size={24} color="#fff" onPress={() => handleCheck(item.id)}/> : <AntDesign name="check" size={24} color="#fff" onPress={() => handleCheck(item.id)}/> }
            <Text style={styles.renderTodos__Text}>{item.title}</Text>
            <FontAwesome name="pencil" size={24} color="#fff" onPress={() => handleEdit(item)} />
            <FontAwesome5 name="tools" size={24} color="#fff" onPress={() => handleModal(item)} />
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
        alignItems: "center",
        gap: 12,
        paddingHorizontal: 12,
    },
    renderTodos__Text: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "800",
        flex: 1
    }
});