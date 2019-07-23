const mongoose = require('mongoose')
const Schema = mongoose.Schema

const towerSchema = new Schema({

title:{},

address:{},

phone:{},

status:{}

}, {collection: 'tow-scrap'})

module.exports = mongoose.model('tower', towerSchema)