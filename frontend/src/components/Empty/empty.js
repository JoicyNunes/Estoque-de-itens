import './empty.css';
import { LuClipboardList } from "react-icons/lu";

export function Empty() {
    return (
        <div className="container-empty">
            <div className="clipboard">
                <LuClipboardList size={48} />
            </div>
            <p className="text">
                <strong>Você ainda não tem tarefas cadastradas</strong><br />
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    )
}

export default Empty;
