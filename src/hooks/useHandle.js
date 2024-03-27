/* useHadle */

import { useState } from "react";

export const useHandle = () => {
    
    // Init local states
    const [text, setText] = useState("");
    const [textList, setTextList] = useState([]);
    const [editedText, setEditedText] = useState(null);
    const [check, setCheck] = useState(textList);
    const [modalVisible, setModalVisible] = useState(false);
    const [itemSelected, setItemSelected] = useState({});

    // handleAdd
    const handleAdd = () => {
        if(text == ""){
            return; // early return
        }
        setTextList([...textList, {id: Date.now().toString(), title: text, isFinished: false}]);
        setText(""); 
    }

    // handleDelete
    const handleDelete = (id) => {
        const updatedTextList = textList.filter((text) => text.id !== id)
        setTextList(updatedTextList);
        setModalVisible(false)
    }

    // handleEdit
    const handleEdit = (text) => {
        setEditedText(text)
        setText(text.title)
    }

    // handleUpdated
    const handleUpdated = () => {
        const updatedText = textList.map((item) => {
            if(item.id === editedText.id){
                return {...item, title: text}
            }
            return item
        })
        setTextList(updatedText);
        setEditedText(null);
        setText("");
    }

    // handleCheck
    const handleCheck = (id) => {
        const updatedTextList = textList.map((text) => {
            if (text.id === id) {
                return { ...text, isFinished: !text.isFinished };
            }
            return text;
        });
        setTextList(updatedTextList);
    }

    // handleModal
    const handleModal = (item) => {
        setItemSelected(item);
        setModalVisible(true);
    };

    // handleCancelModal
    const handleCancel = () => {
        setModalVisible(false)
        setItemSelected({})
        console.log(modalVisible)
    }
    
    return {text, textList, editedText, check, modalVisible, itemSelected, setText, handleAdd, handleDelete, handleEdit, handleUpdated, handleCheck, handleModal, handleCancel};
}