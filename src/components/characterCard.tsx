import { Link } from "react-router-dom"

interface ICharacterProps { id?: Number, firstName: string, lastName: string, fullName: string, image: string, title: string, family: string } 

function CharacterCard({id, fullName, image, title, family }: ICharacterProps) {
    console.log(id)
return <> 
<section>
    <Link to={`/characters/${id}`}>
    <div style={{height: 420, width:200}} className="card  m-1">
        <div className="card-header-title ">{fullName}</div>
            <div className="card-imagep1 p-2">
                <figure className="image image is-square">
                    <img className="is-rounded" src={image} alt={fullName} />
                </figure> 
                <div className="block">
                    <div className="has-text-centered has-text-weight-bold">{`Title:`}</div>
                    <div className="has-text-centered mb-3"> {title}</div>
                </div>
                <div className="block">
                    <div className="has-text-centered has-text-weight-bold">{`Family:`}</div>
                    <div className="has-text-centered">{family}</div>
                </div>
            </div>
    </div></Link>
</section>
</>
}
export default CharacterCard;
