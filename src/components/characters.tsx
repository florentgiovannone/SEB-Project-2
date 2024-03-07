import React, { useEffect } from "react"
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

type Characters = null | Array<CharacterCard>

function Characters() {
const [character, setcharacter] = React.useState<Characters>(null)

React.useEffect(() => {
    async function fetchCharacter() {
        const resp = await fetch("https://thronesapi.com/api/v2/characters")
        const data = await resp.json()
        setcharacter(data)
        
    }
    fetchCharacter()
}, [])

return<section>
<div className="container">
    <div className="columns is-multiline is-centered m-">

    {character?.map((character) => {
console.log(character)
        return <CharacterCard 
            key={character?.firstName}
            id={character?.id}
            firstName={character?.firstName}
            lastName={character?.lastName}
            fullName={character?.fullName}
            image={character?.imageUrl}
            title={character?.title}
            family={character?.family}
    />
})}
    </div>
    </div>
</section>

}

export default Characters;
