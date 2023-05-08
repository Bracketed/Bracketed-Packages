interface RblxPlayer {
    description: string;
    created: string;
    isBanned: false | true;
    externalAppDisplayName: string;
    hasVerifiedBadge: false | true;
    id: number;
    name: string;
    DisplayName: string;
}
interface UsernameInterface {
    usernames: string[];
    excludeBannedUsers: boolean;
}
interface UserIdInterface {
    userIds: string[];
    excludeBannedUsers: boolean;
}
interface FetchedUser {
    previousUsernames: string[];
    hasVerifiedBadge: false | true;
    id: number;
    name: string;
    displayName: string;
}
interface RequestedMember {
    requestedUsername: string;
    hasVerifiedBadge: false | true;
    id: number;
    name: string;
    displayName: string;
}
interface HistoryResponse {
    previousPageCursor: string | null;
    nextPageCursor: string | null;
    data: [];
}
declare class UsersV1 {
    static search(username: string): Promise<void | FetchedUser[]>;
    static fetch: {
        get(userid: string | number): Promise<void | RblxPlayer>;
        byUsername(UserSubmission: UsernameInterface): Promise<void | RequestedMember[]>;
        byUserId(UserSubmission: UserIdInterface): Promise<void | RequestedMember[]>;
        nameHistory(userid: string | number, userAmount: number): Promise<void | HistoryResponse>;
    };
}
export { UsersV1 };
//# sourceMappingURL=Users.d.ts.map