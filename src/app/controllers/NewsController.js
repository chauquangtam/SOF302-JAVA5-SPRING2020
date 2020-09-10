const Cource=require('../models/Course');

class NewsController {
    index(req,res ) {
        res.render('news',{
            title: 'News Page'
        });
       
    }

    show(req,res) {
        res.send('new Details');
    }
}
module.exports=new NewsController;