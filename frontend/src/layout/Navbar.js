import { Link } from 'react-router-dom';
import { IoMdRocket } from "react-icons/io";
import '../layout/navbar.css';

function Navbar() {
  return (
    <nav className="navbar"> <div className="rocket"><IoMdRocket /></div>
      <ul>
        <li>
          <Link to="/Register">todo</Link>
          {/* <StyleLink to="/OrderItem">Pedidos</StyleLink> */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
