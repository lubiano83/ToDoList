// ModalTools.js

import { StyleSheet, Modal, View, Text, Button } from "react-native";

const ModalTools = ({modalVisible, handleCancel, itemSelected, handleDelete}) => {

    return (
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={styles.modalStyles}>
            <View style={styles.modalContainer}>
              <View style={styles.textContainer}>
                <Text>¿Estás seguro de que quieres eliminar?</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textModal}>{itemSelected.title}</Text>
              </View>
              <View style={styles.btnContainer}>
                <Button color='#1e90ff' title="Cancel" onPress={() => handleCancel()}/>
                <Button color='#1e90ff' title="Delete" onPress={() => handleDelete(itemSelected.id)}/>
              </View>
            </View>
          </View>
        </Modal>
    )
}; 

export default ModalTools;

const styles = StyleSheet.create({
    // Modal
    modalStyles: {
        backgroundColor: "#cccccc88",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    modalContainer: {
        backgroundColor: "white",
        width: "80%",
        alignItems: "center",
        gap: 20,
        paddingVertical: 20,
        borderRadius: 10
    },
    textModal: {
        fontWeight: "bold"
    },
    btnContainer: {
        flexDirection: "row",
        gap: 20,
    },
});