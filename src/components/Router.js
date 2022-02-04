import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = ({isLoggedIn}) => {
    return(
        <Router> 
            <Routes> 
                {isLoggedIn ? ( 
                    <> 
                    {/* fragment : 동일한 요소를 나열하고 싶은데 부모가 없을 때 사용 <> */}
                    <Route path='/' element={<Home/>}/> 
                    </> 
                ) : ( 
                    <Route path='/' element={<Auth/>}/> 
                )} 
            </Routes> 
        </Router> 
    ); 
};

export default AppRouter;