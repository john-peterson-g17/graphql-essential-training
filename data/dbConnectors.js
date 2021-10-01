import mongoose, { mongo } from 'mongoose';
import Sequelize from 'sequelize';
import _ from 'lodash';
import casual from 'casual';

// Mongo Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://express-mongo:27017/friends', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(
    () => { console.log('Connected!'); },
    err => { console.log(err); }
);

const friendSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    language: {
        type: String
    },
    email: {
        type: String
    },
    contacts: {
        type: Array
    }
});

const Friends = mongoose.model('friends', friendSchema);

// SQL
const sequelize = new Sequelize('database', null, null, {
    dialect: 'sqlite',
    storage: './alien.sqlite',
});

const Aliens = sequelize.define('aliens', {
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    planetName: { type: Sequelize.STRING },
})

export { Friends, Aliens };