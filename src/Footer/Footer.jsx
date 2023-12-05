import { Link } from 'react-router-dom'
import { FaHouse, FaShop, FaUser, FaCartShopping } from 'react-icons/fa6';
import './Footer.css'

const Footer = () => {
    return (
        <div className='Footer'>
            <ul className='footer-nav'>
                <li className='footer-nav-item'>
                    <Link className='footer-nav-link' to="/"><span><FaHouse /></span>Home</Link>
                </li>
                <li className='footer-nav-item'>
                    <Link className='footer-nav-link' to="login"><span><FaUser /></span>Login</Link>
                </li>
                <li className='footer-nav-item'>
                    <Link className='footer-nav-link' to="shop"><span><FaShop /></span>Shop</Link>
                </li>
                <li className='footer-nav-item'>
                    <Link to="cart" className='footer-nav-link'><span><FaCartShopping /></span>Cart</Link>
                </li>
            </ul>
            
        </div>
    )
}

export default Footer;