// match route
const newsRoute = require('./news');
const siteRoute = require('./site');
const blogRoute = require('./blogs');

function route(app){

    app.use('/news', newsRoute);
    app.use('/blogs', blogRoute);
    app.use('/', siteRoute);
}

module.exports = route;
