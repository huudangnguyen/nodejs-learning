const news = require('./news.route');
const site = require('./site.route');

function route(app) {

    app.use('/news', news);
    app.use('/', site);

}

module.exports = route;
