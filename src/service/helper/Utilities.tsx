import { useEffect } from "react";
import { isTokenExist } from "../localstorage/TokenService"
// import {Dispatch, SetStateAction} from 'react'
import { useNavigate } from "react-router-dom";

function CheckforUserlogin() {
    const navigate = useNavigate();
    const result = isTokenExist();
    // useEffect(()=>{
    //     console.log("result")
    //     console.log("result", result)
    //     if(!result)
    //     {
    //         navigate("/Login");
    //     }

    // },)
}

export {
    CheckforUserlogin
}