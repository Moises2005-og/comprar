import { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"

export function useProducts() {
    
    const [pendingProducts, setPendingProducts] = useState<string[]>([])
    const [purchasedProducts, setPurchasedProducts] = useState<string[]>([]) 
    const [text, setText] = useState<string>("")

    
    const loadPendingProducts = useCallback(async () => {
        try {
            const storedValue = await AsyncStorage.getItem("pendingProducts");
            const list = storedValue ? JSON.parse(storedValue) : [];
            setPendingProducts(list);
        } catch (error) {
            console.error("Failed to load pending products", error);
        }
    }, []);
    
    const loadPurchasedProducts = useCallback(async () => {
        try {
            const storedValue = await AsyncStorage.getItem("purchasedProducts");
            const list = storedValue ? JSON.parse(storedValue) : [];
            setPurchasedProducts(list);
        } catch (error) {
            console.error("Failed to load purchased products", error);
        }
    }, []);
    
    useEffect(() => {
        loadPendingProducts()
    }, [pendingProducts])

    useEffect(() => {
        loadPurchasedProducts()
    }, [purchasedProducts])

    const addPendingProducts = async(item: any) => {
        try {
            const list = [...pendingProducts, item]
            await AsyncStorage.setItem("pendingProducts", JSON.stringify(list)) 
            setPendingProducts(list)
            console.log(pendingProducts)
            setText("")
        } catch (error) {
            console.error("Failed to add pending products", error);
        }
    }

    const addPurchasedProducts = async(product: any) => {
        try {
            const list = [...purchasedProducts, product]
            await AsyncStorage.setItem("purchasedProducts", JSON.stringify(list)) 
            setPurchasedProducts(list)
            console.log(purchasedProducts)
            deletePendingProducts(product)
        } catch (error) {
            console.error("Failed to add purchased products", error);
        }
    }

    const deletePendingProducts = async(product: any) => {
        try {
            const newList = pendingProducts.filter((item: any) => item !== product)
            await AsyncStorage.setItem("pendingProducts", JSON.stringify(newList))
            setPendingProducts(newList)
        } catch (err) {
            console.log("Failed to delete product")
        }
    }

    const deletePurchasedProducts = async(product: any) => {
        try {
            const newList = pendingProducts.filter((item: any) => item !== product)
            await AsyncStorage.setItem("purchasedProducts", JSON.stringify(newList))
            setPendingProducts(newList)
        } catch (err) {
            console.log("Failed to delete product")
        }
    }

    const deleteAll = () => {
        AsyncStorage.clear()
        setPendingProducts([])
        setPurchasedProducts([])
    }

    return {
        addPendingProducts,
        pendingProducts,
        text,
        setText,
        deletePendingProducts,
        deletePurchasedProducts,
        purchasedProducts,
        deleteAll,
        addPurchasedProducts
    }
}