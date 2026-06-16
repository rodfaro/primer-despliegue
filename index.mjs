import express from 'express'

const puerto = process.env.PORT || 4500

const app = express()

app.get('/test', (req, res)=>{
    res.send('funca')
})

app.listen(puerto, ()=>{
    console.log(`Servidor escuchando en http://localhost:${puerto}`)
})