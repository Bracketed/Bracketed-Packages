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
declare class Client {
    static login(ClientToken: string): Promise<void | RBLXLoginResponse>;
    static logout(ClientToken: string): Promise<void | RBLXLoginResponse>;
}
export { Client };
//# sourceMappingURL=RoClient.d.ts.map