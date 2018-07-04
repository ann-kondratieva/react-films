import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FilmsSchema = new Schema({
    title: String,
    description: String,
    image: String
}, { timestamps: true });

export default mongoose.model('Film', FilmsSchema);