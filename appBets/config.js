require('dotenv').config()
module.exports = {
    mongoURI : process.env.MONGO_STRING,
    PORT : process.env.PORT || 3000,
}