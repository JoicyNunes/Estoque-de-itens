import './counter.css';

import { Accountants } from '../Accountants/accountants';
import { Empty } from '../Empty/empty';

export function Counter({ counter, onDelete, onComplete }) {
    const counterQty = counter.length;
    const completedCounter = counter.filter(accountants => accountants.isCompleted).length;
    
    return(
        <section className="counter">
            <header className="header-counter">
                <div>
                    <p>Tarefas criadas</p>
                    <span>{counterQty}</span>
                </div>

                <div>
                    <p className="counter-purple">Concluídas</p>
                    <span>{completedCounter} de {counterQty}</span>
                </div>
            </header>

            <div className="list">
                {counter.length === 0 ? (
                    <Empty />
                ) : (
                    counter.map((accountants) => (
                        <Accountants
                            key={accountants.id}
                            accountants={accountants}
                            onDelete={onDelete}
                            onComplete={onComplete}
                        />
                    ))
                )} 
            </div>
        </section>
    )
}
