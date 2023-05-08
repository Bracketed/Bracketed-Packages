import Undici from 'undici';
class UsersV1 {
    static async search(username) {
        const options = {
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
            const data = await body.json();
            const FetchedData = data.data;
            return FetchedData;
        }
        else {
            return console.error(statusCode, body);
        }
    }
    static fetch = {
        async get(userid) {
            const options = {
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
                const data = await body.json();
                return data;
            }
            else {
                return console.error(statusCode, body);
            }
        },
        async byUsername(UserSubmission) {
            const options = {
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
                body: JSON.stringify(UserSubmission),
            });
            if (statusCode === 200) {
                const data = await body.json();
                const FetchedData = data.data;
                return FetchedData;
            }
            else {
                return console.error(statusCode, body);
            }
        },
        async byUserId(UserSubmission) {
            const options = {
                hostname: 'users.roblox.com',
                path: `/v1/users`,
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
                body: JSON.stringify(UserSubmission),
            });
            if (statusCode === 200) {
                const data = await body.json();
                const FetchedData = data.data;
                return FetchedData;
            }
            else {
                return console.error(statusCode, body);
            }
        },
        async nameHistory(userid, userAmount) {
            const options = {
                hostname: 'users.roblox.com',
                path: `/v1/users/${userid.toString()}/username-history?limit=${userAmount.toString()}`,
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
                const data = await body.json();
                return data;
            }
            else {
                return console.error(statusCode, body);
            }
        },
    };
}
export { UsersV1 };
//# sourceMappingURL=Users.js.map