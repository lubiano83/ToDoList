/* Titulo */

import { View, Text, StyleSheet } from "react-native";

const Titulo = ({label}) => {
    return (
        <View style={styles.Titulo}>
             <Text style={styles.Titulo__Text}>{label}</Text>
        </View>
    )
}; export default Titulo;

const styles = StyleSheet.create({
    Titulo__Text: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 16
    },
});