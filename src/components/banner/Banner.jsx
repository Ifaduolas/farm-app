import React from "react"
import "./Banner.css"
import { useNavigate } from 'react-router-dom';
import farm from "../../image/farm.jpeg";


function Banner(){
    const navigate = useNavigate();

    const goToNewPage = () => {
        navigate("/register")
      }

    return(
        <div className="banner">
            <img src={farm} alt=""/>
            <div className="text">
                <h2>Farming Web Assistant </h2>
                    <br/>
                <button onClick={() => goToNewPage()}  className="register-farmer">Register</button>
            </div>
        </div>
    )
}

export default Banner;