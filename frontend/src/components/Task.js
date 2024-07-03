import '../styles/task.css';

export function Task() {
    return(
        <section className="task-list">
            <header className="task-header">
                <div>
                    <p>Tarefas criadas
                    <span>10</span>
                    </p>
                </div>

                <div>
                    <p className="task-purple">Concluídas
                    <span>0</span>
                    </p>
                </div>
            </header>
        </section>
    )
}

export default Task;