const path=require("path");
const express=require('express'); 
const exphand=require('express-handlebars');
const parser=require('body-parser');

const skyrouts=require('./routs/index');
const adminRouts=require('./routs/admin');

const mongoose=require('mongoose');
const app=new express();

mongoose.connect('mongodb://localhost:27017/skyshopdb',{ useNewUrlParser: true})
.then(res =>{console.log('Mongodb connected');})
.catch(err =>{console.log('mongodb connected error');});
require('events').EventEmitter.prototype._maxListeners = 100;
app.engine('handlebars',exphand(
  {
    defaultLayout:'main',
    layoutsDir:path.resolve(__dirname,'views/layouts')
  }));

app.set('view engine','handlebars');
app.use(express.static(path.resolve(__dirname,'contents')));
app.use(parser.urlencoded({extended:false}));
app.use(parser.json());

app.use('/jquery',express.static(path.resolve(__dirname,'node_modules/jquery/dist/')));
app.use('/popper',express.static(path.resolve(__dirname,'node_modules/popper.js/dist/')));
app.use('/jquery_validation',express.static(path.resolve(__dirname,'node_modules/jquery-validation/dist/')));
app.use('/jquery_form_validator',express.static(path.resolve(__dirname,'node_modules/jquery-form-validator/form-validator/')));
app.use('/bootstrap',express.static(path.resolve(__dirname,'node_modules/bootstrap/dist/')));
app.use('/bootstrap-table',express.static(path.resolve(__dirname,'node_modules/bootstrap-table/dist/')));
app.use('/handlebars',express.static(path.resolve(__dirname,'node_modules/handlebars')));



app.use(skyrouts);
app.use(adminRouts);


app.listen('9597',()=>{
   console.log('app listening on 9597 port');
});


