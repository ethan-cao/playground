import React from "react";

interface StockPanelProps {
    ticker: string;
}

export const StockPanel = (props: StockPanelProps) => {
    // const ticker = props.match.params.ticker;  // use selector in container

    return ( 
        <div className="container">
            <h1>Stock panel</h1>
        </div> 
    );
}
 