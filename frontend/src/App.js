// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./../src/App.css";

// import Navbar from './layout/Navbar.js';

import { IoMdRocket } from "react-icons/io";

//pages
// import Register from './pages/RegisterItem.js';
// import OrderItem from './pages/OrderItem.js';
import List from './pages/List.js'

function App() {
  return (
  <form className="conteiner">
    
    <div className="topo">
      <div className="rocket"><IoMdRocket />
        <p>todo</p>
        <List />
      </div> 
    </div>
  </form>
  
    // <Router>
    //   <div className="topo">
    //     <div className="rocket"><IoMdRocket />
    //       <p>todo</p>
    //       <Routes>
    //         <Route exact path="/List" element={<List />} /> 
    //         {/* <Route exact path="/Register" element={<Register />} />  */}
    //         {/* <Route exact path="/OrderItem" element={<OrderItem />} /> */}
    //       </Routes>
    //     </div>
    //   </div>
    // </Router>
  );
}

export default App;
