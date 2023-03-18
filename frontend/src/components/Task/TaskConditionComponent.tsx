import { Task } from '../../types'

interface ITaskConditionProps {
    task: Task | null
}

export const TaskConditionComponent: React.FC<ITaskConditionProps> = ({
    task,
}) => {
    return (
        <div>
            {(task && (
                <>
                    <h3>{task.title}:</h3>
                    <p>{task.description}</p>
                </>
            )) || <h3>No task selected</h3>}
        </div>
    )
}
