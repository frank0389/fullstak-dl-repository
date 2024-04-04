const express = require('express')
var cors = require('cors')
const app = express()
const port = 3001;
const { connectToDb } = require('./config/db');
const router = require('./config/routes');
const auth = require('./midleware/auth');




app.use(cors());
app.use(auth);

app.use(express.json());

app.use('/', router);

app.listen(port, async ()=> {
    console.log(`Server is listening on port ${port}`);
    await connectToDb();
});