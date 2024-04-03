const express = require('express')
var cors = require('cors')
const app = express()
const port = 3001;
const router = require('./config/routes');

app.use(cors());
app.use(express.json());

app.use('/', router);

app.listen(port, ()=> {
    console.log(`Server is listening on port ${port}`);
});