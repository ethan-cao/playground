import { SocialWebState } from "./SocialWebModel";
import { SocialWebAction, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./SocialWebActions";

export const defaultSocialWeb: SocialWebState = { users: [], posts: [], isLoading: false };

export const SocialWebReducer = (state: SocialWebState = defaultSocialWeb, action: SocialWebAction): SocialWebState => {
	switch (action.type) {
		case FETCH_USERS_REQUEST:
			return {
				...state,
				isLoading: true,
			};
		case FETCH_USERS_SUCCESS:
			return {
				...state,
				isLoading: false,
				users: [...action.payload],
			};
		case FETCH_USERS_FAILURE:
			return {
				...state,
				isLoading: false,
				// error: action.payload,
			};
		default:
			return state;
	}
};