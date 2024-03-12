# Project 2 - Game of Thrones character React app

## Table of contents

- [Description](#description)
- [Deployement](#deployement)
- [Timeframe & Working Team](#timeframe--working-team)
    - [Characters page](#characters)
    - [To battle page](#to-battle)
    - [Sign-in  page](#sign-in)
    - [Single character page](#character)
- [Breif](#breif)
- [Planning](#planning)
- [Build Code Process](#build-code-process)
    - [CharacterModal Component](#charactermodal-component)
    - [Characters Component (with API Integration and State Management)](#characters-component-with-api-integration-and-state-management)
- [Wins](#wins)
- [Key Learning/Takeway ](#key-learningtakeaway)
- [Bugs](#Bugs)
- [Future Improvements](#future-improvements)


## Description

We have developped a React app using a Game of thrones API. We wanted to display an array of technique learned during class. This app contain the following features:

1. Fetching a public API
2. Mapping content of API in a dedicated page
3. Creating routes for each character (each character have it's own page)
4. Front end only Sign in page
5. Team building page to go and defeat the white walkers

## Deployement
We have use Netify to deploy our app

[Link to the APP](https://majestic-pegasus-01f742.netlify.app/)

1. Clone repository
2. Navigate to the project directory
3. Run `npm i`
4. Run `npm run dev` - This should then open a localhost page in your browser

## Timeframe & Working Team 
This was a hack-a-thon (1.5 day) style project to be worked as a team of two. My pair was Conor Hamilton.
We worked as partner programing style: 
- We meet every 4 hours to discussed what would need to be done and split the work load evently 
- We then made sure to be available in case if we needed to reach out to each other 
- For the last day we worked as a driver navigator style for the small details amd deployment 

Technologie used
Frontend app using React.js to use the builder interface using a router on the main app
Hybrid CSS using Bulma as a framework  and some custom CSS
Game of thrones API as information 

### Characters

![Characters](./assets/images/Screenshot%202024-03-11%20190218.png)

### To Battle

![To Battle](./assets/images/Screenshot%202024-03-11%20190522.png)

### Sign In

![Sign in](./assets/images/Screenshot%202024-03-11%20190700.png)

### Character

![Character Info](./assets/images/Screenshot%202024-03-11%20191536.png)

## Breif 
The objective of this project was to build a React application using whta we learned during our classes lessons.
This had to included APi fetching, Routing and mapping onl secting whta was needed from the API.
The document structure had to use Different component using router and routes on the main app


## Planning 
Before starting we planned using wireframing 
![Wireframe](./assets/images/Screenshot%202024-03-06%20at%2015.34.20.png)

We also had thourough sudo coding prior dividing tasks

see document structure below

```plaintext
|--public
|   |--_redirect
|--src
|   |--assets
|   |    |--images
|   |--components
|   |      |--characterCard.tsx
|   |      |--characterCardModal.tsx
|   |      |--characters.tsx
|   |      |--footer.tsx
|   |      |--home.tsx
|   |      |--nav.tsx
|   |      |--pickTeam.tsx
|   |      |--sign-in.tsx
|   |--styles
|   |    |--main.scss
|   |--App.tsx
|   |--index.d.ts
|   |--main.tsx
|   |--README.MD

```

## Build Code Process

### CharacterModal Component

```jsx
function CharacterModal({ character, onClose }) {
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
        <p className="title">{character.fullName}</p>
        <figure className="image">
          <img src={character.image} alt={character.fullName} />
        </figure>
        <p>{character.description}</p>
      </div>
      <button className="modal-close is-large" onClick={onClose}></button>
    </div>
  );
}
```

### Characters Component (with API Integration and State Management)

```jsx
function Characters() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch('https://thronesapi.com/api/v2/Characters');
      const data = await response.json();
      setCharacters(data);
      setIsLoading(false);
    };

    fetchCharacters();
  }, []);

  return (
    <div className="characters-container">
      {isLoading ? (
        <p>Loading characters...</p>
      ) : (
        characters.map(character => (
          <CharacterCard
            key={character.id}
            id={character.id}
            fullName={character.fullName}
            image={character.imageUrl}
          />
        ))
      )}
    </div>
  );
}
```

Conor and I initiated the project by setting up the React framework and structuring the components. Highlights of our collaboration include:

- CharacterCard: A component for displaying character cards.
- CharacterModal: A modal component for detailed character information.
- Characters: The main component allowing users to search and view characters.
- API Integration: Utilized `fetch` to retrieve character data from ThronesAPI.
- State Management: Employed React hooks (`useState`, `useEffect`) for efficient data management and fetching.

We were particularly proud of the CharacterModal component. It dynamically updates based on user selection, demonstrating our understanding of React's state management and prop handling.

## Wins
After this project I now feel much more comfident developing React app using an Api and external component
Also working as a pair trained me for the first time to work as a team. doing regular checkup with my teammate made a big difference 

## Key learning/Takeaway
1/ Charater Routing 
The first challenge arrive when routing the pages for each characters. We realised only after a while that the API we used was not filtering object by name but by ID number. To rectify this we simply replaced the URL of each character from the name to the ID number

2/ searching function 
At first the serach function was working great, however one character kept appearing in every search. this was due to the fact that we use the Id number as key, we changed this to the fullname to fix this error 

## Bugs
1.On the start missions modal we need to click on the modal itself rather than outside the modal to close it 
2.When smaller resolutions view the App the Nav bar disappears. This is something I would have corrected given more time by implementing a hamburger button.

## Future Improvements
1. I would have liked more time to work on the responsiveness of the app for different resolutions.
2. We did discuss implementing a quiz but did not have enough time to really give it our best.
3. I would have liked to implement some game logic for the 'To Battle' page.