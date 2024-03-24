import {POSTMethod} from "../common/restservice.ts"
import { PathUrlForApi } from "../../assets/configurations.ts"
import { ResponseResult } from "../../model/ResponseResult.ts"
import { ILoginUser } from "../../model/auth/ILoginUser.ts"

// function Login(data: FormData, ShowToster: (text: string) => void) {
//     throw new Error('Function not implemented.');
// }
const LoginUser = async (request: FormData, ShowToster: (text: string) => void) => {
    const data = {
        Username : request.get("email"),
        Password : request.get("password")
    }
    const response = await POSTMethod<ResponseResult<ILoginUser>>(data, "https://localhost:5001/api/Account/login");// PathUrlForApi.Loginurl());
    if (response != null && response != undefined)
    {
        const Requiredreqponse: ResponseResult<ILoginUser> = response.data;
        ShowToster("Login Sucessfully");
        return Requiredreqponse
    }
}

export {
    LoginUser
}