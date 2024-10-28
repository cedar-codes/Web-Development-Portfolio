// Models for the Movie Collection

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
        res.status(500).json({ Error: 'Failed connection to MongoDB.' });
    } else  {
        console.log('Success: The database successfully connected to MongoDB.');
    }
});

// SCHEMA: Define the collection's schema.
const paintingSchema = mongoose.Schema({
	artTitle:    { type: String, required: true },
    day:     { type: Date, required: true, default:Date.now},
    medium: {type: String, required: true},
    width:     { type: Number, required: true },
    height:     { type: Number, required: true }
});

// Compile the model from the schema 
// by defining the collection name "Paintings".
const paintings = mongoose.model('Paintings', paintingSchema);


// CREATE model *****************************************
const addPainting = async (artTitle, day, medium, width, height) => {
    const painting = new paintings({ 
        artTitle: artTitle, 
        day: day,
        medium: medium,
        width: width,
        height: height
    });
    return painting.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const getPaintings = async () => {
    const query = paintings.find();
    return query.exec();
}

// RETRIEVE by ID
const getPaintingByID = async (_id) => {
    const query = paintings.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deletePaintingById = async (_id) => {
    const result = await paintings.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updatePainting = async (_id, artTitle, day, medium, width, height) => {
    const result = await paintings.replaceOne({_id: _id }, {
        artTitle: artTitle, 
        day: day,
        medium: medium,
        width: width,
        height: height
        
    });
    return { 
        _id: _id, 
        artTitle: artTitle, 
        day: day, 
        medium: medium,
        width: width, 
        height: height 
    }
}

// EXPORT the variables for use in the controller file.
export { addPainting, getPaintings, getPaintingByID, updatePainting, deletePaintingById }