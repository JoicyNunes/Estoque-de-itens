import './header.css';

//logo
import Logo from '../../assests/Logo.svg';

//icon  
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from 'react';

export function Header({ handleAddTask }) {
    const [title, setTitle] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        handleAddTask(title);
        setTitle('');
    }

    function onChangeTitle(event){
        setTitle(event.target.value);
    }

    return (
        <header className="header">
            <img src={Logo} />

            <form onSubmit={handleSubmit} className="input-task">
                <input 
                    placeholder="Adicione uma nova tarefa" 
                    type="text" 
                    value={title}
                    onChange={onChangeTitle}
                />
                <button className="button-task">
                    Criar
                    <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
    )
}

export default Header;