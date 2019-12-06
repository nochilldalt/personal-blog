export interface IBlog{
    title: string,
    content: string,
    id: number,
    userid: number,
    _created: Date,
    name: string
}

export interface ITag{
    id: number,
    name: string,
    _created: Date
}

export interface IBlogTag{
    name: string
}

export interface IProfile{
    name: string,
    email: string,
    avatar:string,
    _created: Date
}