import express from 'express';
import data from './data/data';


const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use('/images', express.static('images'));

app.get('/', (req, res)=> {
    // res.send(`a get request with / route on port ${PORT}`);
    res.json(data);
});

app.get('/item/:id', (req, res)=> {
    //id by default is a String
    console.log(req.params.id);
    let user = Number(req.params.id);
    res.send(data[user]);
});

app.post('/newItem', (req, res)=> {
    res.send(`a post request with /newItem route on port ${PORT}`);
});

app.put('/item', (req, res)=> {
    res.send(`a put request with /item route on port ${PORT}`);
});

app.delete('/item', (req, res)=> {
    res.send(`a delete request with /item route on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Successful started a back end server on port ${PORT}`);
    console.log(data);
});
