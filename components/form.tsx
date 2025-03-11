import { Dispatch, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Input } from "./input";
import { Result } from "./result";

export function Form() {
    const [name, setName] = useState<string>()
    const [price, setPrice] = useState<number>()
    const [increase, setIncrease] = useState<number>()

    const [hasError, setHasError] = useState<boolean>()
    const [hasResult, setHasResult] = useState<boolean>()

    function handleSubmit() {
        if (!name || !price || !increase) {
            setHasError(true)
            return setHasError(true)
        }

        setHasError(false)
        setHasResult(true)
    }

    function handleNumeric(text: string, setter: Dispatch<React.SetStateAction<number | undefined>>) {
        const numericValue = text.replace(/[^0-9]/g, "");
        setter(Number(numericValue));
    }

    return (
        <View style={styles.container}>
            {hasError &&
                <View style={{ backgroundColor: "red", paddingVertical: 8, paddingHorizontal: 16 }}>
                    <Text style={{ color: "#e9f2e7", }}>Some fields are missing</Text>
                </View>
            }
            <Input label="Product name" onChangeText={setName} />
            <Input label="Current price" value={String(price ?? "")} keyboardType="numeric" onChangeText={(text) => handleNumeric(text, setPrice)} />
            <Input label="Price increase" value={String(increase ?? "")} keyboardType="numeric" onChangeText={(text) => handleNumeric(text, setIncrease)} />
            <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={{ textAlign: "center" }}>Calculate</Text>
            </Pressable>
            {hasResult &&
                <Result name={name ?? ""} price={price ?? 0} increase={increase ?? 0} />
            }
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
    button: {
        backgroundColor: "#9bdd90",
        borderRadius: 8,
        paddingVertical: 8,
        color: "#0a1408",
    }
})