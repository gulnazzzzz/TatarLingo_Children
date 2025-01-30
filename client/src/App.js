import 'normalize.css';
import React , {useContext, useEffect, useState} from 'react';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
const App = observer(() => {

    return (
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    );
});

export default App;
