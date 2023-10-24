import React from "react"
import { View, StyleSheet } from "react-native"
import { Camera } from "expo-camera"
import Button from "../components/Button"

export default function CameraView({
	cameraRef,
	takePicture,
	handleCameraToggle,
}) {
	return (
		<Camera
			style={styles.camera}
			ref={cameraRef}
		>
			<View style={styles.cameraButtons}>
				<Button
					title={"Snap"}
					onPress={takePicture}
				/>
				<Button
					title={"X"}
					onPress={handleCameraToggle}
				/>
			</View>
		</Camera>
	)
}

const styles = StyleSheet.create({
	camera: {
		position: "absolute",
		flex: 1,
		width: "100%",
		height: "100%",
		top: 0,
		left: 0,
	},
	cameraButtons: {
		position: "absolute",
		bottom: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		width: "60%",
		alignSelf: "center",
	},
})
