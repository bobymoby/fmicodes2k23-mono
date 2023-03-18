export type Player = {
    id: string
    username: string
    image: string
}

//WIP
export type Task = {
    id: number
    title: string
    description: string
    openedBy?: User
    code: string
}

export type User = {
    id: string
    image?: string
    username: string
}
