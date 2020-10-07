import { StockModel, StockPanelState } from "./StockPanelModel";

export const selectIsLoading = (state: StockPanelState): boolean => state.stockPanel.isLoading;

export const selectStocks = (state: StockPanelState): StockModel[] => state.stockPanel.stock;