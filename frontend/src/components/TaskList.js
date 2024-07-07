import React from 'react';
import '../styles/task-list.css';

const TaskList = ({ list }) => {
    return (
         <ul className="task-list">
             {list.map((task, index) => (
                 <li key={index} className="task-item">{task.LIST}</li>
             ))}
         </ul>
     );
};

export default TaskList;
