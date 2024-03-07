import React from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import CharacterCard from "./characterCard"

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
return <section>
    <div className="container has-text-centered m-6">
        <div className="title columns is-multiline is-centered m-6">
            <h1>Wecome to Westeros!!</h1>
        </div>
        <div className="columns is-centered m-6">
            <CharacterCard
            key={character.firstName}
            id={character.id}
            firstName={character.firstName}
            lastName={character.lastName}
            fullName={character.fullName}
            image={character.imageUrl}
            title={character.title}
            family={character.family} />
        </div>
        <Link to="/characters">{`Back to Charater List`}</Link>
    </div>
</section>
}

export default CharacterModal