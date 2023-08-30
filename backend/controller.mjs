import 'dotenv/config';
import express from 'express';
import * as jobApps from './model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/log', (req,res) => { 
    jobApps.createJob(
        req.body.company, 
        req.body.title, 
        req.body.min_salary,
        req.body.max_salary,
        req.body.date
        )
        .then(movie => {
            res.status(201).json(movie);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'The document creation failed, please try again.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/log', (req, res) => {
    jobApps.retrieveJob()
        .then(movie => { 
            if (movie !== null) {
                res.json(movie);
            } else {
                res.status(404).json({ Error: 'The requested document could not be found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'The document retrieval was unsuccessful.' });
        });
});


// RETRIEVE by ID controller
app.get('/log/:_id', (req, res) => {
    jobApps.retrieveJobByID(req.params._id)
    .then(movie => { 
        if (movie !== null) {
            res.json(movie);
        } else {
            res.status(404).json({ Error: 'The document you are looking for could not be found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'The document retrieval encountered an error, please try again.' });
    });

});

// UPDATE controller ************************************
app.put('/log/:_id', (req, res) => {
    jobApps.updateJob(
        req.params._id, 
        req.body.company,
        req.body.title,
        req.body.min_salary,
        req.body.max_salary,
        req.body.date
    )
    .then(movie => {
        res.json(movie);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'The document cannot be updated.' });
    });
});


// DELETE Controller ******************************
app.delete('/log/:_id', (req, res) => {
    jobApps.deleteJobById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'The document does not exist.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'The document cannot be deleted.' });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});