import express from 'express';

const app = express();
const PORT = 5000;

// create an endpoint
app.get('/', (req, res) => {
    res.send('hello World!')
})


// listen to the port for any connection
app.post('/hello', (req, res) => {
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