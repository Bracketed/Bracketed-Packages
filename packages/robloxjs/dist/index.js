import { UsersV1 } from './API-V1/Users.js';
//import { Client } from './API-V1/RoClient.js';
await UsersV1.search('epicroblox').then((data) => {
	console.log(data);
});
/*await UsersV1.fetch.get('1234567890').then((data) => {
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
await Client.login('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_AF83C2C3B81DCE5DB7A9BD6EF692673AA9F3377F6CC32637A7BD681B5E02F20ECF5121BAE303BFDA188EB26ACC8BB2874C2FB7A7C088A18C2A2D3881D88C1368E8A3A8BE1FD1EFBD7BB6C45B9BF893ECA6DF3FAB5D7DF245B810B786B6147181470BB4EF023DB973C1331A78658AD44BEEBA89E211C795CC6E261EE9D1358721EC98D4E73B39E9487C7109088BF7774D2568DA5AE2840F2CF2400E29335F7B382D378F2825A4EDE6240D8DB17C8D66ED016120276D454EA32EC793FC8680202A114096D4E5FD634D6E2DB1196EC479C2EF20BAE04AF52F150CA5FD2F7F461063F3B352C76503926115895C233AA7588FF099DA3C9AE7A0E6CFC0517F6802B67C12E2F9CE82EA65FAA711F0B11F8F945536EF1DA7B93A584FDDE98386415B3D400154BD3D4A9AE0F1FCCBF397B071E0704E002A165AED6B531F3507048C983C0065999B50CE63B59BEE70BCD04E2C5CD5B96881ADEEEA28D2D60DE84430336C7040171BF68CFE0E189986BAA2D1BD33F21ADF996C5489302DEEC82F4F931814B8D2338D85A6E2FF766551E87379136AFFACFF9D2F').then((data) => {
    console.log(data);
});
  //# sourceMappingURL=index.js.map */
