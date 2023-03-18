import React from "react";
import styles from "./room.module.scss"

interface ITaskProp{
    name: string,
    task: string,
    userId: number
}

interface IRoomProp
{
    tasks: ITaskProp[]
}

function Task(props: ITaskProp){
    return (
        <div className={styles.list}>
            <div className={styles.icon}>{props.userId ? "🔒" : "👉"}</div>
            <div className={styles.name}>{props.name}</div>
            <div className={styles.seek}>{props.userId ? props.userId : ""}</div>
        </div>
    )
}

export default function(props: IRoomProp){
    return (
        <div className={styles.container}>
            
            <div className={styles.editor}>
                {/* TODO */}
            </div>
            <div className={styles.column}>
                <div className={styles.card}>
                    {props.tasks.map((t) => Task(t))}
                </div>
                <div className={styles.card}>

                </div>
            </div>
        </div>
    )
}
