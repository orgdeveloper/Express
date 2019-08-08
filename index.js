import express from 'express';
import data from './data/data';


const app = express();
const PORT = 3000;

app.get('/', (req, res)=> {
    // res.send(`a get request with / route on port ${PORT}`);
    res.json(data);
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
