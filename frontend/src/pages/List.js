import '../styles/list.css'
import { useState, useEffect } from "react";
import FormList from '../components/FormList';

import axios from "axios";
import { toast } from "react-toastify";

//components
import TaskList from '../components/TaskList.js';
import Task from '../components/Task.js';
import Empty from '../components/Empty.js';


function List() {
  const [list, setList] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getList= async () => {
    try {
      const res = await axios.get("http://localhost:8800/");
      setList(res.data.sort((a, b) => (a.ID > b.ID ? 1 : -1)));
      } catch (error) {
          toast.error(error);
        }
    };

  const handleFormSubmit = () => {
    getList();
  };

  useEffect(() => {
    getList();
  }, []);

  const createdCount = list.length;
  const completedCount = list.filter(task => task.completed).length;

    return(
      <form className="container">
        <div className="container-list">
          <FormList
            onEdit={onEdit}
            setOnEdit={setOnEdit}
            getList={getList}
            onFormSubmit={handleFormSubmit}
          />
        </div>

        <Task createdCount={createdCount} completedCount={completedCount} />
        {createdCount > 0 ? <TaskList list={list} /> : <Empty />}
      </form>
    )
};

export default List;