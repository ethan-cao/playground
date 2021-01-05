import classNames from "classnames";
import React from "react";

import "./skeleton.css";

export enum SkeletonVariation {
    Circle, Rectangle, Text
}

interface SkeletonProps {
    variation: SkeletonVariation;
    height: number;
    width?: number;
    hasPulse?: boolean;
}

const Skeleton = (props: SkeletonProps) => {
    const classes = classNames(
        "skeleton",
        { "skeleton--pulse": props.hasPulse },
        { "skeleton--circle": props.variation === SkeletonVariation.Circle }
    );

    const style: React.CSSProperties = { width: props.width, height: props.height };

    return <div className={classes} style={style} />;
}

export default Skeleton;