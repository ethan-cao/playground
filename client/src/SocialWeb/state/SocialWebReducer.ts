import { SocialWebModel } from "./SocialWebModel";
import { SocialWebAction, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from "./SocialWebActions";

export const defaultSocialWeb: SocialWebModel = { users: [], posts: [], isLoading: false};

export const SocialWebReducer = (state: SocialWebModel = defaultSocialWeb, action: SocialWebAction ) => {
	switch (action.type) {
		case FETCH_USERS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_USERS_SUCCESS:
			return {
                ...state,
                loading: false,
				users: [...action.payload],
			};
		case FETCH_USERS_FAILURE:
			return {
                ...state,
                loading: false,
				// error: action.payload,
			};
        default:
            return state;
    }
}