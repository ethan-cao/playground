import { SocialWebState, User } from "./SocialWebModel";

export const selectIsLoading = (state: SocialWebState): boolean => state.socialWeb.isLoading;

export const selectUsers = (state: SocialWebState): User[] => state.socialWeb.users;