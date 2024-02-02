import React from "react";
import {Routes, Route, Redirect} from "react-router-dom"

import Home from "../components/home/home";
import UserCrud from "../components/user/userCrud";

export default props =>
<Routes>
    {/* exact é utilizado para que a rota da pasta raiz seja extritamente a home */}
    <Route exact path="/" element={<Home />}/>
    <Route path='/users' element={<UserCrud />}/>

    {/* definimos co path="*" que qualquer link que não vá para as pastas anteriores volte para home */}
    <Route path='*' element={<Home />}/>
</Routes>