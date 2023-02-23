import Undici from 'undici';

interface RBLXLoginResponse {
	user: {
		id: number;
		name: string;
		displayName: string;
	};
	twoStepVerificationData: {
		mediaType: string;
		ticket: string;
	};
	identityVerificationLoginTicket: string;
	isBanned: true | false;
}

class Client {
	static async login(ClientToken: string) {
		const client = new Undici.Client('https://auth.roblox.com');
		const { statusCode, body } = await client.request({
			path: '/v2/login',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'.ROBLOSECURITY': ClientToken,
			},
		});
		if (statusCode === 200) {
			const data: RBLXLoginResponse = await body.json();
			return data;
		} else {
			return console.error(statusCode, body);
		}
	}
	static async logout(ClientToken: string) {
		const client = new Undici.Client('https://auth.roblox.com');
		const { statusCode, body } = await client.request({
			path: '/v2/logout',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'.ROBLOSECURITY': ClientToken,
			},
		});
		if (statusCode === 200) {
			const data: RBLXLoginResponse = await body.json();
			return data;
		} else {
			return console.error(statusCode, body);
		}
	}
}

export { Client };

// https://auth.roblox.com/docs#/
// https://auth.roblox.com/v2/login - POST
