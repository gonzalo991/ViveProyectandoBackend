const mongo = require('mongoose');
const URI = process.env.MONGO_URI;

console.log(URI);

mongo.connect(URI).then(console.log("Database connected on port : 27017"))
.catch(err => console.error(`Database error : ${err.message}`));

module.exports = mongo;