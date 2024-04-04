const express = require('express')
var cors = require('cors')
const app = express()
const { connectToDb } = require('./config/db');
const router = require('./config/routes');
const auth = require('./midleware/auth');
const port = process.env.PORT || 3001;




app.use(cors());
app.use(auth);

app.use(express.json());

app.use('/', router);

app.listen(port, async ()=> {
    console.log(`Server is listening on port ${port}`);
    await connectToDb();
});