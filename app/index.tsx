import { BottomList } from "@/components/bottomList";
import { Header } from "@/components/header";
import { Text, View, StyleSheet } from "react-native";

export default function Home() {
    return(
        <View style={styles.container}>
            <Header />
            <BottomList />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#D0D2D8",
        flex: 1,
        paddingTop: 20,
    }
})