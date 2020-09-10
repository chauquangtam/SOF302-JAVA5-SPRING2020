const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cource = new Schema({
    name: { type: String, maxLength:255 },
    videoId: { type: String, maxLength:600 },
    level: { type: String, maxLength:255 },
    description: { type: String, maxLength:255 },
    image: { type: String, maxLength:255 },
    slug: { type: String, maxLength:255 },
    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now },
    // buff: Buffer

  },{
    timestamps:true
  });
  module.exports  = mongoose.model('Cource', Cource);
