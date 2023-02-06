import React from "react";
import Admin from "../admin/Admin";
import Home from "../../stateFull/home/Home";
import {Route,Routes} from "react-router-dom";
import NavBar from '../navbar/Navbar'

export default function Site(){
    return (
       
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/admin" element={<Admin/>}/>
            </Routes>
            
          
        </div>
       
    )
};