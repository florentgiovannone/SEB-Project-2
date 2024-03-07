import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import CharacterCard from "./characterCard";

interface CharacterCard {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  image: string;
  title: string;
  family: string;
}

function PickTeam() {
  const [char, setChar] = React.useState(null);
  const [team, setTeam] = React.useState([]);

  function getRandomChar() {
    const randomNumber = Math.floor(Math.random() * 52) + 1;
    return randomNumber;
  }

  function keepChar() {
    if (team.length < 4 && char) {
      const teamClone = structuredClone(team);
      teamClone.push(char);
      setTeam(teamClone);
      fetchChar();
    }
  }

  async function fetchChar() {
    const randomNumber = getRandomChar();
    const resp = await fetch(
      "https://thronesapi.com/api/v2/characters/" + randomNumber
    );
    const data = await resp.json();
    setChar(data);
  }

  React.useEffect(() => {
    fetchChar();
  }, []);

  return (
    <>
      <section className="section is-small">
        <h1 className="has-text-centered title is-1">
          Defeat the white walkers!
        </h1>
      </section>
      <section className="section is-medium">
        <div className="columns">
          <div className="column">
            <div className="tile is-parent">
              <article className="tile is-child notification is-danger">
                <div className="content">
                  <p className="title">Instructions:</p>
                  <p className="subtitle">
                    Assemble a specialized team of four characters from the "Game
                    of Thrones" universe with the singular goal of defeating the
                    White Walkers and ensuring the safety and future of the
                    Seven Kingdoms.
                  </p>
                  <div className="content"></div>
                </div>
              </article>
            </div>
          </div>
          <div className="column">
            <div className="container centered-content">
              <h2 className="title">{char ? `${char.fullName}!` : ""}</h2>
              {char && (
                <CharacterCard
                  key={char.id}
                  id={char.id}
                  firstName={char.firstName}
                  lastName={char.lastName}
                  fullName={char.fullName}
                  image={char.imageUrl}
                  title={char.title}
                  family={char.family}
                />
              )}
            </div>
            <div className="container mb-6 mt-6 centered-buttons ">
              <button onClick={fetchChar} className="button is-large is-dark">
                New Character
              </button>
              <button className="button is-large is-primary ml-6" onClick={keepChar}>
                Add to team
              </button>
            </div>
            <div className="container centered-content">
              <p className="title">Your team...</p>
              <div className="columns is-multiline is-one-third ">
                {team.map((character) => {
                  return (
                    <CharacterCard
                      key={character.firstName}
                      id={character.id}
                      firstName={character.firstName}
                      lastName={character.lastName}
                      fullName={character.fullName}
                      image={character.imageUrl}
                      title={character.title}
                      family={character.family}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickTeam;
