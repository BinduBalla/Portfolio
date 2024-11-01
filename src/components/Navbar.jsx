import {Link} from "react-router-dom";

function Navbar() {
 
    return (
      <>
       <nav>
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/About">About</Link>
          </li>
          <li>
            <Link className="link" to="/Portfolio">Portfolio</Link>
          </li>
        </nav>
      </>
    )
  }
  
  export default Navbar