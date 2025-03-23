const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'kali',      
    password: 'python', 
    database: 'irfandb'
});

// let createRandomUser = () => {
//     return [
//         faker.number.int({ min: 1000, max: 9999 }), 
//         faker.internet.username(),  
//         faker.internet.email(),
//         faker.internet.password()      
//     ];
// };






app.get("/", (req, res) => {
    let q = `SELECT COUNT(*) AS count FROM users`;  

    connection.query(q, (err, result) => {
        if (err) {
            console.log("MySQL Query Error:", err.message);
            return res.status(500).send("Database Error");
        }

        let count = result[0].count;  
        res.render("home",{count});  
    });
});

app.get("/users",(req,res)=>{
    let q=`SELECT * FROM users`
    connection.query(q,(err,result)=>{
        if(err){
            console.log("somthing error",err.message)
        }

        let alldata=result
        res.render("users.ejs",{alldata})
    })
    

})


app.get("/users/:id/edit",(req,res)=>{
    const {id}=req.params
    let q=`SELECT * FROM users WHERE id=?`;
    connection.query(q,id,(err,result)=>{
        if(err){
            console.log("somthing error",err.message)
        }

        let alldata=result[0]
        res.render("edit.ejs",{alldata})
    })
})


app.patch("/users/:id",(req,res)=>{
    const {id}=req.params
    const {password: frompass, newusername } = req.body;
    let q=`SELECT * FROM users WHERE id=?`;
    connection.query(q,id,(err,result)=>{
        if(err){
            console.log("somthing error",err.message)
        }

        let user=result[0]
        // res.send(alldata)
        if (frompass!=user.password) {
            res.send("hello password is wrong")
        }
        else{
            let q2 = `UPDATE users SET username ='${newusername}' WHERE id = '${id}'`;
            console.log(q2,)
            connection.query(q2,(err, updateResult)=>{
                if (err){
                    console.log("query not update",err.message)
                }
                res.redirect("/users")
            })

        }
    })
    
})


app.post("/users",(req,res)=>{
    const id =faker.number.int({ min: 1000, max: 9999 })
    const {username,email,password}=req.body
    console.log(id,username,email,password)
    let q = "INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)";
    connection.query(q, [id, username, email, password], (err, result) => {
        if (err) {
            console.log("Error inserting user:", err.message);
            return res.status(500).send("Failed to add user");
        }
        res.redirect("/users");
    });
})


app.get("/users/new", (req, res) => {
    res.render("new.ejs");  
});

app.get("/users/:id/dlt",(req,res)=>{
    const {id}=req.params
    let q="DELETE FROM users WHERE id=?";
    connection.query(q,[id],(err,result)=>{
        if(err){
            console.log(err.message)
        }
        res.redirect("/users")
    })
})


app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
