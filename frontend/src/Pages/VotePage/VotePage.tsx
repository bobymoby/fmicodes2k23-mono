import { VoteCard } from '../../components/VoteCard/VoteCard'
import { Player } from '../../types'
import styles from './votepage.module.scss'

interface IVotePageProps {
    players: Player[];
    userId: number;
    votes: number[];
}

export function VotePage(props: IVotePageProps) {
    return (
        <div className={styles.container}>
            const [counter, setCounter] = useState(counter);
            {props.players.map((player) => (
                <VoteCard image={player.image} name={player.username} onClick = {() => () => {}}/>
            ))}
            <div className={styles.card}>Timer</div>
        </div>
    )
}
