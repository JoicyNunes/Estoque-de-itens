import React, { useState } from "react";
import '../styles/form-list.css'

import { AiOutlinePlusCircle } from "react-icons/ai";

import axios from "axios";
import { toast } from "react-toastify";

const FormList = ({ onFormSubmit }) => {
    const [task, setTask] = useState("");

    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!task) {
            toast.error();
            return;
        }

        try {
            await axios.post("http://localhost:8800/", { LIST: task });
            setTask("");
            toast.success();
            onFormSubmit();
        } catch (error) {
            toast.error();
        }
    };


    return(
        <div className="container">
            <form className="input-list" onSubmit={handleSubmit}>
                <input 
                    name="LIST"
                    placeholder="Adicione uma nova tarefa"
                    value={task}
                    onChange={handleInputChange}                    
                />
                <button className="button-list" type="submit">Criar<div className="circle"><AiOutlinePlusCircle /></div></button>
            </form>
        </div>
    );
};

export default FormList;