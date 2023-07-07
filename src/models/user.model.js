const mongo = require('mongoose');
const { Schema } = mongo;

const UserSchema = new Schema({
    name: { trype: String },
    surname: { type: String },
    username: { type: String },
    password: { type: String }
});

const User = mongo.model('usuario', UserSchema);

module.exports = User;