import React, { useEffect, useState } from "react";

import Skeleton from "../UIElement/skeleton/Skeleton";
import { User } from "./state/SocialWebModel";
import "./SocialWeb.css";
import { UserCard } from "./UserCard";

export interface SocialWebProps {
    isLoading: boolean;
    users: User[];
    error?: string;
}

export interface SocialWebActions {
    load: () => void;
}

export const SocialWeb = (props: SocialWebProps & SocialWebActions) => {
    const { isLoading, users, load } = props;

    const renderSocialWeb = () => {
        return (
            <>
                <div>
                    {users.map((user: User) => (
                        <UserCard key={user.id} name={user.name}></UserCard>
                    ))}
                </div>
            </>
        );
    };

    return (
        <div className="social-web">
            <button onClick={load}>Load users</button>
            <span>Users: {users.length}</span>
            <Skeleton isLoading={isLoading}>{renderSocialWeb()}</Skeleton>
        </div>
    );
};
