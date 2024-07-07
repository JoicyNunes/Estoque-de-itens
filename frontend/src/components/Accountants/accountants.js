import './accountants.css';

//icon
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from 'react-icons/bs';

export function Accountants({ accountants, onDelete, onComplete }) {
    return(
        <div className="accountants">
            <button className="checkContainer" onClick={() => onComplete(accountants.id)}>
                {accountants.isCompleted ? <BsFillCheckCircleFill /> : <div />}
            </button>

            <p className={accountants.isCompleted ? "textConcluded" : ""}>
                {accountants.title}
            </p>

            <button className="deleteButton" onClick={() => onDelete(accountants.id)}>
                <TbTrash size={20} />
            </button>
        </div>
    )
}