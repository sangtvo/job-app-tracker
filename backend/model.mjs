// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500: Connection to the server has failed.' });
    } else  {
        console.log('Successfully connected to MongoDB JobApps collection using Mongoose.');
    }
});

// SCHEMA: Define the collection's schema.
const jobSchema = mongoose.Schema({
	company:    { type: String, required: true },
    title:    { type: String, required: true },
	min_salary: { type: Number, required: true, min: 0 },
    max_salary: { type: Number, required: true },
    date:     { type: Date, required: true, default: Date.now}
});

// Compile the model from the schema.
const JobApp = mongoose.model('JobApp', jobSchema);


// CREATE model *****************************************
const createJob = async (company, title, min_salary, max_salary, date) => {
    const job = new JobApp({ 
        company: company,
        title: title,
        min_salary: min_salary,
        max_salary: max_salary,
        date: date
    });
    return job.save();
}


// RETRIEVE models *****************************************
// Retrieve based on a filter and return a promise.
const retrieveJob = async () => {
    const query = JobApp.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveJobByID = async (_id) => {
    const query = JobApp.findById({_id: _id});
    return query.exec();
}


// UPDATE model *****************************************************
const updateJob = async (_id, company, title, min_salary, max_salary, date) => {
    const result = await JobApp.replaceOne({_id: _id }, {
        company: company,
        title: title,
        min_salary: min_salary,
        max_salary: max_salary,
        date: date
    });
    return { 
        _id: _id, 
        company: company,
        title: title,
        min_salary: min_salary,
        max_salary: max_salary,
        date: date
    }
}


// DELETE model based on _id  *****************************************
const deleteJobById = async (_id) => {
    const result = await JobApp.deleteOne({_id: _id});
    return result.deletedCount;
};

// Export our variables for use in the controller file.
export { createJob, retrieveJob, retrieveJobByID, updateJob, deleteJobById };