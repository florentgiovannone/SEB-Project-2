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
  const [char, setChar] = React.useState(null as any);
  const [team, setTeam] = React.useState([] as any);
  const [isModalopen, setIsModalOpen] = React.useState(false as any);

  function getRandomChar() {
    const randomNumber = Math.floor(Math.random() * 52) + 1;
    return randomNumber;
  }

  function keepChar() {
    if (team.length < 6 && char) {
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

  function handleClick() {
    setIsModalOpen(true);
  }

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
              <article className="tile is-child notification is-dark">
                <div className="content">
                  <p className="title">Instructions:</p>
                  <p className="subtitle">
                    In the rich and tumultuous world of Westeros, a dire threat
                    looms over the horizon, casting a shadow colder than winter
                    itself. The White Walkers, beings of ancient legend and
                    nightmares made flesh, have risen from the frozen depths
                    beyond the Wall, aiming to bring an endless night across the
                    Seven Kingdoms. In the face of such unprecedented danger, a
                    mission of utmost importance has been conceived: to assemble
                    a specialized team, comprising six valiant characters from
                    across the diverse and expansive "Game of Thrones" universe.{" "}
                    <br />
                    <br />
                    This select group, brought together not by birthright or
                    allegiance but by purpose and necessity, is tasked with a
                    singular, pivotal goal: to defeat the White Walkers,
                    safeguarding the realm from their icy grasp and ensuring the
                    safety and future of the Seven Kingdoms. Each member, chosen
                    at random by the fates—or in this case, the algorithmic
                    whims of a project—brings unique skills, wisdom, and power
                    to the ensemble, creating a formidable force capable of
                    confronting the darkness that encroaches from beyond the
                    Wall. <br />
                    <br />
                    With stakes higher than the towering peaks of the Eyrie,
                    this team must navigate the complexities of their own
                    diverse backgrounds, alliances, and conflicts, uniting under
                    the common cause of survival and preservation. The mission
                    ahead is fraught with peril, demanding sacrifices and feats
                    of bravery that will be sung about in the songs of bards for
                    ages to come. This is not just a battle for the present but
                    a fight for the very essence of life and light in the world
                    of Westeros. Together, these six characters must forge a
                    path through the darkness, facing creatures of death and
                    desolation, in hopes of bringing forth a dawn that once
                    again lights up the Seven Kingdoms with warmth, peace, and
                    prosperity.
                  </p>
                  <div className="content"></div>
                </div>
              </article>
            </div>
            <div className="container mt-6 centered-content">
              <button className="button is-dark" onClick={handleClick}>
                Start your mission
              </button>
            </div>
          </div>
          <div className="column">
            <div className="container centered-content ">
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
              <button
                className="button is-large is-primary ml-6"
                onClick={keepChar}
              >
                Add to team
              </button>
            </div>
            <div className="container centered-content">
              <p className="title">Your team...</p>
              <div className="columns is-multiline is-one-third  ">
                {team.map((character: any) => {
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
        <div className={isModalopen ? "modal is-active" : "modal"}>
          <div className="modal-background"></div>
          <div className="modal-content">
            <p className="image is-4by3" onClick={() => setIsModalOpen(false)}>
              <img
                src="https://media1.tenor.com/m/qVo1fXeQtTMAAAAd/bornskywalker-jon-snow.gif"
                alt=""
              />
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickTeam;
