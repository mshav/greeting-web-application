const mongoose = require('mongoose');
// const models = Models(process.env.MONGO_DB_URL || 'mongodb://localhost/greetings');

module.exports = function(mongoUrl){
    mongoose.Promise = global.Promise;
    mongoose.connect(mongoUrl);

    const Name = mongoose.model('Name', {
        name : String,
        counter : Number
    });

    return {
        Name
    };
}
