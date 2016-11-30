module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index.ejs', {
            user : req.user
        });
    });
    app.get('/settings', function(req, res){
      res.render('settings.ejs', {
        user: req.user
      });
    });
    app.get('/likes', function(req, res) {
      res.render('likes.ejs', {
        user: req.user
      });
    });
    app.get('/follower', function(req, res) {
      res.render('follower.ejs', {
        user: req.user
      });
    });
    app.get('/following', function(req, res) {
      res.render('following.ejs', {
        user: req.user
      });
    });
};
