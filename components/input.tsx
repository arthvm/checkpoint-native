import { useState } from "react";
import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";

type InputProps = TextInputProps & {
    label: string
}

export function Input({ label, ...props }: InputProps) {
    const [isFocused, setIsFocused] = useState<boolean>()

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={[styles.input, isFocused && { borderBottomColor: "#50e439" }]} {...props} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        gap: 6,
        justifyContent: "flex-start",
    },
    label: {
        color: "#e9f2e7",
    },
    input: {
        borderWidth: 0,
        borderBottomColor: "#9bdd90",
        borderBottomWidth: 1,
        paddingVertical: 6,
        fontSize: 16,
        color: "#e9f2e7",
    }
})