import mongoose from '../index'

const Schema = mongoose.Schema

const User = Schema({
    id: {
        type: Number,
        unique: true
    },
    username: {
        type: String,
    },
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
});

export default mongoose.model('User', User);