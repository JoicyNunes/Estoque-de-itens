import React, { useEffect, useState } from "react";
import '../styles/form-list.css'

import { IoMdAddCircleOutline } from "react-icons/io";

import axios from "axios";
import { toast } from "react-toastify";

const FormList = ({ onEdit }) => {
    const [formData, setFormData] = useState({
        LIST: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, 
            [name]: value,
        });
    };

    return(
        <form className="container">
            <div className="input-list">
                <input 
                    name="LIST"
                    placeholder="Adicione uma nova tarefa"
                    value={formData.LIST}
                    onChange={handleChange}
                />
                <button className="button-list" type="submit">Criar <div className="circle"><IoMdAddCircleOutline /></div></button>
            </div>
            
        </form>
    );
};

export default FormList;