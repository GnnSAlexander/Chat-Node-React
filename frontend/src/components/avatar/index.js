import React from "react"
import "./style.css"

export const Avatar = ({ user }) => {
  const { name, photoUrl } = user
  console.log(name)
  return (
    <div className="avatar">
      <img src={photoUrl} alt={name} />
      <span>{name}</span>
    </div>
  )
}
