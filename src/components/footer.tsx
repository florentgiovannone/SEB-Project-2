import { Link } from "react-router-dom"

function Footer() {
    return <>
        <footer className="footer ">
<div className="content has-text-centered ">
    <Link className="m-6 has-text-black" to="/">
                Home
            </Link>
    <Link className="m-6 has-text-black " to="/characters">
                Characters
            </Link>
    <Link className="m-6 has-text-black" to="/sign-in">
                Sign-in
            </Link>
</div>
<div className="has-text-centered">
<h3>&copy; General Assembly</h3>
</div>
</footer>
</>
}

export default Footer;
