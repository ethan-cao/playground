import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import { Tooltip, TooltipPosition } from "./tooltip";

export const useTooltip = <TooltipAnchor extends HTMLElement>(
    content: string | JSX.Element,
    position?: TooltipPosition
) => {
    const tooltipAnchorRef = useRef<TooltipAnchor>(null);

    useEffect(() => {
        if (!tooltipAnchorRef.current) {
            return;
        }

        tooltipAnchorRef.current.addEventListener("mouseover", showTooltip);
        tooltipAnchorRef.current.addEventListener("mouseout", hideTooltip);
    });

    const showTooltip = (event: MouseEvent) => {
        ReactDOM.render(
            <Tooltip
                content={content}
                anchorRect={tooltipAnchorRef.current?.getBoundingClientRect()!}
                position={position}
            />,
            getModalRoot()
        );
    };

    const hideTooltip = () => {
        ReactDOM.unmountComponentAtNode(getModalRoot());
    };

    const getModalRoot = () => {
        return document.querySelector("#app-modal-root")!;
    };

    return tooltipAnchorRef;
};
