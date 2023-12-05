import { Link } from 'react-router-dom'
import { FaHouse, FaShop, FaUser, FaCartShopping } from 'react-icons/fa6';
import './Navigation.css'

const Navigation = () => {
    return (
        <div className='Navbar'>
            <Link className="logo-link" to="/"><h1 className='logo'>Sopphing-Cart</h1></Link>
            <ul className='nav'>
                <li className='nav-item'>
                    <Link className='nav-link' to="/"><span><FaHouse /></span>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="login"><span><FaUser /></span>Login</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="shop"><span><FaShop /></span>Shop</Link>
                </li>
            </ul>
            <Link to="cart" className='nav-link'><span><FaCartShopping /></span>Cart</Link>
        </div>
    )
}

export default Navigation;