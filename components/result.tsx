import { StyleSheet, Text, View } from "react-native";

export function Result({ name, price, increase }: { name: string, price: number, increase: number }) {
    return (
        <View style={styles.container}>
            <Text style={{
                textAlign: "center",
                color: "#e9f2e7",
            }}>Name: {name}</Text>
            <Text style={{
                textAlign: "center",
                color: "#e9f2e7",

            }}>Current Price: {price}</Text>
            <Text style={{
                textAlign: "center",
                color: "#e9f2e7",

            }}>Increase: {increase}%</Text>
            <Text style={{
                textAlign: "center",

                color: "#e9f2e7",
            }}>Result: {price + (price * increase / 100)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        color: "#e9f2e7",
        justifyContent: 'flex-start',
        gap: 16,
    },
})