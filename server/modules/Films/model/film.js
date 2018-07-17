import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FilmsSchema = new Schema({
    title: String,
    description: String,
    image: String,
    rating: Number,
    usersMarks: Array,
    images: Array,
    comments: Array
}, { timestamps: true });

export default mongoose.model('Film', FilmsSchema);