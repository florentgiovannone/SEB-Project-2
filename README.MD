# Project 2 - Game of Thrones Character React App


## Summary


- [Description](#description)
- [Installation](#installation)
- [Technologies](#technologies)
- [Timeframe & Working Team](#timeframe--working-team)
   - [Characters Page](#characters)
   - [To Battle Page](#to-battle)
   - [Sign-up Page](#sign-up)
   - [Single Character Page](#character)
- [Planning](#planning)
- [Build Code Process](#build-code-process)
   - [Character Page (House Details)](#character-page)
   - [CharacterModal Component](#charactermodal-component)
   - [Characters Component (with API Integration and State Management)](#characters-component-with-api-integration-and-state-management)
- [Wins](#wins)
- [Key Learning and Takeaway](#key-learning-and-takeaway)
- [Bugs](#bugs)
- [Future Improvements](#future-improvements)




## Description
This is our second project, and it was worked on as a pair. The brief was to choose a public API from which we could fetch and display information. We developed a React app using a Game of Thrones API. We aimed to showcase an array of techniques learned during class. The app contains the following features:


1. Fetching a public API.
2. Mapping content of the API to a dedicated page.
3. Creating routes for each character (each character has its own page).
4. Implementing a front-end-only sign-in page.
5. Including a team-building page to assemble a team to defeat the White Walkers.


## Installation
We have used Netlify to deploy our app.


[Link to the APP](https://majestic-pegasus-01f742.netlify.app/)


1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm i`.
4. Run `npm run dev` - This should then open a localhost page in your browser.


## Technologies
- HTML
- CSS
- Bulma
- Sass
- React.JS


## Timeframe & Working Team
This was a hack-a-thon (1.5 day) style project to be worked as a team of two. My pair was Conor Hamilton.
We worked as partner programming style:
- We met every 4 hours to discuss what would need to be done and split the workload evenly.
- We then made sure to be available in case we needed to reach out to each other.
- For the last day, we worked as a driver navigator style for the small details and deployment.


### Characters
This page is where all the character of the API is displayed for the user to see.
![Characters](./src/assets/images/Screenshot%202024-03-11%20190218.png)


### To Battle
This page is where the user can play and build a team to go and defeat the White Walkers.
![To Battle](./src/assets/images/Screenshot%202024-03-11%20190522.png)


### Sign-up
Simple signup page (not linked to any backend).
![Sign in](./src/assets/images/Screenshot%202024-03-11%20190700.png)


### Character
Single character's page where the user can know a bit more about each character.
![Character Info](./src/assets/images/Screenshot%202024-03-11%20191536.png)


## Planning
Before starting, we planned using wireframing.
![Wireframe](./src/assets/images/Screenshot%202024-03-06%20at%2015.34.20.png)


We also had thorough pseudo-coding prior to dividing tasks.


See document structure below:


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
## Build code process


Conor and I initiated the project by setting up the React framework and structuring the components. Highlights of our collaboration include:


- **CharacterCard:** A component for displaying character cards.
- **CharacterModal:** A modal component for detailed character information.
- **Characters:** The main component allows users to search and view characters.
- **API Integration:** Utilized `fetch` to retrieve character data from ThronesAPI.
- **State Management:** Employed React hooks (`useState`, `useEffect`) for efficient data management and fetching.


We were particularly proud of the CharacterModal component. It dynamically updates based on user selection, demonstrating our understanding of React's state management and prop handling.


On a personal note, I worked on:
- The mapping of the character's list and the whole routing on the App.
- I looked at the search functionality.
- I developed each of the houses depending on who you would choose.


### Character page
Example of information given depending on what house they are from:
```jsx
if (family.includes('Stark')) {
       return <> <section>
           <div className="m-6">
               <div className="columns is-centered is-vcentered">
                   <div className="column is-centered">
                       <figure className="image is-centered is-fullwidth">
                           <img className="is-square " src={image} />
                       </figure>
                   </div>
                   <div className="column has-text-centered">
                       <div className="bd-notification is-primary title">{`Title:`}</div>
                       <div className="bd-notification is-primary mb-6">{title}</div>
                       <div className="bd-notification is-primary title mt-6">{`Family:`}</div>
                       <div className="bd-notification is-primary ">{family}</div>
                       <div className="bd-notification is-primary title mt-6">{`About the House Stark`}</div>
                       <p>{'Rulers of the North from the castle of Winterfell and the royal house of the independent Kingdom of the North. Retook their lands from House Bolton, who usurped House Stark at the Red Wedding, after the Battle of the Bastards. The house is ruled by Sansa Stark, the Queen in the North. The heir is Princess Arya Stark.'}</p>
                   </div>
               </div>
           </div>
       </section>
       </>
   }
```


### CharacterModal component
Function of Character modal for the battle mode using bulma
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


### Characters component (with API integration and state management)
Fetching of the public API and mapping the date provided
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


## Wins
Boosting Confidence in React Development:
- **Getting into React:** I've really delved into React during this project! Understanding how components work, managing state effectively, and navigating lifecycle methods are all key skills I've honed.
- **APIs:** Working with APIs can be tricky, but I've tackled it head-on. Integrating external data into my React app shows I've got a solid grasp on fetching and handling data from different sources.
- **External Components:** It's awesome that I've explored using external components or libraries! By incorporating them into my project, I've shown a savvy approach to leveraging existing tools to make my app shine.


Teamwork and Communication:
- **Teamwork:** Working alongside a teammate has been a game-changer. I've discovered the power of bouncing ideas off each other, dividing tasks, and lifting each other up when things get tough.
- **Check-ins:** Those regular catch-ups have been really good! By staying in sync with my teammate, I've avoided roadblocks, and kept the project moving forward smoothly.


Accountability Partners:
- **Being accountable:** to someone else can be surprisingly motivating. It's amazing how having a teammate to report progress to can keep me focused and driven to deliver my best work.


## Challenges
The first challenge arose when displaying a single character. We couldn't manage to target the needed information. It took us a lot of problem-solving and researching.


The second challenge was with the search function: we were able to search properly but somehow one character was always showing up. We managed to solve this by changing the key from the ID to the full name.


## Key learning and takeaway
1. **Character Routing:** The first challenge arose when routing the pages for each character. We realized only after a while that the API we used was not filtering objects by name but by ID number. To rectify this, we simply replaced the URL of each character from the name to the ID number.
2. **Searching Function:** Initially, the search function was working great. However, one character kept appearing in every search. This was due to the fact that we used the ID number as the key. We changed this to the full name to fix this error.


## Bugs
1. In the start missions modal, we need to click on the modal itself rather than outside the modal to close it.
2. When viewed on smaller resolutions, the navbar disappears. This is something I would have corrected given more time by implementing a hamburger button.


## Future improvements
1. "I would have liked more time to work on the responsiveness of the app for different resolutions." - This sentence is clear and grammatically correct, but you might consider adding specifics about what aspects of responsiveness you wanted to improve. For example: "I would have liked more time to optimize the responsiveness of the app, particularly for various screen sizes and orientations."
2. "We did discuss implementing a quiz but did not have enough time to really give it our best." - This sentence is also grammatically correct, but you could enhance clarity by specifying who discussed implementing the quiz. For example: "During our meetings, we discussed implementing a quiz feature, but unfortunately, we didn’t have enough time to fully develop it."
3. "I would have liked to implement some game logic for the 'To Battle' page." - This sentence is clear, but you might consider adding details about the specific game logic you wanted to implement. For instance: "I had ideas for incorporating more dynamic game logic into the 'To Battle' page, but due to time constraints, I couldn’t implement them."
