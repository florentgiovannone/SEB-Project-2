import React from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import CharacterCardModal from "./characterCardModal"

interface CharacterCard { 
    "id": Number
    "firstName": string
    "lastName": string
    "fullName": string,
    "imageUrl": string
    "title": string
    "family": string 
}

type Characters = null | CharacterCard

function CharacterModal(){
const [character, setcharacter] = React.useState<Characters>(null)
const { charactersName } = useParams()
console.log(character)
React.useEffect(() => {
    async function fetchCharacter() {
        const resp = await fetch(`https://thronesapi.com/api/v2/characters/${charactersName}`)
        const data = await resp.json()
        setcharacter(data)
    }
    fetchCharacter()
}, [])


if (!character) {
    return <p>Character Loading....</p>
}
  return <section className="has-text-centered">
<h1 className="title m-6">Welcome to the 7 kingdoms</h1>
            <CharacterCardModal
            key={character.firstName}
            id={character.id}
            firstName={character.firstName}
            lastName={character.lastName}
            fullName={character.fullName}
            image={character.imageUrl}
            title={character.title}
            family={character.family} />
      <Link className="title has-text-black" to="/characters">{`Back to Character List`}</Link>
</section>
}

export default CharacterModal