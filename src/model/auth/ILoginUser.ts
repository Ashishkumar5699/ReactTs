export interface ILoginUser {
    UserName: string,
    Password: string,
    Token: string,
    Device: string,
    IsUserloggedin: boolean
}
export const defaultsLoginUser: Pick<ILoginUser, 'UserName' | 'Password' | 'Token' | 'Device' | 'IsUserloggedin'> = {
    UserName: '',
    Password: '',
    Token: '',
    Device: 'website',
    IsUserloggedin: false
};