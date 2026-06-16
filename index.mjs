import 'dotenv/config'
import express from 'express'
import {Pool} from 'pg'

const puerto = process.env.PORT || 4500

//consulta
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB
});

const app = express()

app.get('/test', (req, res)=>{
    res.send('funca')
})

app.get('/mensajes', async (req, res)=>{
    const resultado = await pool.query('SELECT * FROM mensajes')
    res.json(resultado.rows);

})

app.listen(puerto, ()=>{
    console.log(`Servidor escuchando en http://localhost:${puerto}`)
})