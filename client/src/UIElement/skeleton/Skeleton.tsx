import classNames from "classnames";
import React, { FunctionComponent, PropsWithChildren } from "react";

import "./skeleton.css";

export enum SkeletonVariation {
    Circle, Rectangle, Text
}

interface SkeletonProps {
    isLoading: boolean;
    variation: SkeletonVariation;
    height: number;
    width?: number;
    hasPulse?: boolean;
}

const Skeleton: FunctionComponent<SkeletonProps> = (props: PropsWithChildren<SkeletonProps>) => {
    const classes = classNames(
        "skeleton",
        { "skeleton--pulse": props.hasPulse },
        { "skeleton--circle": props.variation === SkeletonVariation.Circle }
    );

    const style: React.CSSProperties = { width: props.width, height: props.height };

    const renderLoadingSkeleton = () => <div className={classes} style={style} />;

    const renderLoadedComponent = () => <>{props.children}</>;  // !!! use <></> to wrap the optional props.children

    return props.isLoading ? renderLoadingSkeleton() : renderLoadedComponent();
}

export default Skeleton;