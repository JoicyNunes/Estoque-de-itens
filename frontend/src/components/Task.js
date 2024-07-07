import '../styles/task.css';

export function Task({ createdCount, completedCount }) {
    return(
        <section className="task-list">
            <header className="task-header">
                <div>
                    <p>Tarefas criadas
                    <span>{createdCount}</span>
                    </p>
                </div>

                <div>
                    <p className="task-purple">Concluídas
                    <span>{completedCount}</span>
                    </p>
                </div>
            </header>
        </section>
    )
}

export default Task;