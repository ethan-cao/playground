import { FETCH_STOCK_FAILED, FETCH_STOCK_REQUESTED, FETCH_STOCK_SUCCEEDED, StockPanelAction } from "./StockPanelActions";
import { StockPanelModel } from "./StockPanelModel";

export const defaultStockPanel: StockPanelModel = { stock: [], isLoading: false};

export const SocialWebReducer = (state: StockPanelModel = defaultStockPanel, action: StockPanelAction) => {
	switch (action.type) {
		case FETCH_STOCK_REQUESTED:
			return {
				...state,
				loading: true,
			};
		case FETCH_STOCK_SUCCEEDED:
			return {
                ...state,
                loading: false,
			};
		case FETCH_STOCK_FAILED:
			return {
                ...state,
                loading: false,
                error: "error,"
			};
        default:
            return state;
    }
}
