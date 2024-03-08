import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer has-background-dark mt-6">
        <div className="content has-text-centered ">
          <Link className="m-6 has-text-white" to="/">
            Home
          </Link>
          <Link className="m-6 has-text-white " to="/characters">
            Characters
          </Link>
          <Link className="m-6 has-text-white" to="/pickteam">
            Pick Team
          </Link>
          <Link className="m-6 has-text-white" to="/sign-in">
            Sign-in
          </Link>
        </div>
        <div className="has-text-centered has-text-white">
          <h3>&copy; General Assembly</h3>
        </div>
      </footer>
    </>
  );
}

export default Footer;
