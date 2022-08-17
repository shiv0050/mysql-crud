import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Home=()=>{
    const [data,setData]=useState([])
    const loadData = async ()=>{
        const response = await axios.get("http://localhost:3002/api/get")
        setData(response.data)
    }
    useEffect(()=>{
        loadData()},
        []
    )
    const deleteIdx = (P_Name)=>{

        axios.delete(`http://localhost:3002/api/delete/${P_Name}`)
        setTimeout(() => loadData(),500)

    }
    return(
        
        <div className="container" >
            <Link to ={"/add"}>
            <button className="btn btn-primary">Add</button>
            <br/>
            <br/>
            </Link>
            <table className="table table-bordered table-dark">
                <thead  className="thead-dark">
                    <tr>
                        <th scope="col" style={{textAlign:"center" }}>S.No</th>
                        <th scope="col" style={{textAlign:"center" }}>Name</th>
                        <th scope="col" style={{textAlign:"center" }}>Country</th>
                        <th scope="col" style={{textAlign:"center" }}>Footprint</th>
                        <th scope="col" style={{textAlign:"center" }}>Actions</th>
                    </tr>

                </thead>
                <tbody>
                    {data.map((item,index)=>{
                        return(
                            <tr key = {item.P_Name}>
                                <th scope="row">{index+1}</th>
                                <td>{item.P_Name}</td>
                                <td>{item.Country}</td>
                                <td>{item.Footprint}</td>
                                <td>
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <Link to={`/edit/${item.P_Name}`}>
                                        <button className="btn btn-secondary">Edit</button>
                                    </Link>
                                    <button className="btn btn-secondary" onClick={()=>deleteIdx(item.P_Name)}>Delete</button>
                                    <Link to={`/view/${item.P_Name}`}>
                                        <button className="btn btn-secondary">View</button>
                                    </Link>
                                </div>
                                </td>
                            </tr>
                        )
                    }

                    )}
                </tbody>
            </table>

        </div>
    );
}

export default Home;