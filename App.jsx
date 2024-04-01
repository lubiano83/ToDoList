/* App */

import { View, StyleSheet, FlatList } from 'react-native';
import Fallback from "./src/componentes/Fallback";
import { useHandle } from './/src/hooks/useHandle';
import Titulo from './src/componentes/Titulo';
import ModalTools from './src/componentes/ModalTools';
import Task from './src/componentes/Task';
import InputTask from './src/componentes/InputTask';


export default function App() {

    const { text, textList, editedText, modalVisible, itemSelected, setText, handleAdd, handleDelete, handleEdit, handleUpdated, handleCheck, handleModal, handleCancel } = useHandle();

    // Render ToDoList
    const renderTodos = ({item}) => <Task handleCheck={handleCheck} handleEdit={handleEdit} handleAdd={handleAdd} item={item} handleModal={handleModal}/>

    return (
        <View style={styles.AppContainer}>
            <Titulo label="ToDoList" />
            <InputTask text={text} setText={setText} editedText={editedText} handleUpdated={handleUpdated} handleAdd={handleAdd} />
            <ModalTools modalVisible={modalVisible} handleCancel={handleCancel} handleDelete={handleDelete} itemSelected={itemSelected} />
            <FlatList data={textList} renderItem={renderTodos} />
            { textList.length <= 0 && <Fallback source={require("./src/img/todolist.webp")}/> }
        </View>
    );
}

const styles = StyleSheet.create({
    
    /* AppContainer */
    AppContainer: {
        marginTop: 50,
        marginHorizontal: 16,
        backgroundColor: "#fff", 
        height: "100%"
    },
});
