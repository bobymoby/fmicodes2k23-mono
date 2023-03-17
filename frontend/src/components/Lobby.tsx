import React from "react";
import styles from "./lobby.module.scss"

interface ICardProps
{
    image: string
    name: string
}

interface ILobbyProps
{
    code: string
    players: ICardProps[]
}

function Card(props: ICardProps){
    return (
        <div className={styles.card}>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"/>
            <label>{props.name}</label>
        </div>
    )
}

export function Lobby(props: ILobbyProps){
    return (
        <div className={styles.container}>
            {props.code ? <p>🗝️{props.code}</p> : ""}
            {props.players.map((pl) => Card(pl))}
            {props.players.length < 4 ? 
                <p>Waiting for players...</p>
                :""}
        </div>
    )

}