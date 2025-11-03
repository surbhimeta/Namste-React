import { LOGO_URL } from "../utils/constant";
const Header = () =>{
    return(
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} />
            </div>
            <div className="nav-item">
                <ul>
                    <li>About</li>
                    <li>Cart</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;