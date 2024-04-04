import React, { useEffect } from 'react';
import Table from '../components/table';


const UserView = () => {

     const headers = ["#", "Usuario", "Nombre", "Apellido", "Correo"];
     const users = [{id:1, user:"Frank", name:"frank", lastName:"Nicolau",email:"frank.nicolau03@gmail.com" }];
     
     useEffect(()=>{

     },[]);
     return (
             <>
                <nav
                    className="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4"
                    data-twe-navbar-ref>
                    <div className="flex w-full flex-wrap items-center justify-between px-3">
                        <button
                        type="button"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                        className="me-3 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                         New
                        </button>
                    </div>
                </nav>
               <Table headers={headers} data= {users}/>
             </>
          )
        };

export default UserView;