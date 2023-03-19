import Countdown from 'react-countdown'
import { VoteCard } from '../../components/VoteCard/VoteCard'
import { Player } from '../../types'
import styles from './votepage.module.scss'

interface IVotePageProps {
    players: Player[]
    userId: string
    votes: number[]
    redirectToEnd: () => void
}

export function VotePage(props: IVotePageProps) {
    return (
        <div className={styles.container}>
            {props.players.map((player) => (
                <VoteCard
                    image={player.image}
                    name={player.username}
                    onClick={() => () => {}}
                />
            ))}
            <div className={styles.card}>
                <Countdown
                    // date={Date.now() + 180000}
                    date={Date.now() + 10000}
                    renderer={() => null}
                    onComplete={() => {
                        props.redirectToEnd()
                    }}
                />
            </div>
        </div>
    )
}
