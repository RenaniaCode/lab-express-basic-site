const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/',(req,res,next)=>{
    res.send(`<!doctype html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Conact</title>
            <link href='styles/stylesheet.css' rel='stylesheet'/>
        </head>
        <body id='home'>
            <h1>Welcome to Reus' page</h1>
            <p>The loyalest Super Star</p>
            <img src='images/Captain.jpeg' width='300' height='300'/>
            <button href='http://localhost:3001/about'>About</button>
        </body>
    </html>`)
})

app.get('/about',(req,res,next)=>{
    res.send(`<!doctype html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Conact</title>
            <link href='styles/stylesheet.css' rel='stylesheet'/>
        </head>
        <body id='about'>
            <p>Age: 32 yo</p>
            <p>Level: Super Star</p>
            <p>Team: Borussia Dortmund </3</p>
            <br>
            <img src='images/Reus.jpeg' width='400' height='500'/>
        </body>
    </html>`)
})

app.get('/works',(req,res,next)=>{
    res.send(`<!doctype html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Conact</title>
            <link href='styles/stylesheet.css' rel='stylesheet'/>
        </head>
        <body id='works'>
            <p>Home: Signal Iduna Park</p>
            <br>
            <img src='images/Home.jpeg' width='400' height='500'/>
            <p>Position: Offensive Midfielder</p>
            <p>Role: Captain</p>
            <p>Relevance: Leyend</p>
        </body>
    </html>`)
})

app.listen(3001,()=>{
    console.log('Estoy corriendo el 3001')
})