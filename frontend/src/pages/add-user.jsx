import React from 'react';

const AddUser = () =>{

    return (
        <form className="w-full max-w-lg  m-8">
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-first-name">
                First Name
            </label>
            <input className="appearance-none block w-full border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500" id="grid-first-name" type="text" placeholder="john" />
            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-last-name">
                Last Name
            </label>
            <input className="appearance-none block w-full   border rounded py-3 px-4 leading-tight focus:outline-none focus:border-blue-500" id="grid-last-name" type="text" placeholder="Doe"/>
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-password">
                Email
            </label>
            <input className="appearance-none block w-full   border rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-blue-500" id="grid-password" type="text" placeholder="john.doe03@gmail.com" />
            <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-password">
                UserName
            </label>
            <input className="appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500" id="grid-password" type="text" placeholder="john.doe03" />
            <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-password">
                Password
            </label>
            <input className="appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500" id="grid-password" type="password" placeholder="******************" />
               <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 ml-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancel</button>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 ml-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
    </form>
    )
}

export default AddUser;