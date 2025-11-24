import {Link} from "react-router-dom"

function Navbar(){
    return(
        <>
        <nav>
            <ul>
                <li></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;