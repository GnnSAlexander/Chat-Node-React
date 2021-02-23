import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { Auth } from "../../contexts/AuthContext"
import {
  auth,
  firebase,
  googleAuthProvider,
  githubAuthProvider,
} from "../../firebase"
import { Avatar } from "../avatar"

import "./style.css"

export default function Login() {
  const history = useHistory()
  const { user } = useContext(Auth)

  const socialLogin = async (provider) => {
    await auth.signInWithPopup(provider).then(
      async (result) => {
        console.log(result)
        //3 - pick the result and store the token
        const token = await auth?.currentUser?.getIdToken(true)
        //4 - check if have token in the current user
        if (token) {
          //5 - put the token at localStorage (We'll use this to make requests)
          localStorage.setItem("@token", token)
          //6 - navigate user to the book list
          history.push("/book-list")
        }
      },
      function (error) {
        console.log(error)
      }
    )
  }

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.

        history.push("/")
        console.log("Logout")
      })
      .catch((error) => {
        // An error happened.
      })
  }
  return (
    <div className="login">
      {user !== null && <Avatar user={user} />}

      {user === null ? (
        <>
          <h1>Login</h1>
          <button
            onClick={() => socialLogin(googleAuthProvider)}
            className="login-button"
          >
            GOOGLE
          </button>
          <button
            onClick={() => socialLogin(githubAuthProvider)}
            className="login-button"
          >
            GITHUB
          </button>
        </>
      ) : (
        <div>
          <button onClick={logout} className="login-button">
            Logout
          </button>
        </div>
      )}
    </div>
  )
}
