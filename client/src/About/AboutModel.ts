export interface AboutStoreSlice {
    about: AboutState
}

export interface AboutState {
    author: string,
}

export interface AboutAction {
    type: string,
    payload: Partial<AboutState>
}