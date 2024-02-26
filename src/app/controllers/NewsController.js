class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug <biến ngẫu nhiên>
    show(req, res) {
        res.send('News Detail!');
    }
}

module.exports = new NewsController();
