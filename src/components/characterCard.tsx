
interface ICharacterProps { firstName: string, lastName: string, image: string, title: string, familly: string } 

function CharacterCard({ firstName, lastName, image, title, familly }: ICharacterProps) {
return <>
return 
<section>

    <div className="card">
    <div className="card-header">
        <div className="card-header-title">{firstName}</div>
    </div>
    <div className="card-image">
        <figure className="image image-is-1by1">
        <img className="cheese" src={image} alt={`${firstName}, ${lastName}`} />
        </figure>
        <div>{title}</div>
        <div>{familly}</div>
    </div>
    </div>
</section>
</>
}
export default CharacterCard;
