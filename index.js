import express from 'express';
import data    from './data/data';


const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use('/images', express.static('images'));

app.get('/', (req, res) =>
{
    // res.send(`a get request with / route on port ${PORT}`);
    res.json(data);
});

app.get('/item/:id', (req, res, next) =>
    {
        //id by default is a String
        console.log(req.params.id);
        let user = Number(req.params.id);
        res.send(data[user]);
        next();
    },
    (req, res) =>
    {
        console.log('Did you get the right data ?');
    },
);

app.post('/newItem', (req, res) =>
{
    res.send(`a post request with /newItem route on port ${PORT}`);
});

// app.put('/item', (req, res)=> {
//     res.send(`a put request with /item route on port ${PORT}`);
// });
//
// app.get('/item', (req, res)=> {
// // app.get('/images', (req, res)=> {
// //     res.download('public/tent.jpg');
//     // res.redirect('/tent.jpg');
//     // res.end();
//     res.send(`a get request with /item route on port ${PORT}`);
// });
//
// app.delete('/item', (req, res)=> {
//     res.send(`a delete request with /item route on port ${PORT}`);
// });

app.route('/item')
    .get((req, res, next) =>
    {
        res.send(`a get request with /item route on port ${PORT}`);
        next();
    })
    .put((req, res, next) =>
    {
        res.send(`a put request with /item route on port ${PORT}`);
        next();
    })
    .delete((req, res, next) =>
    {
        res.send(`a delete request with /item route on port ${PORT}`);
        next();
    });

app.listen(PORT, () =>
{
    console.log(`Successful started a back end server on port ${PORT}`);
    console.log(data);
});
