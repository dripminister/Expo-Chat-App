import React, { useState } from "react"
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

export default function RegisterScreen({ navigation }) {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleRegister = async () => {
		const auth = getAuth()
		try {
			await createUserWithEmailAndPassword(auth, email, password)
		} catch (error) {
			alert(error.message)
		}
	}

	return (
		<View style={styles.container}>
            <Text style={styles.header}>Register</Text>
			<TextInput
				style={styles.input}
				placeholder="Email"
				value={email}
				onChangeText={setEmail}
				keyboardType="email-address"
				autoCapitalize="none"
			/>
			<TextInput
				style={styles.input}
				placeholder="Password"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
			/>
			<Pressable
				style={styles.button}
				onPress={handleRegister}
			>
				<Text style={styles.text}>Register</Text>
			</Pressable>
			<Pressable
				style={styles.button}
				onPress={() => navigation.navigate("Login")}
			>
				<Text style={styles.text}>Go to Login</Text>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		padding: 20,
		backgroundColor: "#f9f9f9",
	},
	header: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20, 
		color: "#333",
		textAlign: "center",
	},
	input: {
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		marginBottom: 12,
		paddingLeft: 8,
		borderRadius: 5,
	},
	button: {
		backgroundColor: "#2196F3",
		padding: 10,
		borderRadius: 5,
		marginTop: 10,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},
	text: {
		color: "#fff",
		fontSize: 16,
	},
})

