export interface SocialWebStoreSlice {
    socialWeb: SocialWebState
}

export interface SocialWebState {
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
