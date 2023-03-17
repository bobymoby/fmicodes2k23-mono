import React from "react";

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
        <div>
            <img src={props.image}/>
            <div className="container">
                <h4>{props.name}</h4>
            </div>
        </div>
    )
}

//code, players
export function Lobby(props: ILobbyProps){
    return (
        <div>
            {props.code ? <p>{props.code}</p> : ""}
            {props.players.map((pl) => Card(pl))}
        </div>
    )

}