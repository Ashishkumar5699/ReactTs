import { INavigation } from "../model/navigation/INavigation"
import LoginPage from '../pages/LoginPage';
import Dashboard from '../pages/Dashboard'
//import { Pagename } from "../Constants/Pagename"

export const RoutePaths: INavigation[] = [
    {
        Path: '/',
        Title: "Login",
        Component: <LoginPage />
    },
    {
        Path: "/Dashboard",
        Title: "Dashboard",
        Component: <Dashboard/>
    },

]