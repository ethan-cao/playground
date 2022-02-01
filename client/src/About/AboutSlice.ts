import { AboutAction, AboutState, AboutStoreSlice } from "./AboutModel";

// Actions
const SET_AUTHOR = 'SET_AUTHOR';

// Reducer
export const defaultAboutState: AboutState = { author: "Default author" };

export const AboutReducer = (state: AboutState = defaultAboutState, action: AboutAction): AboutState => {
	switch (action.type) {
		case SET_AUTHOR:
			return {
				...state,
			};
		default:
			return state;
	}
};

// Action creators
export const setAuthor = (author: string): AboutAction => ({
  type: SET_AUTHOR,
  payload: { author }
})


// Selector
export const selectAuthor = (state: AboutStoreSlice) => state.about.author