import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FilmsSchema = new Schema({
    title: String,
    description: String,
    image: String,
    rating: Number
}, { timestamps: true });

export default mongoose.model('Film', FilmsSchema);