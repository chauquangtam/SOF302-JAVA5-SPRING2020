const Cource = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    index(req, res, next) {
        // res.render('home');
        // res.json({ name: 'tobi' })

        Cource.find({}).then(cources => {
            res.render('home', {
                title: 'Trang chủ',
                cources: mutipleMongooseToObject(cources)
            });
        }).catch(error => next(error));
        // Cource.find({}, function (err, cources) {
        //     if (!err) {
        //         res.json(cources);
        //         return;
        //     }
        //     next(err);
        //     res.status(400).json({ error: 'Error' });
        //     // docs.forEach



    }
    search(req, res) {
        res.send('search');
    }
}
module.exports = new SiteController();