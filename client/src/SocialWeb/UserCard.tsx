import React from "react";

import { TooltipPosition } from "../UIElement/tooltip/tooltip";
import { useTooltip } from "../UIElement/tooltip/useTooltip";
import "./UserCard.css";

interface UserCardProps {
    name: string;
}

export const UserCard = (props: UserCardProps) => {
    const tooltipRef = useTooltip<HTMLDivElement>(props.name, TooltipPosition.RIGHT);

    return (
        <div className="user-card" ref={tooltipRef}>
            <div className="user-card__name">{props.name}</div>
        </div>
    );
};