import styles from './votecard.module.scss'

interface IVoteCardProps {
    image: string
    name: string
    onClick: () => {}
}

export const VoteCard: React.FC<IVoteCardProps> = (props: IVoteCardProps) => {
    return (
        <div className={styles.card}>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
            <label>{props.name}</label>
            <button className={styles.button} onClick={() => props.onClick()} >
                Vote Kick
            </button>
        </div>
    )
}
