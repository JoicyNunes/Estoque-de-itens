import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Li = styled.li`
  width: 100%;
  text-align: center;
`
;

function Navbar() {
  return (
    <nav>
      <ul>
        <Li>
          <Link to="/Register">Cadastro de item</Link>
        </Li>
      </ul>
    </nav>
  );
}

export default Navbar;
