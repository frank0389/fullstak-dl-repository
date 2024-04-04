import React from 'react';
import Nav from './components/nav';
import UserView from './pages/user-view';

const App = ()=> {
    return (
        <>
         <Nav title="UsersApp"/>
         <UserView />
        </>
    );
}
export default App;
