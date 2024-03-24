import { Routes, Route } from 'react-router-dom'
import { RoutePaths } from "../Constants/RoutePaths"
import PrivateRoute from "../router/PrivateRoute"
import { INavigation } from "../model/navigation/INavigation"
// import { NavigateFunction, useNavigate } from "react-router-dom";
// import { useDebugValue, useEffect } from 'react';
// import { isTokenExist } from '../service/localstorage/TokenService';


function Router() {
    // const navigate = useNavigate();

    // useEffect(() =>
    // {
    //     CheckforUserlogins(navigate);
    // },[navigate])
    return (
        <Routes>
            {
                RoutePaths.map((data: INavigation, i: number) => {
                    return <Route key={i} path={data.Path} element={<PrivateRoute Component={data.Component} />} />
                })
            }
        </Routes>
    );

    // function CheckforUserlogins(navigate: NavigateFunction) {
    //     let result = isTokenExist()
    //     if(!result)
    //     {

    //         console.log("asdnjsvb",result)
    //         navigate("/");
    //     }
    //   }
}

export default Router;
