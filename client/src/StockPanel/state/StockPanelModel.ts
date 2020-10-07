export interface StockPanelState {
    stockPanel: StockPanelModel;
}

export interface StockPanelModel {
    stock: StockModel[];
    isLoading: boolean;
}

export interface StockModel {
    ticker: string;
    price: number;
    name: string;
    exchange: string;
}