import { ILoginUser, defaultsLoginUser } from "../../model/auth/ILoginUser"
import { setToken, getToken, isTokenExist } from "./TokenService"

const loginuser_name: string = "loginuser_name";
//const loginuser_token: string = "loginuser_token";

export const setuserDetail = async (data: ILoginUser) => {
    await localStorage.setItem(loginuser_name, data.UserName)
    await setToken(data.Token)

}

export const getuserDetail = async () => {
    const userdetail: ILoginUser = {
        ...defaultsLoginUser,
    }

    const isexist: boolean = isTokenExist()
    if (isexist) {
        userdetail.UserName = await localStorage.getItem(loginuser_name) ?? '';
        userdetail.Token = await getToken()
        userdetail.IsUserloggedin = userdetail.Token.length != 0;
        }
    return userdetail;
}

export const removeuserDetail = async () => {

    const defaultdata: ILoginUser = {
        ...defaultsLoginUser
    } 
    setuserDetail(defaultdata);
}
