import "./../src/App.css";
import { Header } from "./components/Header/header";
import { Counter } from "./components/Counter/counter";
import { useEffect, useState } from "react";
import Empty from "./components/Empty/empty";

const LOCAL_STORAGE_KEY = 'todo:tasks';

function App() {
  const [counter, setCounter] = useState([]);

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved) {
      setCounter(JSON.parse(saved));
    }
  }

  function setTasksAndSave(newTasks) {
    setCounter(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  useEffect(() => {
    loadSavedTasks();
  }, [])

  function addTask(taskTitle) {
    setTasksAndSave([...counter, {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false
    }]);
  }

  function deleteTaskById(counterId) {
    const newTasks = counter.filter(counter => counter.id !== counterId);
    setTasksAndSave(newTasks);
  }

  function toggleTaskCompletedById(counterId) {
    const newTasks = counter.map(counter => {
      if(counter.id === counterId) {
        return {
          ...counter,
          isCompleted: !counter.isCompleted
        }
      }
      return counter;
    });
    setTasksAndSave(newTasks);
  }

  return (
    <>
      <Header handleAddTask={addTask} />
      <Counter 
        counter={counter}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
    </>
  );
}

export default App;


// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import "./../src/App.css";

// // import Navbar from './layout/Navbar.js';

// import { IoMdRocket } from "react-icons/io";

// //pages
// // import Register from './pages/RegisterItem.js';
// // import OrderItem from './pages/OrderItem.js';
// import List from './antigo/pages/List.js'

// function App() {
//   return (
//   <form className="conteiner">
    
//     <div className="topo">
//       <div className="rocket"><IoMdRocket />
//         <p>todo</p>
//         <List />       
//       </div>     
//     </div>
//   </form>
  
//     // <Router>
//     //   <div className="topo">
//     //     <div className="rocket"><IoMdRocket />
//     //       <p>todo</p>
//     //       <Routes>
//     //         <Route exact path="/List" element={<List />} /> 
//     //         {/* <Route exact path="/Register" element={<Register />} />  */}
//     //         {/* <Route exact path="/OrderItem" element={<OrderItem />} /> */}
//     //       </Routes>
//     //     </div>
//     //   </div>
//     // </Router>
//   );
// }
