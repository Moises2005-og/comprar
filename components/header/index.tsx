import { useProducts } from "@/hooks/useProducts";
import { useState } from "react";
import { Image, TextInput, View, StyleSheet, TouchableOpacity, Text } from "react-native";

export function Header() {

    const {addPendingProducts, setText, text} = useProducts()

    return(
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require("../../assets/images/logo.png")} style={styles.logoImage}/>
            </View>
            <View style={styles.inputAndButton}>
                <TextInput placeholder="Oque vc precisa comprar" style={styles.input} onChangeText={(text) => setText(text)} value={text}/>
                <TouchableOpacity style={styles.button} onPress={() => addPendingProducts(text)}>
                    <Text style={styles.textButton}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        marginBottom: 30,
        width: 500,
        height: 60,
        justifyContent: "center",
        alignItems: "center"
    },
    logoImage: {
        width: 200,
        height: 50
    },
    inputAndButton: {
        width: "80%",
        marginBottom: 30
    },
    button: {
        backgroundColor: "#2C46B1",
        padding: 15,
        borderRadius: 8,
    },
    textButton: {
        textAlign: "center",
        color: "#FFF",
    },
    input: {
        backgroundColor: "#FFF",
        color: "#74798B",
        marginBottom: 10,
        borderRadius: 8,
        padding: 15,
    }
})