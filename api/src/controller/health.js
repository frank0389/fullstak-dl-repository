const os = require('os');
const pkg = require('../../package.json');
const dotenv = require('dotenv');

dotenv.config();

const get = async (req, res) => {
    const healty = {
        app: {
         version: pkg.version,
         name: pkg.name,
         environment: process.env.NODE_ENV
     },
     hostname: os.hostname(),
     MYSQLConnection: 'Ok',
   };
   res.send(healty)
};

module.exports = {
    get
}