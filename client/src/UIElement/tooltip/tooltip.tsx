import React, { useLayoutEffect, useRef } from "react";
import { Coordinate, origin } from "../../utils/Coordinate";

import "./tooltip.css";

export enum TooltipPosition {
    TOP, BOTTOM, LEFT, RIGHT
}

export interface tooltipProps {
    content: string | JSX.Element;
    anchorRect: DOMRect;
    position?: TooltipPosition;
}

// alternatively, IntersectionObserver
const isInViewport = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();

    // assume the element is smaller than viewport
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

export const Tooltip = (props: tooltipProps) => {
    const position = props.position ?? TooltipPosition.BOTTOM;
    const tooltipRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!tooltipRef.current) {
            return;
        }

        const location = computeLocation();
        tooltipRef.current.style.left = location.x + "px";
        tooltipRef.current.style.top = location.y + "px";

        // if not in viewport, move to the opposite site
    });

    const computeLocation = (): Coordinate => {
        if (!tooltipRef.current) {
            return origin;
        }

        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        let left = 0;
        let top = 0;

        switch (position) {
            case TooltipPosition.TOP:
            case TooltipPosition.BOTTOM:
            case TooltipPosition.LEFT:
            case TooltipPosition.RIGHT:
            default:
                left = props.anchorRect.left + props.anchorRect.width / 2 - tooltipRect.width / 2;
                top = props.anchorRect.top + props.anchorRect.height;
                break;
        }

        return {
            x: left,
            y: top
        }
    }

    return (
        <div className="tooltip" ref={tooltipRef}>
            {props.content}
        </div>
    );
};