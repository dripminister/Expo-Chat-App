import React from "react"
import { FlatList, StyleSheet } from "react-native"
import Message from "./Message"

export default function MessageList({ messages }) {
	return (
		<FlatList
			data={messages}
			style={styles.list}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<Message
					author={item.author}
					text={item.text}
					timestamp={item.timestamp}
					image={item.image}
				/> 
			)}
		/>
	)
}


const styles = StyleSheet.create({
	list: {
		marginBottom: 150
	}
})
