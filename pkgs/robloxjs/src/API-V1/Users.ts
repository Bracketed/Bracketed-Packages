import Undici from 'undici';
import { StatusCodes } from 'src/StatusCodes';

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
		accept:
			| 'text/html'
			| 'text/plain'
			| 'text/css'
			| 'text/javascript'
			| 'application/javascript'
			| 'application/json'
			| 'application/x-www-form-urlencoded'
			| 'multipart/form-data'
			| 'image/jpeg'
			| 'image/png'
			| 'image/gif'
			| 'image/webp'
			| 'image/svg+xml'
			| 'image/x-icon'
			| 'image/vnd.microsoft.icon'
			| 'font/woff'
			| 'font/woff2'
			| 'font/ttf'
			| 'font/eot'
			| 'font/opentyp';
	};
}

interface UserInterface {
	usernames: string[];
	excludeBannedUsers: boolean;
}

class Users {
	static async fetch(userid: string) {
		const options: Options = {
			hostname: 'users.roblox.com',
			path: `/v1/users/${userid}`,
			method: 'GET',
			headers: {
				'User-Agent': 'request',
				accept: 'application/json',
			},
		};

		const client = new Undici.Client(`https://${options.hostname}`);
		const { statusCode, body } = await client.request({
			path: options.path,
			method: 'GET',
			headers: options.headers,
		});

		if (statusCode === 200) {
			const data = await body.json();
			return data;
		} else {
			throw StatusCodes.Unprocessable;
		}
	}

	static async search(username: string) {
		const options: Options = {
			hostname: 'users.roblox.com',
			path: `/v1/users/search?keyword=${username}`,
			method: 'GET',
			headers: {
				'User-Agent': 'request',
				accept: 'application/json',
			},
		};

		const client = new Undici.Client(`https://${options.hostname}`);
		const { statusCode, body } = await client.request({
			path: options.path,
			method: 'GET',
			headers: options.headers,
		});

		if (statusCode === 200) {
			const data = await body.json();
			return data;
		} else {
			throw StatusCodes.Unprocessable;
		}
	}

	static async fetchUsers(users: UserInterface) {
		const options: Options = {
			hostname: 'users.roblox.com',
			path: `/v1/usernames/users`,
			method: 'POST',
			headers: {
				'User-Agent': 'request',
				accept: 'application/json',
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
			const data = await body.json();
			return data;
		} else {
			return StatusCodes.Unprocessable;
		}
	}
}

export { Users };
