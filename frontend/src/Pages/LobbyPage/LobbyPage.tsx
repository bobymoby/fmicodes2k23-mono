import { LobbyCard } from '../../components/LobbyCard/LobbyCard'
import { Player } from '../../types'
import styles from './lobbypage.module.scss'

interface ILobbyProps {
    code: string
    players: Player[]
}

export function LobbyPage(props: ILobbyProps) {
    return (
        <div className={styles.container}>
            {props.code ? <p>Lobby Code: {props.code}</p> : ''}
            {props.players.map((player) => (
                <LobbyCard image={player.image} name={player.username} />
            ))}
            {props.players.length < 4 ? <p>Waiting for players...</p> : ''}
            <a href='/Main Menu'><div className={styles.button}>Main Menu</div></a>
        </div>
    )
}
