import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String },
    image: { type: String },
    profilepic: { type: String },
    coverpic: { type: String },
    createAt: { type: Date, default: Date.now },
    ubdateAt: { type: Date, default: Date.now }

});


export default   mongoose.models.User || model('User', UserSchema);