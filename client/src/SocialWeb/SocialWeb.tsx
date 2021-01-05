import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonVariation } from "../UIElement/skeleton/Skeleton";

import { User } from "./state/SocialWebModel";
import "./style/SocialWeb.css";

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

	return (
		<div className="social-web">
			<button onClick={load}>Load users</button>


			{isLoading && <Skeleton variation={SkeletonVariation.Rectangle} height={60} hasPulse={true} />}
			{!isLoading && <div>
				<span>Users: {users.length}</span>
				<ul>
					{users.map((user: User) => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
			</div>}
		</div>
	);
};
