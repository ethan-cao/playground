import axios from "axios";
import { Dispatch } from "redux";

import { User } from "./SocialWebModel";
import { RootState } from "../../AppState";

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

// thunk action creator
export const fetchUsers = () => {
	return async (dispatch: Dispatch, getState: () => RootState) => {
		// console.log("@", getState())

		dispatch(fetchUsersRequest());

		try {
			// use setTimeout to make loading slow so we can see loading skeleton
			setTimeout(async () => {
				const response = await axios.get("https://jsonplaceholder.typicode.com/users")
				const users = response.data.map((user: User) => ({ id: user.id, name: user.name }));

				dispatch(fetchUsersSuccess(users));
			}, 1000)

		} catch (error) {
			dispatch(fetchUsersFailure('failed'));
		}

	};
};
