import React from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import CharacterCard from "./characterCard"

interface CharacterCard { 
    "id": number
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
const { characterName } = useParams()

React.useEffect(() => {
    async function fetchCharacter() {
        const resp = await fetch(`https://thronesapi.com/api/v2/characters`)
        const data = await resp.json()
        setcharacter(data.filter((item: { firstName: string | undefined }) => {
            return item.firstName === characterName
                    
        }))
        console.log(data)
    }
    fetchCharacter()
}, [])

if (!character) {
    return <p>Character Loading....</p>
}
return <section>
<div className="container">
    <div className="columns is-multiline is-centered m-2">
<h1>Hello Westeros!!</h1>
<Link to="/characters">{`Back to Charater List`}</Link>
<CharacterCard 
key={character.id}
firstName={character.firstName}
lastName={character.lastName}
fullName={character.fullName}
image={character.imageUrl}
title={character.title}
family={character.family} />
    </div>
    </div>
    </section>
}

export default CharacterModal