// Controllers for the painting Collection

import 'dotenv/config';
import express from 'express';
import * as paintings from './paintings-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/paintings', (req,res) => { 
    paintings.addPainting(
        req.body.artTitle, 
        req.body.day.slice(0,10),
        req.body.medium,
        req.body.width, 
        req.body.height
        )
        .then(painting => {
            console.log(`Added "${painting.artTitle}" to the "paintings" collection.`);
            res.status(201).json(painting);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Painting not created, check parameter input.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/paintings', (req, res) => {
    paintings.getPaintings()
        .then(paintings => { 
            if (paintings !== null) {
                console.log(`All paintings were retrieved from the "paintings" collection.`);
                res.json(paintings);
            } else {
                res.status(404).json({ Error: 'No paintings found in the "paintings" collection.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Paintings not found, check parameters.' });
        });
});


// RETRIEVE by ID controller
app.get('/paintings/:_id', (req, res) => {
    paintings.getPaintingByID(req.params._id)
    .then(painting => { 
        if (painting !== null) {
            console.log(`Using it's ID, here is "${painting.artTitle}".`);
            res.json(painting);
        } else {
            res.status(404).json({ Error: 'Painting ID not found in "paintings" collection.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Painting ID not found, check parameters.' });
    });

});


// UPDATE controller ************************************
app.put('/paintings/:_id', (req, res) => {
    paintings.updatePainting(
        req.params._id, 
        req.body.artTitle, 
        req.body.day,
        req.body.medium,
        req.body.width, 
        req.body.height
    )
    .then(painting => {
        console.log(`"${painting.artTitle}" was successfully updated.`);
        res.json(painting);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Painting ID not found, check parameters.' });
    });
});


// DELETE Controller ******************************
app.delete('/paintings/:_id', (req, res) => {
    paintings.deletePaintingById(req.params._id)
        .then(count => {
            if (count === 1) {
                console.log(`${count} painting(s) was deleted using it's ID.`);
                res.status(200).send({ Success: 'Painting successfully deleted from the "paintings" collection.' });
            } else {
                res.status(404).json({ Error: 'Painting ID not found in the "paintings" collection.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Painting not deleted or not found.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});