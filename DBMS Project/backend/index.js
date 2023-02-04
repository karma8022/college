import express from "express"
import mysql from "mysql"
import cors from "cors"
const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"neeraj@123",
    database:"test"
})

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.json("Hello this is the backend")
})

app.get("/books",(req,res)=>{
    const q = "SELECT * FROM books"
    db.query(q,(err,data)=>{
        if(err) return res.json("No books")
        return res.data
    })
})


app.post("/books",(req,res)=>{
    const q = "INSERT INTO books (`title`,`desc`,`cover`) VALUES(?)"
    const values = [req.body.title,req.body.desc,req.body.price,req.body.cover]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json("No books")
        return res.data
    })
})

app.listen(8800, ()=>{
    console.log("Connected to backend!")
})