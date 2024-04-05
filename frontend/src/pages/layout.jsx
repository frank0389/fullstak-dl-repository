import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { Outlet } from "react-router-dom";

const Layout = ()=> {
    return (
        <div className="flex flex-col h-screen">
         <Nav title="USERS"/>
         <main>
            <Outlet />
         </main>
         <Footer text="Digital Learning" url="//https://www.dl.cl/"/>
        </div>
    );
}
export default Layout;
