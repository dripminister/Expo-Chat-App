import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { initializeAuth, getReactNativePersistence } from "firebase/auth"
import { getStorage } from "firebase/storage"
import AsyncStorage from "@react-native-async-storage/async-storage"

const firebaseConfig = {
	//firebase config
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(AsyncStorage),
})
export const storage = getStorage(app)
