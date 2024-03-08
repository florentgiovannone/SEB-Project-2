import { Link } from "react-router-dom";

interface ICharacterProps {
  id?: Number;
  firstName: string;
  lastName: string;
  fullName: string;
  image: string;
  title: string;
  family: string;
}

function CharacterCard({
  id,
  fullName,
  image,
}: ICharacterProps) {
  console.log(fullName);
  return (
    <>
      <section>
        <div style={{ height: 250, width: 200 }} className="card  m-1">
          <div className="card-header-title center-text has-text-light has-background-dark">{fullName}</div>
          <div className="card-imagep1 p-2">
            <Link to={`/characters/${id}`}>
              <figure className="image image is-square">
                <img
                  className="is-rounded image-correction"
                  src={image}
                  alt={fullName}
                />
              </figure>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default CharacterCard;
