import React from "react"
import { View, TextInput, Text, StyleSheet, Pressable } from "react-native"
import MessageList from "../components/MessageList"
import Icon from "react-native-vector-icons/FontAwesome"

export default function ChatView({
	message,
	setMessage,
	handleSendMessage,
	handleSignOut,
	handleCameraToggle,
	messages
}) {
	return (
		<View>
			<View style={styles.topbar}>
				<Text style={styles.title}>Chat</Text>
				<Pressable
					style={styles.button}
					onPress={handleSignOut}
				>
					<Text style={styles.text}>Logout</Text>
				</Pressable>
			</View>
			<MessageList messages={messages} />
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="Type a message"
					value={message}
					onChangeText={setMessage}
				/>
				<Pressable
					style={styles.button}
					onPress={handleSendMessage}
				>
					<Text style={styles.text}>Send</Text>
				</Pressable>
				<Pressable
					style={styles.button}
					onPress={handleCameraToggle}
				>
					<Icon
						name="camera"
						size={20}
						color="#fff"
					/>
				</Pressable>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	topbar: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#2196F3",
		padding: 10,
		elevation: 3,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		paddingTop: 30,
	},
	title: {
		fontSize: 20,
		color: "#fff",
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
		padding: 5,
		borderTopWidth: 1,
		borderTopColor: "#ddd",
		position: "fixed",
		bottom: 145,
	},
	input: {
		flex: 1,
		height: 50,
		borderColor: "gray",
		borderWidth: 1,
		paddingLeft: 8,
		borderRadius: 5,
		marginRight: 5,
	},
	button: {
		backgroundColor: "#2196F3",
		padding: 10,
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 5, // hinzugefügt, um etwas Abstand zwischen den Buttons zu haben
		marginRight: 5, // hinzugefügt, um etwas Abstand zwischen den Buttons zu haben
	},
	text: {
		color: "#fff",
		fontSize: 16,
	},
})
