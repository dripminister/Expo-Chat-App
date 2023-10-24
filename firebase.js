import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { initializeAuth, getReactNativePersistence } from "firebase/auth"
import { getStorage } from "firebase/storage"
import AsyncStorage from "@react-native-async-storage/async-storage"

const firebaseConfig = {
	apiKey: "AIzaSyDDlB1AUsKDoXeHJxRAIiIDEI0emozhlVo",
	authDomain: "todo-7460d.firebaseapp.com",
	projectId: "todo-7460d",
	storageBucket: "todo-7460d.appspot.com",
	messagingSenderId: "62278498529",
	appId: "1:62278498529:web:b7a4f0266eeacf5cb8dfa0",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(AsyncStorage),
})
export const storage = getStorage(app)