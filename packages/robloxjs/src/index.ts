import { UsersV1 } from './API-V1/Users.js';

await UsersV1.search('ninjaninja140').then((data) => {
	console.log(data);
});

await UsersV1.fetch.get('1234567890').then((data) => {
	console.log(data);
});

await UsersV1.fetch
	.byUsername({
		usernames: ['ninjaninja140', 'shedletsky', 'roblox'],
		excludeBannedUsers: true,
	})
	.then((data) => {
		console.log(data);
	});

await UsersV1.fetch
	.byUserId({
		userIds: ['180993675', '563061359', '1762363290'],
		excludeBannedUsers: true,
	})
	.then((data) => {
		console.log(data);
	});

await UsersV1.fetch.nameHistory(1762363290, 10).then((data) => {
	console.log(data);
});
