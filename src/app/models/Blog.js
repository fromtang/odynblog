const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Blog = new Schema({
    title: { type: String, required: true},
    description: { type: String},
    slug: { type: String, slug: 'title', unipue: true},
    content:{ type: String }
},{
    timestamps: true,
});


module.exports = mongoose.model('Blog', Blog);