import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { auth } from "../firebase"

export default function Message({ author, text, timestamp, image }) {
	const currentUserEmail = auth?.currentUser?.email

	const date = timestamp?.toDate()
	const formattedDate = date
		? `${date.getHours()}:${
				date.getMinutes() < 10 ? "0" : ""
		  }${date.getMinutes()}`
		: ""

	const isCurrentUser = author === currentUserEmail

	return (
		<View
			style={
				isCurrentUser ? styles.currentUserMessage : styles.otherUserMessage
			}
		>
			<Text style={styles.authorTimestamp}>
				{author} • {formattedDate}
			</Text>
			{text && <Text>{text}</Text>}
			{image && (
				<Image
					source={{ uri: image }}
					style={styles.image}
					resizeMode="cover" // Dies stellt sicher, dass das Bild seine ursprünglichen Proportionen beibehält
				/>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	currentUserMessage: {
		margin: 10,
		padding: 10,
		backgroundColor: "#a0e0a0", // Grün für Nachrichten vom aktuellen Benutzer
		borderRadius: 10,
		borderBottomRightRadius: 0,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
		alignSelf: "flex-end", // Rechtsbündig für Nachrichten vom aktuellen Benutzer
	},
	otherUserMessage: {
		margin: 10,
		padding: 10,
		backgroundColor: "#e0e0e0", // Grau für Nachrichten von anderen Benutzern
		borderRadius: 10,
		borderBottomLeftRadius: 0,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
		alignSelf: "flex-start", // Linksbündig für Nachrichten von anderen Benutzern
	},
	authorTimestamp: {
		fontSize: 12,
		color: "gray",
		marginBottom: 5,
	},
	image: {
		width: 200, // Sie können die Breite und Höhe nach Ihren Wünschen ändern
		height: 200,
		marginTop: 10, // Ein bisschen Abstand von der Textnachricht, falls vorhanden
		borderRadius: 10, // Optional, für abgerundete Ecken
	},
})
