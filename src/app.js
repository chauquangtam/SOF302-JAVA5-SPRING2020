const  path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const port = 5001;
const route=require('./routers');
const db=require('./config/db/index');

db.connect();
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,'public/')));

// app.use(bodyParser.urlencoded()); // to support URL-encoded bodies
// app.use(express.urlencoded(){
//   extended : true
// })
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.engine('.hbs', exphbs({
  defaultLayout: 'main', 
  extname: '.hbs',
  layoutsDir:'src/resources/views/layouts',
  partialsDir:'src/resources/views/partials'
}));


app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources','views'));

console.log(path.join(__dirname, 'resources/views'));

route(app);

app.use(morgan("dev"));
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})