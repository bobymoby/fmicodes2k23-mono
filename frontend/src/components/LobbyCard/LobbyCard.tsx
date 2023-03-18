import styles from './lobbycard.module.scss'

interface ICardProps {
    image: string
    name: string
}

export const LobbyCard: React.FC<ICardProps> = (props: ICardProps) => {
    return (
        <div className={styles.card}>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
            <label>{props.name}</label>
        </div>
    )
}
