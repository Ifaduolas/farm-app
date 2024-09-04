import React from "react"
import "./TopBar.css"

import NotificationsIcon from '@mui/icons-material/Notifications';


const TopBar = () => {
  

  return (
  
    <div className="topbar">
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input"/>
      </div>
      <div className="topbar-right">
        <div className="notification">
          <NotificationsIcon size={20}/>
        </div>
        <div className="profile">
          <img src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1694269159~exp=1694269759~hmac=c8c65095b670091331a550b674305943e6a42c710a45b7356ecfe851d77b916b" alt="Profile" className="profile-img"/>
        </div>
      </div>
      
    </div>
    
    
  )
}

export default TopBar