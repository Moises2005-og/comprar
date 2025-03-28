import { useProducts } from "@/hooks/useProducts";
import { useState } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export function BottomList() {

    const {pendingProducts, deletePendingProducts, purchasedProducts, deletePurchasedProducts, deleteAll, addPurchasedProducts} = useProducts()
    const [tab, setTab] = useState(true)

    return(
        <View style={styles.container}>
            <View style={styles.mainHeader}>
                <View style={styles.products1}>
                    <TouchableOpacity onPress={() => setTab(true)} style={styles.productsAndImage}>
                        <Text>Pendentes</Text>
                        <Image source={require("../../assets/images/wheel.png")}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setTab(false)} style={styles.productsAndImage}>
                        <Text>Comprados</Text>
                        <Image source={require("../../assets/images/purchased.png")}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={deleteAll}>
                        <Text>Limpar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {
            tab ? (
                <ScrollView>
                    <View style={styles.productList}>
                        <View style={styles.borda}></View>
                        {
                            pendingProducts.length !== 0 ? (
                                pendingProducts?.map((item: any) => (
                                    <View key={item} style={styles.pendingProductsContainer}>
                                        <TouchableOpacity onPress={() => addPurchasedProducts(item)} style={{
                                            flexDirection: "row",
                                            gap: 10
                                        }}>
                                            <Image source={require("../../assets/images/wheel.png")}/>
                                            <Text style={styles.pendingProducts}>{item}</Text>
                                        </TouchableOpacity>
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
                </ScrollView>
                ):(
                    <ScrollView>
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
                                        <TouchableOpacity>
                                            <Image source={require("../../assets/images/purchased.png")}/>
                                        </TouchableOpacity>
                                    </View>
                                ))
                            ):(
                                <Text style={styles.noInfo}>Nenhum item aqui</Text>
                            )
                        }
                    </View>
                    </ScrollView>
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