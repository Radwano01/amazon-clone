import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import { useAuth } from '../../context/GlobalState'
import { auth } from '../../firebase'

const Navbar = () => {
  const {user, basket} = useAuth()
  const handleAuth =()=>{
    auth.signOut()
  }
  return (
    <div className='header'>
      <Link to="/">
        <h3 className='header-logo'>AMAZON</h3>
      </Link>
      <div className="header-search">
        <input type="text" className='header-searchInput'/>
        <button>search</button>
      </div>
      <div className="header-nav">
        <Link to={!user && "/login" }>
          <div className="header-option" onClick={handleAuth}>
            <div className="header-optionLineOne">Hello {user ? `${user.email}` : "Guest"}</div>
            <div className="header-optionLineTwo">{user ? "Sign Out" : "Sign In"}</div>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header-option">
            <div className="header-optionLineOne">Returns</div>
            <div className="header-optionLineTwo">& Orders</div>
          </div>
        </Link>
        <div className="header-option">
            <div className="header-optionLineOne">Your</div>
            <div className="header-optionLineTwo">Prime</div>
          </div>
        </div>
        <Link to="/checkout">
          <div className="header-optionBasket">
            <h3>basket</h3>
            <div className="header-optionLineTwo header-basketCount">{basket?.length}</div>
          </div>
        </Link>
    </div>
  )
}

export default Navbar