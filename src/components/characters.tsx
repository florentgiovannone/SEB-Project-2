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
    const [search, setSearch] = React.useState('')

    React.useEffect(() => {
        async function fetchCharacter() {
            const resp = await fetch("https://thronesapi.com/api/v2/characters")
            const data = await resp.json()
            setcharacter(data)

        }
        fetchCharacter()
    }, [])

    function handleChange(e: any) {
        setSearch(e.currentTarget.value)
    }

    function filterCharacter() {
        return character?.filter((character: { fullName: string; }) => {
            return character.fullName.toLowerCase().startsWith(search.toLowerCase())
        })
    }
    console.log(filterCharacter())
    return <section>
        <div className="container">
            <div className="columns is-multiline is-centered m-">
                <div className="container">
                    <input
                        className="input mb-4"
                        placeholder="Search character.."
                        onChange={handleChange}
                        value={search}
                    />
                    <div className="columns is-multiline">
                        {filterCharacter()?.map(character => {
                            return <div key={String(character.id)} className="column is-one-quarter-desktop is-one-third-tablet">
                                <CharacterCard

                                    id={character?.id}
                                    firstName={character?.firstName}
                                    lastName={character?.lastName}
                                    fullName={character?.fullName}
                                    image={character?.imageUrl}
                                    title={character?.title}
                                    family={character?.family}
                                />
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    </section>

}

export default Characters;
