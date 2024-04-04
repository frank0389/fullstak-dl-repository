import axios from "axios";
import { SERVER_URL } from "../utils/enviroments";
import setUpAxiosInterceptors from "../axios/interceptor";

setUpAxiosInterceptors();

export const getUsers = async () => {
    try {
        const response = await axios.get(SERVER_URL+"/users");
        return response.data;
    } catch(err){
      console.log("Error "+JSON.stringify(err));
    }
};

const getUser = async (id)=>{

};

const cretaUser = async (user)=>{

};

const updateUser = async (user)=>{

};

const deleteUser = async (id)=>{

};



