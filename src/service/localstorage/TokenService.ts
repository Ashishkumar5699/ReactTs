
const authtoken: string = "authtoken";

const setToken = async (token: string) => {
    await localStorage.setItem(authtoken, token)
}

const getToken = (): string => {
    const token = localStorage.getItem(authtoken)
    return token??'';
}

const isTokenExist = (): boolean => {
    const token = localStorage.getItem(authtoken)
    return token?.length != 0;
}

export {
    setToken,
    getToken,
    isTokenExist
}