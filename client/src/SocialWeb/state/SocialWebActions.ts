import axios from "axios";
import { Dispatch } from "redux";

import { User } from "./SocialWebModel";
import { RootState } from "../../AppStore";

export interface SocialWebAction {
	type: string;
    payload: User[],
    error?: string,
}

// Action type
export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// Action creator
const fetchUsersRequest = () => {
	return {
		type: FETCH_USERS_REQUEST,
	};
};

const fetchUsersSuccess = (users: User[]) => {
	return {
		type: FETCH_USERS_SUCCESS,
		payload: users,
	};
};

const fetchUsersFailure = (error: string) => {
	return {
        type: FETCH_USERS_FAILURE,
        payload: [],
        error,
	};
};

// Action creator, that returns function
// since using redux-thunk, action creator can return thunk function with dispath, getState() as param
export const fetchUsers = () => {
	return async (dispatch: Dispatch, getState: () => RootState) => {
        // console.log("@", getState())
		dispatch(fetchUsersRequest());
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				// response.data is the users
				const users = response.data.map((user: User) => ({id: user.id, name: user.name}));
				dispatch(fetchUsersSuccess(users));
			})
			.catch((error) => {
				// error.message is the error message
				dispatch(fetchUsersFailure(error.message));
			});
	};
};
