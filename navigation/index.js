import React, { useState, useEffect } from "react" // Importiere useState und useEffect
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import LoginScreen from "../screens/LoginScreen"
import RegisterScreen from "../screens/RegisterScreen"
import ChatScreen from "../screens/ChatScreen"
import { auth } from "../firebase"
import { onAuthStateChanged } from "firebase/auth"

const Stack = createStackNavigator()

const AuthStack = () => (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen
			name="Login"
			component={LoginScreen}
		/>
		<Stack.Screen
			name="Register"
			component={RegisterScreen}
		/>
	</Stack.Navigator>
)

const AppStack = () => (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen
			name="Chat"
			component={ChatScreen}
		/>
	</Stack.Navigator>
)

export default () => {
	const [isAuthenticated, setIsAuthenticated] = useState(null)

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setIsAuthenticated(user ? true : false)
		})

		return () => unsubscribe()
	}, [])

	if (isAuthenticated === null) {
		return null
	}

	return (
		<NavigationContainer>
			{isAuthenticated ? <AppStack /> : <AuthStack />}
		</NavigationContainer>
	)
}
