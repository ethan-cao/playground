export interface SocialWebState {
    socialWeb: SocialWebModel
}

export interface SocialWebModel {
    users: User[],
    posts: Post[],
    isLoading: boolean,
    error?: string,
}

export interface User {
    id: string,
    name: string
}

export interface Post {
    id: string,
    content: string
}
