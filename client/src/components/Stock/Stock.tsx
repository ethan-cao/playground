import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface IStockProps {
    ticker: string;
}

const Stock = (props: RouteComponentProps<IStockProps> ) => {
    const ticker = props.match.params.ticker;

    return ( 
        <div className="container">
            <span>{ticker}</span>
        </div> 
    );
}
 
export default Stock;