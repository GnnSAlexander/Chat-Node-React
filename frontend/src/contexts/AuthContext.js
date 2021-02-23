import React, { useEffect } from "react"
import { auth } from "../firebase"

export const Auth = React.createContext()

export const AuthContext = ({ children }) => {
  const [user, setUser] = React.useState(null)
  const [showChild, setShowChild] = React.useState(false)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
          emailVerified: user.emailVerified,
          uid: user.uid,
        })
      } else {
        setUser(user)
      }

      setShowChild(true)
    })
  }, [])

  if (!showChild) {
    return <h1>Loading...</h1>
  } else {
    return (
      <Auth.Provider
        value={{
          user,
        }}
      >
        {children}
      </Auth.Provider>
    )
  }
}
