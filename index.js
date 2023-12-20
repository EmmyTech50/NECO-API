import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';



const app = express();
const PORT = 5000;


// add middleware
app.use(bodyParser.json());

//get the mongoose coonection
mongoose.connect('mongodb://localhost:27017/neco');
const conn = mongoose.connection;

// create an endpoint
app.get('/', (req, res) => {
    res.send('hello World!')
})


// listen to the port for any connection
app.post('/create', (req, res) => {
   const body = req.body; 
   const { email } = body;

    // store the user information to the database
    // create response body
   const userSuccessRes = { 
                    status: 'success',
                    message:`User registration for ${email} is successful `
                    };
    // send back a response message
   if(body) res.send(userSuccessRes);

   
   
})

app.post('/login', (req, res) => {
   const data = [
        { name: 'Anae', age: 40},
        { name: 'markus', age: 45},
   ];
   res.send();
})

app.post('/forgetPassword', (req, res) => {
   const data = [
        { name: 'Anae', age: 40},
        { name: 'markus', age: 45},
   ];
   res.send(data);
})

// create an endpoint
app.get('/', (req, res) => {
    res.send('hello World!')
})


// listen to the port for any connection
app.listen(PORT, () => {
    console.log(`NecoApp listening on port ${PORT}`)
})


// createAccount, login, forgetPassword,


//CRUD : Create Read Update Delete