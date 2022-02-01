import { SocialWebStoreSlice, User } from "./SocialWebModel";

export const selectIsLoading = (state: SocialWebStoreSlice): boolean => state.socialWeb.isLoading;

export const selectUsers = (state: SocialWebStoreSlice): User[] => state.socialWeb.users;