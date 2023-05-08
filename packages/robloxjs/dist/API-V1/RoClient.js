import Undici from 'undici';
class Client {
    static async login(ClientToken) {
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
            const data = await body.json();
            return data;
        }
        else {
            return console.error(statusCode, body);
        }
    }
    static async logout(ClientToken) {
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
            const data = await body.json();
            return data;
        }
        else {
            return console.error(statusCode, body);
        }
    }
}
export { Client };
// https://auth.roblox.com/docs#/
// https://auth.roblox.com/v2/login - POST
//# sourceMappingURL=RoClient.js.map