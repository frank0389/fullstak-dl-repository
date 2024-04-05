const axios = require('axios').default;
import { SERVER_URL } from "../utils/enviroments";
import { API_KEY } from "../utils/enviroments";


const http = axios.create({
    baseURL: SERVER_URL,
    timeout: 3000,
    headers: {'apikey': API_KEY}
  });

 const getUsers = () => {
     return http.get("/users");
};

const getUser = async (id)=>{

};

const cretaUser = async (user)=>{

};

const updateUser = async (user)=>{

};

const deleteUser = async (id)=>{

};

export default {
   getUsers,
};