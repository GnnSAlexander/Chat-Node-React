import React, { useEffect, useState } from "react"

export default function Characters() {
  //create state to store our book list
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    async function loadCharacters() {
      //fetch the book list
      const request = await fetch("http://localhost:4000/pjs", {
        //use the authorization
        headers: {
          Authorization: "Bearer " + localStorage.getItem("@token"),
        },
      })
      console.log(request)
      const json = await request.json()
      //set the book list on state
      setCharacters(json.pjs)
    }
    //invoke the function
    loadCharacters()
  }, [])

  return (
    <div className="container">
      <h1>Character</h1>
      {/* map the book list to show book name and image */}
      {characters.map((character) => (
        <div key={character.id} className="character">
          <img
            className="image"
            width="250px"
            alt={character.name}
            src={character.image}
          />
          <h3>{character.name}</h3>
        </div>
      ))}
    </div>
  )
}
