import React from 'react'
import Countdown from 'react-countdown'
import { LobbyCard } from '../../components/LobbyCard/LobbyCard'
import { VoteCard } from '../../components/VoteCard/VoteCard'
import { Player } from '../../types'
import styles from './kick.module.scss'

export function Kick(props: any) {
    return (
        <div className={styles.container}>
            <LobbyCard image={props.image} name={props.username} />
            <div className={styles.cart}>Was Kicked</div>
            <div className={styles.bottom}> {props.username} was the bug</div>
            <Countdown
                date={Date.now() + 5000}
                renderer={() => null}
                onComplete={() => props.redirectToEnd()}
            />
        </div>
    )
}
