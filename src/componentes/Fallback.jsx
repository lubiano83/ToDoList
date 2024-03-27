/* Fallback */

import { View, Image, StyleSheet, Text } from "react-native"

const Fallback = () => {
    return (
        <View style={styles.Fallback}>
            <Text style={styles.Fallback__Text}>Start Adding Your Task...</Text>
        </View>
    )
}; export default Fallback;

const styles = StyleSheet.create({
    Fallback : {
        alignItems: "center",
        justifyContent: "flex-start",
        height: "50%",
    },
    Fallback__Text: {
        fontSize: 20,
    },
});