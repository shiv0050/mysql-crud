const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())

app.get("/api/get", (req,res)=>{
    db.query("SELECT * FROM User_index", (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });   
});
app.get("/api/get/:id", (req,res)=>{
    const {id} = req.params;
    db.query("SELECT * FROM User_index WHERE P_Name = ?",id, (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });   
});
app.put("/api/edit/:P_Name", (req,res)=>{
    const id = req.params.P_Name;
    const {Country, Family_Count, Electricity, LPG, Dist_Car_Diesel, Dist_Car_Petrol, Dist_2wh} = req.body;
    db.query("UPDATE User_index SET Country=?, Family_Count=?, Electricity=?, LPG=?, Dist_Car_Diesel=?, Dist_Car_Petrol=?, Dist_2wh=? WHERE P_Name = ?",
    [Country, Family_Count, Electricity, LPG, Dist_Car_Diesel, Dist_Car_Petrol, Dist_2wh, id], (err,result)=>{
        if(err) {
            console.log(err)
        } 
    });
    db.query("CALL calc_ftp(?)",id,(error,result)=>{
        if(error)
        {console.log(error);}
        res.send(result)
    });
});
app.post("/api/post", (req,res)=>{
    const {P_Name, Country, Family_Count, Electricity, LPG, Dist_Car_Diesel, Dist_Car_Petrol, Dist_2wh} = req.body;
    db.query("INSERT INTO User_index (P_Name, Country, Family_Count, Electricity, LPG, Dist_Car_Diesel, Dist_Car_Petrol, Dist_2wh) VALUES (?,?,?,?,?,?,?,?)", 
    [P_Name, Country, Family_Count, Electricity, LPG, Dist_Car_Diesel, Dist_Car_Petrol, Dist_2wh],(error,result)=>{
        if(error)
        {console.log(error);}
    });
    db.query("CALL calc_ftp(?)",P_Name,(error,result)=>{
        if(error)
        {console.log(error);}
        res.send(result)
    });
});

app.delete('/api/delete/:P_Name',(req,res)=>{
    const id = req.params.P_Name;
db.query("DELETE FROM User_index WHERE P_Name = ? OR P_Name ='' ", id, (err,result)=>{
if(err) {
    console.log(err)
} 
        res.send(result)

})
})
    app.listen(PORT, ()=>{
        console.log(`Server is running on ${PORT}`)
    })