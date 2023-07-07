const mongo = require('mongoose');
const { Schema } = mongo;

const UserSchema = new Schema({
    name: String,
    surname: String,
    username: String,
    password: String,
});

const User = mongo.model('usuarios', UserSchema);

module.exports = User;