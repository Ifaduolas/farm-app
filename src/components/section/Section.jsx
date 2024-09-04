import React from "react"
import "./Section.css"
import { Link} from "react-router-dom"
import farmer from "../../image/farmer.png"
import supplier from "../../image/supplier.png"
import admin from "../../image/admin.png"



function Section(){
    return(
        <div className="row">
            <div className="column">
            
                <img src={farmer} alt=""/>
                <Link to="/farmers" className="links">Farmer</Link>
                
            </div>
            <div className="column">
            
                <img src={admin} alt=""/>
                <Link to="/admin" className="links">Admin</Link>
                
            </div>
            <div className="column">
            
                <img src={supplier} alt=""/>
                <Link to="/supplier" className="links">Supplier</Link>
                
            </div>
        </div>
    )
}

export default Section;