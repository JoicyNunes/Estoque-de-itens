import React, { useEffect, useState } from "react";
import '../styles/form-list.css'

import { IoMdAddCircleOutline } from "react-icons/io";

import axios from "axios";
import { toast } from "react-toastify";

const FormList = ({ onEdit }) => {
    const [formData, setFormData] = useState({
        LIST: "",
    });

    useEffect(() => {
        if (onEdit) {
            setFormData({
            LIST: onEdit.LIST,
            });
        }
    }, [onEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, 
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const { LIST } = formData;
            if (!LIST) {
                return toast.warn();
            }
            if (onEdit) {
                await axios
                .put("http://localhost:8800/" + onEdit.ID, {
                LIST,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
            } else {
                await axios
                .post("http://localhost:8800/", {
                LIST,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
                }
            };

    return(
        <form className="container" onSubmit={handleSubmit}>
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