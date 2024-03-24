//const baseurl = "http://punjabornaments.service:2012";
const baseurl = "http://localhost:5000";
export class PathUrlForApi
{
    static Loginurl = (): string => 
    {
        return baseurl + "/api/Account/login"
    } 
}