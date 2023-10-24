import React, { useState, useContext } from "react"
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

export default function LoginScreen({navigation}) {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleLogin = async () => {
		try {
			await signInWithEmailAndPassword(auth, email, password)
		} catch (error) {
			alert(error.message)
		}
	}

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Login</Text>
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
				onPress={handleLogin}
			>
				<Text style={styles.text}>Login</Text>
			</Pressable>
			<Pressable
				style={styles.button}
				onPress={() => navigation.navigate("Register")}
			>
				<Text style={styles.text}>Go to Register</Text>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		padding: 20,
		backgroundColor: "#f9f9f9", // Hintergrundfarbe ändern
	},
	header: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20, // Abstand zwischen der Überschrift und dem nächsten Element
		color: "#333", // Textfarbe
		textAlign: "center", // Text zentrieren
	},
	input: {
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		marginBottom: 12,
		paddingLeft: 8,
		borderRadius: 5, // Ränder abrunden
	},
	button: {
		backgroundColor: "#2196F3",
		padding: 10,
		borderRadius: 5,
		marginTop: 10, // Abstand zwischen den Buttons
		justifyContent: "center",
		alignItems: "center",
		width: "100%", // Damit der Button die volle Breite einnimmt
	},
	text: {
		color: "#fff",
		fontSize: 16,
	},
})
