import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import "./../src/App.css";

import Navbar from './layout/Navbar.js';

//pages
import Register from './pages/RegisterItem.js';
import OrderItem from './pages/OrderItem.js';

const Container = styled.div`
`;

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route exact path="/Register" element={<Register />} /> 
          {/* <Route exact path="/OrderItem" element={<OrderItem />} /> */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
