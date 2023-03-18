
interface ITaskProps {
    name: string
    task: string
}

export const TaskConditionComponent: React.FC<ITaskProps> = (props) => {
    return (
        <div>
            <h3>{props.name}:</h3> {props.task}
        </div>
    )
}
