/* Fallback */

import { View, Image, StyleSheet, Text } from "react-native"

const Fallback = ({source}) => {
    return (
        <View style={styles.Fallback}>
            <Image style={styles.Fallback__img} source={source}/>
            <Text style={styles.Fallback__Text}>Start Adding Your Task...</Text>
        </View>
    )
}; export default Fallback;

const styles = StyleSheet.create({
    Fallback : {
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100%",
        width: "100%",
        gap: 20,
    },
    Fallback__img: {
        aspectRatio: 1,
        width: "100%",
    },
    Fallback__Text: {
        fontSize: 20,
    },
});