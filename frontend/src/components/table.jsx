import React from 'react';

const Table = ({headers, data})=>{

     return (
     <div className="flex flex-col mt:">
     <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
       <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
         <div className="overflow-hidden">
           <table
             className="min-w-full text-center text-sm font-light text-surface dark:text-white">
             <thead
               className="border-b border-neutral-200 bg-[#332D2D] font-medium text-white dark:border-white/10">
               <tr>
                {
                      headers.map( header =>{
                       return  <th scope="col" className=" px-6 py-4">{header}</th>
                      })
                }
               </tr>
             </thead>
             <tbody>
                {
                    data.map(row => {
                            return <tr className="border-b border-neutral-200 dark:border-white/10">
                            <td className="whitespace-nowrap  px-6 py-4 font-medium">{row.id}</td>
                            <td className="whitespace-nowrap  px-6 py-4">{row.user}</td>
                            <td className="whitespace-nowrap  px-6 py-4">{row.name}</td>
                            <td className="whitespace-nowrap  px-6 py-4">{row.lastName}</td>
                            <td className="whitespace-nowrap  px-6 py-4">{row.email}</td>
                          </tr>
                    })
                }
             </tbody>
           </table>
         </div>
       </div>
     </div>
   </div>
   )
};

export default Table;