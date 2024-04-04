
const { INTERNAL_SERVER_ERROR, NOT_FOUND } = require('http-status-codes');
const User = require('../model/user');

const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch(err) {
        res.status(err.status || INTERNAL_SERVER_ERROR).json({
            name: (err.constructor && err.constructor.name) || 'Error',
            message: err.message || 'An unknown error happened',
            errors: err.errors || [],
          });
    }
};

const getUser = async (req, res) => {
    try {
        const userId  = req.params['id'];
        
        const user = await User.findOne({ where: { id: userId } });
         if(user !== null)
           res.status(200).json(user);
        else {
            res.status(NOT_FOUND).json({
                name:  'NotFoundError',
                message: 'User not exist in db',
                errors: [],
              });
        }
    } catch(err) {
        res.status(err.status || INTERNAL_SERVER_ERROR).json({
            name: (err.constructor && err.constructor.name) || 'Error',
            message: err.message || 'An unknown error happened',
            errors: err.errors || [],
          });
    }
};

const getUsers = async (req, res) =>{
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch(err) {
        res.status(err.status || INTERNAL_SERVER_ERROR).json({
            name: (err.constructor && err.constructor.name) || 'Error',
            message: err.message || 'An unknown error happened',
            errors: err.errors || [],
          });
    }
};

const searchUser = async (req, res) => {
    try {
        const property = req.query.property;
        const value = req.query.value;
        const limit = Number(req.query.limit) || 10;
        const offset = Number(req.query.offset) || 0;
        

        let option = {};
        option[property] = value;
        console.log(option);
        const users = await User.findAll({
            where: option,
            offset: offset, 
            limit: limit
          });
        res.status(200).json(users);
    } catch(err) {
        res.status(err.status || INTERNAL_SERVER_ERROR).json({
            name: (err.constructor && err.constructor.name) || 'Error',
            message: err.message || 'An unknown error happened',
            errors: err.errors || [],
          });
    }
};

const updateUser = async (req, res) => {
    try {
        const userId  = req.params['id'];
        const user = await User.findOne({ where: { id: userId } });
        if(user == null) {
            res.status(NOT_FOUND).json({
                name:  'NotFoundError',
                message: 'User not exist in db',
                errors: [],
              });
         }
         else {
            const [count, updateRows] = await User.update(req.body,{ where: { id: userId }, returning: true });
             res.status(200).json(req.body);
         }
       
    } catch(err) {
        res.status(err.status || INTERNAL_SERVER_ERROR).json({
            name: (err.constructor && err.constructor.name) || 'Error',
            message: err.message || 'An unknown error happened',
            errors: err.errors || [],
          });
    }
};

const deleteUser = async (req, res) => {
    try {
    const userId  = req.params['id'];
    const user = await User.findOne({ where: { id: userId } });
    if(user == null) {
        res.status(NOT_FOUND).json({
            name:  'NotFoundError',
            message: 'User not exist in db',
            errors: [],
          });
     }
     else {
        await User.destroy({ where: { id: userId},
        });
        res.status(200).send('Ok');
     }
    } catch(err) {
        res.status(err.status || INTERNAL_SERVER_ERROR).json({
            name: (err.constructor && err.constructor.name) || 'Error',
            message: err.message || 'An unknown error happened',
            errors: err.errors || [],
          });
    }
};

module.exports = {
    createUser,
    getUser,
    getUsers,
    searchUser,
    updateUser,
    deleteUser
}