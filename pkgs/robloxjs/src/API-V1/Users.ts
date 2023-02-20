import Undici from 'undici';

interface Options {
	hostname: string;
	path: string;
	method:
		| 'GET'
		| 'POST'
		| 'PUT'
		| 'DELETE'
		| 'PATCH'
		| 'OPTIONS'
		| 'HEAD'
		| 'CONNECT'
		| 'TRACE'
		| 'COPY'
		| 'LOCK'
		| 'MKCOL'
		| 'MOVE'
		| 'PROPFIND'
		| 'PROPPATCH'
		| 'UNLOCK'
		| 'REPORT'
		| 'MKACTIVITY'
		| 'CHECKOUT'
		| 'MERGE'
		| 'M-SEARCH'
		| 'NOTIFY'
		| 'SUBSCRIBE'
		| 'UNSUBSCRIBE'
		| 'PUBLISH'
		| 'SEARCH'
		| 'PURGE'
		| 'LINK'
		| 'UNLINK'
		| 'WRAPPED'
		| 'EXTENDED'
		| 'UNKNOWN';
	headers: {
		'User-Agent': string;
		'Content-Type'?: string;
	};
}

export interface RblxPlayer {
	description: string;
	created: string;
	isBanned: false | true;
	externalAppDisplayName: string;
	hasVerifiedBadge: false | true;
	id: number;
	name: string;
	DisplayName: string;
}

export interface UserInterface {
	usernames: string[];
	excludeBannedUsers: boolean;
}

interface FetchedUser {
	previousUsernames: string[];
	hasVerifiedBadge: false | true;
	id: number;
	name: string;
	displayName: string;
}

interface FetchedUsers {
	prepreviousPageCursor: string | null;
	nextPageCursor: string | null;
	data: FetchedUser[];
}

class Users {
	static async fetch(userid: string | number) {
		const options: Options = {
			hostname: 'users.roblox.com',
			path: `/v1/users/${userid.toString()}`,
			method: 'GET',
			headers: {
				'User-Agent': 'request',
				'Content-Type': 'application/json',
			},
		};

		const client = new Undici.Client(`https://${options.hostname}`);
		const { statusCode, body } = await client.request({
			path: options.path,
			method: 'GET',
			headers: options.headers,
		});

		if (statusCode === 200) {
			const data: RblxPlayer = await body.json();
			return data;
		} else {
			return console.error(statusCode, body);
		}
	}

	static async search(username: string) {
		const options: Options = {
			hostname: 'users.roblox.com',
			path: `/v1/users/search?keyword=${username}`,
			method: 'GET',
			headers: {
				'User-Agent': 'request',
				'Content-Type': 'application/json',
			},
		};

		const client = new Undici.Client(`https://${options.hostname}`);
		const { statusCode, body } = await client.request({
			path: options.path,
			method: 'GET',
			headers: options.headers,
		});

		if (statusCode === 200) {
			const data: FetchedUsers = await body.json();
			const FetchedData: FetchedUser[] = data.data;
			return FetchedData;
		} else {
			return console.error(statusCode, body);
		}
	}

	static async fetchUsers(users: UserInterface) {
		const options: Options = {
			hostname: 'users.roblox.com',
			path: `/v1/usernames/users`,
			method: 'POST',
			headers: {
				'User-Agent': 'request',
				'Content-Type': 'application/json',
			},
		};

		const client = new Undici.Client(`https://${options.hostname}`);
		const { statusCode, body } = await client.request({
			path: options.path,
			method: 'POST',
			headers: options.headers,
			body: JSON.stringify(users),
		});

		if (statusCode === 200) {
			const data: FetchedUsers = await body.json();
			const FetchedData: FetchedUser[] = data.data;
			return FetchedData;
		} else {
			return console.error(statusCode, body);
		}
	}
}

export { Users };
