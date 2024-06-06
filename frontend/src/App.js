import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Global from './styles/global';
import Navbar from './layout/Navbar.js';
import Register from './pages/RegisterItem.js';

const Container = styled.div`
`;

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route exact path="/Register" element={<Register />} />
        </Routes>
      </Container>
      <Global />
    </Router>
  );
}

export default App;
