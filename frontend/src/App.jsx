import React from 'react';
import UserView from './pages/user-view';
import { BrowserRouter, Outlet, Route, Routes, Router } from "react-router-dom";
import AddUser from './pages/add-user';
import Layout from './pages/layout';
import About from './pages/about';
import NoPage from './pages/nopage';

const App = ()=> {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<UserView/>} />
                    </Route>
                    <Route path='/new' element={<AddUser/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='*' element={<NoPage/>} />
            </Routes>
         <Outlet />
        </BrowserRouter>
    );
}
export default App;
