const express = require('express')
const app = express()
let bodyParser = require('body-parser')

const path = require('path')
const Calculator=require('./calculator.js')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('../public'));

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

const PORT = process.env.PORT || 4000

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.post('/result',(req,res)=>{
    var n1 = parseInt(req.body.num1)
    var n2 = parseInt(req.body.num2)

    let adds = new Calculator(n1,n2)
    let products = new Calculator(n1,n2)
  

    
   var rd1 = document.getElementById("rd1")
   var rd2 = document.getElementById("rd2")

   if(rd1.checked==true){
    res.send(adds.add)
   }else if(rd2.checked==true){
    res.send(products.add)
   }

})


app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})