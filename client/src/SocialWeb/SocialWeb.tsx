import React from "react";

import { User } from "./state/SocialWebModel";

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
		<div className="socialWeb">
			<button onClick={load}>Load users</button>
			<div>{isLoading ? "loading" : "loaded"} </div>
			<div>
				<span>Users: {users.length}</span>
				<ul>
					{users.map((user: User) => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
			</div>
		</div>
	);
};
