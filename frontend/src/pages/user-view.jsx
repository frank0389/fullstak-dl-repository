import React, { useEffect, useState } from 'react';
import Table from '../components/table';
import Api from '../core/api/users'

const UserView = () => {

     const headers = ["#", "Usuario", "Nombre", "Apellido", "Correo"];
     const [users, setUsers] = useState([]);
     
     useEffect(() => {    
        Api.getUsers().then(res => {
            setUsers(res.data) 
         }).catch(err => {
            console.log(err);
         })
      },[]);

     return (
             <>
                <nav
                    className="relative flex w-full flex-wrap items-center justify-between  py-2  lg:py-4"
                    data-twe-navbar-ref>
                    <div className="flex w-full flex-wrap items-center justify-between px-3">
                        <button
                        type="button"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                        className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                         </svg>
                        </button>
                    </div>
                </nav>
               <Table headers={headers} data={users}/>
             </>
          )
        };

export default UserView;