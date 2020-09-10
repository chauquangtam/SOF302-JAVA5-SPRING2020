const newRouter=require('./news');
const siteRouter=require('./site');
const coursesRouter=require('./courses');
function route(app){
    app.use('/news',newRouter);
    app.use('/courses',coursesRouter);
    app.use('/',siteRouter);
    // app.get('/', (req, res) => {
    //     res.render('home',{title :"Home Page"});
    // })
   
    // app.get('/search', (req, res) => {
    //   res.render('search',{title :"Search Page"});
    // })
    // app.post('/search', (req, res) => {
    //   res.send('');
    // })
}
module.exports=route;