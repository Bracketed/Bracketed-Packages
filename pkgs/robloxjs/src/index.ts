import { Users } from './API-V1/Users';

await Users.fetch('1234567890').then((data) => {
	console.log(data);
});

await Users.fetchUsers({
	usernames: ['ninjaninja140', 'shedletsky', 'roblox'],
	excludeBannedUsers: true,
}).then((data) => {
	console.log(data);
});

await Users.search('ninjaninja140').then((data) => {
	console.log(data);
});
