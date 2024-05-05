import React, { useContext } from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes} from "../routes";
import { MAIN_ROUTE } from "../utils/consts";
import { Context } from "../index";
// // import {UserStore} from "../store/UserStore";


export default function  AppRouter() {
  const {user} = useContext(Context)
  console.log(user)
  
  return (
    <Routes>
      {user.isAuth && authRoutes.map(({path, Component})=>
        <Route key = {path} path={path}  Component={Component} exact/>
      )}
      {publicRoutes.map(({path, Component})=>
        <Route key = {path} path={path}  Component={Component} exact/>
      )}
      { <Route path="*" element={ <Navigate to={MAIN_ROUTE} replace={true} /> } /> }
    </Routes>
  );
}