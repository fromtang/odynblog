const Blog = require("../models/Blog");
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {

    // [GET] /
    home(req, res, next) {
      Blog.find({})
        .then(blog => res.render('home', {
          blog: multipleMongooseToObject(blog)
        }))
        .catch(next);
    }
  
    // [GET] /search
    search(req,res){
      res.render('search');
    }
    
  }
  
  module.exports = new SiteController;
  