export interface User {
    id : string,
    email : string,
    username : string,
    password : string,

}



export type UserCreation = Omit<User, "id">

export type UserWithoutPassword = Omit<UserCreation, "password">

// export type LoginUserInput = {email?: string, username?: string , password: string}

export type LoginUserInput = {username: string , password: string}