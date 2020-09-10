const Cource = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

let show = async (req, res,next) => {
    Cource.findOne({ slug:req.params.slug }).exec((err, user) => {
        console.log("Hello: "+req.params.slug)
        if (err) {
            return res.status(200).json("K co user");
        } else {
            return res.status(200).json(user);
        }
    });


    // Cource.findOne({ slug: req.params.slug }).then(cource => {
    //     res.json(cource)
        // res.render('courses/detail', {
        //     title: req.params.slug,
        //     cource: mongooseToObject(cource)
        // })
    // }).catch(next);
}

let showLists = async (req, res) => {
    const cource = await Cource.find();
    res.json(cource);
}
let create = (req, res, next) => {
    res.render('category/show')
}
let store = (req, res, next) => {
    const formData = req.body;
    formData.image = 'https://img.youtube.com/vi/' + formData.videoId + '/sddefault.jpg';
    console.log("formData.image: " + formData.image);
    const course = new Cource(formData);
    course.save().then(() => res.json(formData))
        .catch(error => {

        });

    // res.send('success')
}

let saveAwait = async (req, res) => {
    const formData = req.body;
    const course = new Cource(formData);
    try {
        const courseJson = await course.save();
        res.json(courseJson)
    } catch (error) {
        res.send(error);
    }
}
module.exports = {
    create,
    showLists,
    store,
    show,
    saveAwait
}