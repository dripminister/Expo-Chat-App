import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from "react-native"

export default function Button({ title, onPress}){
    return(
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    button: {
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontWeight: "900",
        fontSize: 16,
        color: "#f1f1f1",
        marginLeft: 10
    }
})