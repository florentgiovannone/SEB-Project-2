import { Link } from "react-router-dom"

function Navbar() {
return (
    <>   
    <header>
        <nav className="navbar is-dark">
        <div className="container">
            <div className="navbar-brand">
    <Link className="navbar-item" to="/">
                Home
            </Link>
    <Link className="navbar-item" to="/characters">
                Characters
            </Link>
    <Link className="navbar-item" to="/sign-in">
                Sign-in
            </Link>
            </div>
        </div>
        </nav>
    </header>
    </>
)
}
export default Navbar;
