import React, { useEffect, useState } from "react";
import '../styles/form-list.css'

import { AiOutlinePlusCircle } from "react-icons/ai";

import axios from "axios";
import { toast } from "react-toastify";

const FormList = () => {
    return(
        <form className="container">
            <div className="input-list">
                <input 
                    name="LIST"
                    placeholder="Adicione uma nova tarefa"
                    
                />
                <button className="button-list" type="submit">Criar <div className="circle"><AiOutlinePlusCircle /></div></button>
            </div>
            
        </form>
    );
};

export default FormList;