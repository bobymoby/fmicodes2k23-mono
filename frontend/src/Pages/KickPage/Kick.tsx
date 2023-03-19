import React from "react";
import { LobbyCard } from "../../components/LobbyCard/LobbyCard";
import { VoteCard } from "../../components/VoteCard/VoteCard";
import { Player } from "../../types";
import styles from "./kick.module.scss"


export function Kick(props: Player) {
    return (
        <div className={styles.container}>
            <LobbyCard image={props.image} name={props.username}/>
            <div className={styles.card}>... Was Kicked</div>
            <div className={styles.bottom}> {props.username} was imposter</div>
        </div>
    )
}
