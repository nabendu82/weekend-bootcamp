import express from 'express';
import mongoose from 'mongoose';
import Cards from'./dbCards.js';
import Cors from 'cors';

//App config
const app = express();
const PORT = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://admin:admin@cluster0.dkdkj.mongodb.net/tinderDB?retryWrites=true&w=majority'

//Middleware
app.use(express.json());
app.use(Cors({
    origin: 'https://tinder-weekend-mern.web.app',  //react's address
    credentials: true
}));

//DB Config
mongoose.connect(connection_url);

//API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello World!'));

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
});

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
});

//Listener
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
