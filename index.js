const express=require('express')
const path=require('path')
const exphbs=require('express-handlebars')
const logger=require('./middleware/logger')
const members=require('./Members')
const app=express()

app.engine('handlebars', exphbs.engine({defaultLayout:"main"}));
app.set('view engine', 'handlebars');
app.get('/',(req,res)=>{
  res.render('index',{
    title:'Members App',
    members
  })
})


// app.use(logger)

// app.get('/',(req,res)=>{
// res.sendFile(path.join(__dirname,"public",'index.html'))
// })



app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,"public")))
 

app.use('/api/members',require('./routes/api/members'))
const PORT = process.env.PORT||5000;
app.listen( PORT ,()=>console.log(`server started on ${PORT} `))