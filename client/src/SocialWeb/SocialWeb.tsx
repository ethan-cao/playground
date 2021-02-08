import React, { useCallback, useEffect, useMemo, useRef } from "react";

import Skeleton from "../UIElement/skeleton/Skeleton";
import { User } from "./state/SocialWebModel";
import "./SocialWeb.css";
import { UserCard } from "./UserCard";
import { Button } from "../UIElement/button/button";

export interface SocialWebProps {
    isLoading: boolean;
    users: User[];
    error?: string;
}

export interface SocialWebActions {
    loadUsers: () => void;
}

export const SocialWeb = (props: SocialWebProps & SocialWebActions) => {
    const { isLoading, users, loadUsers } = props;

    const logFunction = (msg: string) => {
        console.log(msg);
    };

    const memoizedLogFunction = useCallback(logFunction, []);

    useEffect(() => {
        memoizedLogFunction("useEffect: render finished"); 
    }, [memoizedLogFunction]);  

    const memoizedUserCount = useMemo(() => {
        console.log("useMemo");
        return users.length; 
    }, [users.length]);

    const renderSocialWeb = () => {
        return (
            <div>
                {users.map((user: User) => (
                    <UserCard key={user.id} name={user.name}></UserCard>
                ))}
            </div>
        );
    };

    return (
        <div className="social-web">
            <Button label="Load users" onClick={loadUsers}></Button>
            <span> Users Count: {memoizedUserCount}</span>
            <Skeleton isLoading={isLoading}>{renderSocialWeb()}</Skeleton>
        </div>
    );
};
