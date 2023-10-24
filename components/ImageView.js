import React from "react"
import { View, Image, StyleSheet } from "react-native"
import Button from "../components/Button"

export default function ImageView({ image, deleteImage, uploadImage }) {
	return (
		<View style={styles.imageContainer}>
			<Image
				source={{ uri: image }}
				style={styles.image}
			/>
			<View style={styles.imageButtons}>
				<Button
					title={"Delete"}
					onPress={deleteImage}
				/>
				<Button
					title={"Upload"}
					onPress={uploadImage}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	imageContainer: {
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
	image: {
		width: "100%",
		height: "100%",
	},
	imageButtons: {
		position: "absolute",
		bottom: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		width: "60%",
	},
})
