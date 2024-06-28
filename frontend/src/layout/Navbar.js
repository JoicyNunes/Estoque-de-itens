import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Li = styled.li`
  width: 100%;
  text-align: center;
  display: flex;
  margin-top: 10px;
  display: inline-block;
  font-weight: bold;
  line-height: Auto;
  align-items: center;
  position: relative;
  margin-top:50px;
`
export const StyleLink = styled(Link)`
  margin: 0 10px;
  text-decoration: none;
  border: 1px solid #000000;
  border-radius: 8px;
  background-color: #000000;
  font-size: 20px;
  color: #f5f5f7;
  &:hover {
    color: #ccc;
  } 
`;


function Navbar() {
  return (
    <nav>
      <ul>
        <Li>
          <StyleLink to="/Register">Cadastro de item</StyleLink>
          {/* <StyleLink to="/OrderItem">Pedidos</StyleLink> */}
        </Li>
      </ul>
    </nav>
  );
}

export default Navbar;
