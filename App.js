import { StyleSheet } from "react-native"
import React from "react"
import Navigator from "./navigation/index"

export default function App() {
	return (
		<>
			<Navigator />
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
