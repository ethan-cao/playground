import axios from "axios";
import { Dispatch } from "redux";

import { RootState } from "../../AppState";
import { StockModel } from "./StockPanelModel";

export interface StockPanelAction {
	type: string;
    payload: StockModel,
    error?: string,
}

export const FETCH_STOCK_REQUESTED = "FETCH_STOCK_REQUESTED";
export const FETCH_STOCK_SUCCEEDED = "FETCH_STOCK_SUCCEEDED";
export const FETCH_STOCK_FAILED = "FETCH_STOCK_FAILED";

const fetchStockRequest = (ticker: string, exchange?: string) => {
	return {
		type: FETCH_STOCK_REQUESTED,
		payload: {ticker}
	};
};

const fetchStockSuccess = () => {
	return {
		type: FETCH_STOCK_SUCCEEDED,
	};
};

const fetchUsersFailure = (error: string) => {
	return {
        type: FETCH_STOCK_FAILED,
        error,
	};
};

export const fetchStock = () => {
	// return async (dispatch: Dispatch, getState: () => RootState) => {
	// 	dispatch(fetchUsersRequest());
	// 	axios
	// 		.get("https://jsonplaceholder.typicode.com/users")
	// 		.then((response) => {
	// 			// response.data is the users
	// 			const users = response.data.map((user: User) => ({id: user.id, name: user.name}));
	// 			dispatch(fetchUsersSuccess(users));
	// 		})
	// 		.catch((error) => {
	// 			// error.message is the error message
	// 			dispatch(fetchUsersFailure(error.message));
	// 		});
	// };
};
