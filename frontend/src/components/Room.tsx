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
            {/* <label className={styles.left}>{props.userId ? "🔒" : "👉"}</label>
            <label>{props.name}</label>
            <label className={styles.right}>{props.userId}</label> */}
            <div className={styles.icon}>{props.userId ? "🔒" : "👉"}</div>
            <div className={styles.name}>{props.name}</div>
            <div className={styles.icon}>{props.userId ? props.userId : ""}</div>
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
