import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    "name": {
        type: String,
        required: true,
    },
    "description": {
        type: String,
        required: true
    },
    "is_active": {
        type: Boolean,
        default: true
    }
}, {
    collection: "Genres",
    timestamps: true
});

export default mongoose.model("Genres", GenreSchema);