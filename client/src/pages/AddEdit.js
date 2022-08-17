import axios from "axios";
import React,{useEffect, useState} from "react";
import { Link, useNavigate, useParams  } from "react-router-dom";
import { toast } from "react-toastify";
const initialState={
    P_Name:"", Country:"", Family_Count:0, Electricity:0, LPG:0, Dist_Car_Diesel:0, Dist_Car_Petrol:0, Dist_2wh:0

}
const Add =()=>{
    const {id} = useParams()
    const [state,setState]=useState(initialState)
    const {P_Name, Country, Family_Count, Electricity, LPG, Dist_Car_Diesel, Dist_Car_Petrol, Dist_2wh} = state
    
    useEffect(()=>{
        axios.get(`http://localhost:3002/api/get/${id}`)
        .then((res)=>
        setState({...res.data[0]}
        ))
    },[id])
    

    const navigate= useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(id){
            axios.put(`http://localhost:3002/api/edit/${id}`,
            {Country:Country, Family_Count:Family_Count, Electricity:Electricity, LPG:LPG, Dist_Car_Diesel:Dist_Car_Diesel, Dist_Car_Petrol:Dist_Car_Petrol, Dist_2wh:Dist_2wh}
            ).then((res)=>{
                console.log(res)
            }).catch((e)=>toast.error(e))
            setTimeout(()=>navigate("/"),500)
        }
        else{
        axios.post("http://localhost:3002/api/post",
            {P_Name:P_Name, Country:Country, Family_Count:Family_Count, Electricity:Electricity, LPG:LPG, Dist_Car_Diesel:Dist_Car_Diesel, Dist_Car_Petrol:Dist_Car_Petrol, Dist_2wh:Dist_2wh}
            ).then((res)=>{
                console.log(res)
            }).catch((e)=>toast.error(e))
            setTimeout(()=>navigate("/"),500)
        }
       
        }    
    const handleInputChange=(e)=>{

        setState({
            ...state,[e.target.name]:e.target.value
        })
        console.log(state)
    }

    return(
        <div className="card text-white bg-dark mb-3" style={{margin: "10% auto", width: "25%"}}>
            <div className="card-header">Add Details</div>
            <div className="card-body">
            <form
            onSubmit={handleSubmit}>
                <div className="row">
                <div className="col">
                <label htmlFor="name">Name</label>
                </div>
                <div className="col">
                <input type="text" id="name" name="P_Name" placeholder={id?id:"Your name..."} onChange={handleInputChange} ></input>
                </div>
                </div>
                <div className="row">
                <div className="col">
                <label htmlFor="country">Country</label>
                </div>
                <div className="col">
                <input type="text" id="country" name="Country" placeholder="Your country..." onChange={handleInputChange} ></input>
                </div>
                </div>
                <div className="row">
                <div className="col">
                <label htmlFor="family">Family Count</label>
                </div>
                <div className="col">
                <input type="number" id="family" name="Family_Count" placeholder="Your family..." onChange={handleInputChange}></input>
                </div>
                </div>
                <div className="row">
                <div className="col">
                <label htmlFor="electricity">Electricity</label>
                </div>
                <div className="col">
                <input type="number" id="electricity" name="Electricity" placeholder="Your KWh..." onChange={handleInputChange} ></input>
                </div>
                </div>
                <div className="row">
                <div className="col">
                <label htmlFor="lpg">LPG</label>
                </div>
                <div className="col">
                <input type="number" id="lpg" name="LPG" placeholder="Your lpg..." onChange={handleInputChange} ></input>
                </div>
                </div>
                <div className="row">
                <div className="col">
                <label htmlFor="diesel">Dist Diesel</label>
                </div>
                <div className="col">
                <input type="number" id="diesel" name="Dist_Car_Diesel" placeholder="Your diesel dist..." onChange={handleInputChange} ></input>
                </div>
                </div>
                <div className="row">
                <div className="col">
                <label htmlFor="petrol">Dist Petrol</label>
                </div>
                <div className="col">
                <input type="number" id="petrol" name="Dist_Car_Petrol" placeholder="Your petrol dist..." onChange={handleInputChange} ></input>
                </div>
                </div>
                <div className="row">
                <div className="col">
                <label htmlFor="d2w">Dist_2wh</label>
                </div>
                <div className="col">
                <input type="number" id="d2w" name="Dist_2wh" placeholder="Your 2wheeler dist..." onChange={handleInputChange} ></input>
                </div>
                </div>
                <br/>
                <br/>
                <div  className="btn-group" role="group" aria-label="Basic example">
                <input type ="submit" value={id ? "Update" :"Save"}></input>
                <Link to={"/"}>
                    <input type="button" value="go-back"></input>
                </Link>     
                </div>           
            </form>
            </div>
        </div>
    )
}
export default Add;