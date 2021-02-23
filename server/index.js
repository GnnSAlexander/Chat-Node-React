const express = require("express")
const cors = require("cors")
const authMiddleware = require("./auth-middleware")

const app = express()
app.use(cors())

const pjs = [
  {
    id: 1,
    name: "Goku",
    image:
      "https://media.revistagq.com/photos/5f8959bd54567c4e16ec6a46/master/pass/goku-futbolista.jpg",
  },
  {
    id: 2,
    name: "Krilin",
    image:
      "https://media.vandal.net/i/2880x2160/49072/dragon-ball-fighterz-201812216158_52.jpg",
  },
  {
    id: 3,
    name: "Beerus",
    image:
      "https://static.wikia.nocookie.net/dragonball/images/7/7c/Beerus_DBS_Broly_Artwork.png",
  },
]

app.use("/", authMiddleware)

app.get("/pjs", (request, response) => {
  return response.send({ pjs })
})

app.listen(4000, () => console.log("The server is running at PORT 4000"))
