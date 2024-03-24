import {useEffect} from 'react'
import { isTokenExist } from "../service/localstorage/TokenService"
import React from 'react';
import { NavigateFunction, useNavigate } from "react-router-dom";

interface IProp {
    Component: React.ReactNode
}

export default function PrivateRoute(props: IProp)
 {
  const navigate = useNavigate();
  useEffect(()=>
  {
    CheckforUserlogins(navigate);
  },[navigate])

    return (
      <React.Fragment>{props.Component}</React.Fragment>)
      }

      function CheckforUserlogins(navigate: NavigateFunction) {
        if(!isTokenExist())
          navigate("/");
      }
