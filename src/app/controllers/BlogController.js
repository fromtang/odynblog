const Blog = require("../models/Blog");
const { mongooseToObject } = require('../../util/mongoose');

class BlogController {

    // [GET] /blog/:slug
    show(req, res, next) {
        Blog.findOne({ slug: req.params.slug })
          .then(blog => { 
                res.render('blogs/show', { blog: mongooseToObject(blog) });
            })
          .catch(next);
    }

    // [GET] /blog/create
    create(req, res, next){
        res.render('blogs/create');
    }

    // [POST] /blog/store
    store(req, res, next){
        const blog = new Blog(req.body);
        blog.save()
            .then(() => res.redirect())
            .catch(error => {
                
            })
    }

  }
  
  module.exports = new BlogController;
  