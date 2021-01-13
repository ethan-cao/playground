import React, { useLayoutEffect, useRef } from "react";

import "./tooltip.css";

export enum TooltipPosition {
    TOP, BOTTOM, LEFT, RIGHT
}

export interface tooltipProps {
    content: string | JSX.Element;
    anchorRect: DOMRect;
    position?: TooltipPosition;
}

export const Tooltip = (props: tooltipProps) => {
    const tooltipRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!tooltipRef.current) {
            return;
        }

        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        const left = props.anchorRect.left + props.anchorRect.width / 2 - tooltipRect.width / 2;
        const top = props.anchorRect.top + props.anchorRect.height;

        tooltipRef.current.style.top = top + "px";
        tooltipRef.current.style.left = left + "px";
    });

    return (
        <div className="tooltip" ref={tooltipRef}>
            {props.content}
        </div>
    );
};