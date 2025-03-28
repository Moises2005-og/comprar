import { useProducts } from "@/hooks/useProducts";
import { useState } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

export function BottomList() {

    const {pendingProducts, deletePendingProducts, purchasedProducts, deletePurchasedProducts, deleteAll, addPurchasedProducts} = useProducts()
    const [tab, setTab] = useState(true)

    return(
        <View style={styles.container}>
            <View style={styles.mainHeader}>
                <View style={styles.products1}>
                    <View style={styles.productsAndImage}>
                        <TouchableOpacity onPress={() => setTab(true)}>
                            <Text>Pendentes</Text>
                        </TouchableOpacity>
                        <Image source={require("../../assets/images/wheel.png")}/>
                    </View>

                    <View style={styles.productsAndImage}>
                        <TouchableOpacity onPress={() => setTab(false)}>
                            <Text>Comprados</Text>
                        </TouchableOpacity>
                        <Image source={require("../../assets/images/purchased.png")}/>
                    </View>

                </View>
                <View>
                    <TouchableOpacity onPress={deleteAll}>
                        <Text>Limpar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {
            tab ? (
                <View style={styles.productList}>
                    <View style={styles.borda}></View>
                    {
                        pendingProducts.length !== 0 ? (
                            pendingProducts?.map((item: any) => (
                                <View key={item} style={styles.pendingProductsContainer}>
                                    <View style={{
                                        flexDirection: "row",
                                        gap: 10
                                    }}>
                                        <Image source={require("../../assets/images/wheel.png")}/>
                                        <TouchableOpacity onPress={() => addPurchasedProducts(item)}>
                                            <Text style={styles.pendingProducts}>{item}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity onPress={() => deletePendingProducts(item)}>
                                        <Image source={require("../../assets/images/trash.png")}/>
                                    </TouchableOpacity>
                                </View>
                            ))
                        ):(
                            <Text style={styles.noInfo}>Nenhum item aqui</Text>
                        )
                    }
                </View>
                ):(
                    <View style={styles.productList}>
                    <View style={styles.borda}></View>
                    {
                        purchasedProducts.length !== 0 ? (
                            purchasedProducts?.map((item: any) => (
                                <View key={item} style={styles.pendingProductsContainer}>
                                    <View style={{
                                        flexDirection: "row",
                                        gap: 10
                                    }}>
                                        <Image source={require("../../assets/images/wheel.png")}/>
                                        <Text style={styles.pendingProducts}>{item}</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => deletePurchasedProducts(item)}>
                                        <Image source={require("../../assets/images/purchased.png")}/>
                                    </TouchableOpacity>
                                </View>
                            ))
                        ):(
                            <Text style={styles.noInfo}>Nenhum item aqui</Text>
                        )
                    }
                </View>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    headerProducts: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    products1: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    productsAndImage: {
        alignItems: "center",
        flexDirection: "row-reverse",
        gap: 10
    },
    mainHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 20,
        marginBottom: 5
    },
    productList: {
        paddingLeft: 24,
        paddingRight: 24,
    },
    noInfo: {
        marginTop: 20,
        textAlign: "center",
        color: "#828282"
    },
    borda: {
        borderTopColor: "#828282",
        borderTopWidth: 1,
        marginBottom: 10
    },
    pendingProducts: {
        marginBottom: 10,
    },
    pendingProductsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "#828282",
        borderBottomWidth: 1,
        paddingBottom: 10,
        paddingTop: 5
    }
})