import Navbar from "./components/Navbar"

import { Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage.tsx"
import SignUpPage from "./pages/SignUpPage.tsx"
import LogInPage from "./pages/LogInPage.tsx"
import ProfilePage from "./pages/ProfilePage.tsx"
import SettingsPage from "./pages/SettingsPage.tsx"
import { useAuthStore } from "./store/useAuthStore.ts"
import { useEffect } from "react"

import { Loader } from "lucide-react"
import { Toaster } from "react-hot-toast"
import { useThemeStore } from "./store/useThemeStore.ts"

const App = () => {
  const { authUser, checkAuth, isCheckingAuth, onlineUsers } = useAuthStore()
  const {theme} = useThemeStore()

  console.log({onlineUsers})

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  console.log(authUser)

  if (isCheckingAuth && !authUser) return (
    <div className="flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin" />
    </div>

  )

  return (
    <div data-theme={theme}>

      <Navbar />

      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/"/>} />
        <Route path="/login" element={!authUser ? <LogInPage /> : <Navigate to="/" />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
        <Route path="/settings" element={<SettingsPage />} />

      </Routes>
      <Toaster/>
    </div>
  )
}

export default App