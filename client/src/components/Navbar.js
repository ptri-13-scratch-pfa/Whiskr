import { Link } from "react-router-dom";

const Navbar = () => {


    return (
        <header>
            <div className="container">
                <Link to='/'>
                    <h1>Whiskr!!</h1>
                </Link>
                <nav>
                    <div>
                        <Link to='/signup'>Sign Up</Link>
                        <Link to='/login'>Log In</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;