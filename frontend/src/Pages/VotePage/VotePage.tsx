import { VoteCard } from '../../components/VoteCard/VoteCard'
import { Player } from '../../types'
import styles from './votepage.module.scss'

interface IVotePageProps {
    players: Player[]
}

export function VotePage(props: IVotePageProps) {
    return (
        <div className={styles.container}>
            {props.players.map((player) => (
                <VoteCard image={player.image} name={player.username} onClick = {() => () => {}}/>
            ))}
        </div>
    )
}
