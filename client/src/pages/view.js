 import React, { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

 const View = ()=>{
    const [user,setUser]=useState({})
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:3002/api/get/${id}`)
        .then((res)=>
        setUser({...res.data[0]}
        ))
    },[id])
    return(
            <div className="card text-white bg-dark mb-3" style={{margin: "auto auto", width: "25%"}}>
 
                    <span style={{textAlign:"center" }}>Name</span>
                    <strong>{id}</strong>
                    <br/>
                    <span style={{textAlign:"center" }}>Country</span>
                    <strong>{user.Country}</strong>
                    <br/>
                    <span style={{textAlign:"center" }}>Family_Count</span>
                    <strong>{user.Family_Count}</strong>
                    <br/>
                    <span style={{textAlign:"center" }}>Electricity</span>
                    <strong>{user.Electricity}</strong>
                    <br/>
                    <span style={{textAlign:"center" }}>LPG</span>
                    <strong>{user.LPG}</strong>
                    <br/>
                    <span style={{textAlign:"center" }}>Dist_Car_Diesel</span>
                    <strong>{user.Dist_Car_Diesel}</strong>
                    <br/>
                    <span style={{textAlign:"center" }}>Dist_Car_Petrol</span>
                    <strong>{user.Dist_Car_Petrol}</strong>
                    <br/>
                    <span style={{textAlign:"center" }}>Dist_2wh</span>
                    <strong>{user.Dist_2wh}</strong>
                    <br/>
                    <span style={{textAlign:"center" }}>Footprint</span>
                    <strong>{user.Footprint}</strong>
                    <br>
                    </br>
                    <Link to={"/"}>
                    <input type="button" value="go-back"></input>
                </Link>         
            </div>
            
    )

 }
 export default View;