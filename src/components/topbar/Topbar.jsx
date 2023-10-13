import "./topbar.css"
import { Link } from "react-router-dom"
const Topbar = (props) => {
    const user = true;
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-square-pinterest"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className='topList'>
                    <li className='topListItem'>
                        <Link to="/" className="link">HOME</Link>
                    </li>
                    <li className='topListItem'>
                        <Link to="/" className="link">ABOUT</Link>
                    </li>
                    <li className='topListItem'>
                        <Link to="/" className="link">CONTACT</Link>
                    </li>
                    <li className='topListItem'>
                        <Link to="/write" className="link">WRITE</Link>
                    </li>
                        <li className='topListItem'>
                            <Link to="/login" className="link">LOGIN</Link>
                        </li>
                        <li className='topListItem'>
                            <Link to="/register" className="link">REGISTER</Link>
                        </li>
                    <li className='topListItem'>{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt="" className='topImage' />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default Topbar;
