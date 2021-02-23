import React from "react"
import "./App.css"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Login from "./components/login"
import Characters from "./components/Characters"
import { AuthContext } from "./contexts/AuthContext"
import { HomePage } from "./components/homepage"

export default function App() {
  return (
    <AuthContext>
      <BrowserRouter>
        <Switch>
          <Route path={"/login"}>
            <Login />
          </Route>
          <Route path={"/characters"}>
            <Characters />
          </Route>
          <Route path={"/"}>
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthContext>
  )
}
