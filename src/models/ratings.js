import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RatingSchema = new Schema({
    "name": {
        type: String,
        required: true,
    },
    "description": {
        type: String,
        required: true
    },
    "age": {
        type: Number,
        required: true
    },
    "is_active": {
        type: Boolean,
        default: true
    }
}, {
    collection: "Ratings",
    timestamps: true
});

export default mongoose.model("Ratings", RatingSchema);