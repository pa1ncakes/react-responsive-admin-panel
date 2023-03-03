import React from 'react'
import './Sidebar.css'
import Logo from '../../assets/imgs/logo.png'


const Sidebar = () => {
  return (
    <div className="Sidebar">
        {/*logo */}
        <div className="logo">
            <img src={Logo} alt="logo" />
            <span>
                Ad<span>m</span>in
            </span>
        </div>
    </div>

  )
}

export default Sidebar