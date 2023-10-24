import React, { useState, useEffect, useRef } from "react"
import { View, StyleSheet } from "react-native"
import { collection, addDoc, onSnapshot, Timestamp, query, orderBy } from "firebase/firestore"
import { db, auth, storage } from "../firebase"
import { signOut } from "firebase/auth"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { Camera, CameraType } from "expo-camera"
import ChatView from "../components/ChatView"
import CameraView from "../components/CameraView"
import ImageView from "../components/ImageView"

export default function ChatScreen() {
	const [message, setMessage] = useState("")
	const [messages, setMessages] = useState([])
	const [image, setImage] = useState(null)
	const [type, setType] = useState(Camera.Constants.Type.back)
	const [flash, setFlash] = useState(Camera.Constants.FlashMode.off)
	const cameraRef = useRef(null)
	const [useCamera, setUseCamera] = useState(false)
	const user = auth?.currentUser?.email
	const [status, requestPermission] = Camera.useCameraPermissions()

	useEffect(() => {
		const messagesCollection = collection(db, "messages")
		const orderedCollection = query(
			messagesCollection,
			orderBy("timestamp", "asc")
		)
		const unsubscribe = onSnapshot(orderedCollection, (snapshot) => {
			const newMessages = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}))
			setMessages(newMessages)
		})

		return () => unsubscribe()
	}, [])

	const deleteImage = () => {
		setImage(null)
		setUseCamera(false)
	}

const uploadImage = async () => {
	try {
		console.log("Uploading image...")
		const response = await fetch(image)

		const blob = await response.blob()

		const imageRef = ref(storage, "images/" + new Date().toISOString())

		await uploadBytes(imageRef, blob)

		const url = await getDownloadURL(imageRef)

		await addDoc(collection(db, "messages"), {
			image: url,
			timestamp: Timestamp.now(),
			author: auth.currentUser.email,
		})
		setImage(null)
		setUseCamera(false)

		console.log("Image uploaded and added to the database")
	} catch (e) {
		console.error("Upload or database insert failed:", e)
	}
}


	const handleSendMessage = async () => {
		if (message && user) {
			await addDoc(collection(db, "messages"), {
				text: message,
				timestamp: Timestamp.now(),
				author: user,
			})
			setMessage("")
		}
	}

	const handleSignOut = async () => {
		await signOut(auth)
	}

	const takePicture = async () => {
		if (cameraRef) {
			try {
				const data = await cameraRef.current.takePictureAsync()
				setImage(data.uri)
			} catch (e) {
				console.log(e.message)
			}
		}
	}

	const handleCameraToggle = () => {
		setUseCamera((prev) => !prev)
	}

	return (
		<View style={styles.container}>
			{image ? (
				<ImageView
					image={image}
					deleteImage={deleteImage}
					uploadImage={uploadImage}
				/>
			) : !useCamera ? (
				<ChatView
					message={message}
					setMessage={setMessage}
					handleSendMessage={handleSendMessage}
					handleSignOut={handleSignOut}
					handleCameraToggle={handleCameraToggle}
					messages={messages}
				/>
			) : (
				<CameraView
					cameraRef={cameraRef}
					takePicture={takePicture}
					handleCameraToggle={handleCameraToggle}
				/>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f0f0f0",
	},
})
