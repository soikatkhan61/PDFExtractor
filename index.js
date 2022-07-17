const express = require("express")


//import controller 
const {uploadPDFGetController} = require('./controllers/uploadPDFController')

const app = express()


app.get("/get-pdf",uploadPDFGetController)


app.get('/',(req,res)=>{
    res.send("hi")
})

//setup view engine
app.set('view engine' ,'ejs')
app.set('views','views')




app.listen(3000,()=>{
    console.log("App listen on port 3000")
});