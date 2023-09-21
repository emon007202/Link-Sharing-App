import {BsLink45Deg}  from 'react-icons/bs';
import {CgProfile}  from 'react-icons/cg';
import { Link , useLocation} from 'react-router-dom';
import { ReactComponent as DevIcon } from '../../icons/devlinks.svg'
import './navbar.css';

function NavBar({children}) {
  const { pathname } = useLocation();
  const profileDetailsLinkStyle = {
    display: "flex",
    gap:"10px",
    textDecoration: "none",
    color:  pathname === "/" ? "#623cff" : "Black",
    backgroundColor: pathname === "/" ? "#efebff" : "transparent",
    
  };
  const linkStyle = {
    gap:"10px",
    display: "flex",
    textDecoration: "none",
    color:  pathname === "/links" ? "#623cff" : "Black",
    backgroundColor: pathname === "/links" ? "#efebff" : "transparent",
  }
  

    return (
      <nav className='nav'>
        <ul >
            <li style={{fontWeight:"bolder", display:"flex"}}> <DevIcon style={{height:"20", width:"20"}}/>devlinks</li>
            <li className='left' style={linkStyle}><BsLink45Deg/> <Link to="links" style={linkStyle}>links</Link></li>
        </ul>
        <ul >
            <li className='right' style={profileDetailsLinkStyle}> <CgProfile/> <Link to="/"  style={profileDetailsLinkStyle}>Profile Details</Link> </li>
            <button style={{backgroundColor:"white",color:"623cff"}}><Link to="preview"  style={{textDecoration:"none", color:"#623cff"}}>Preview</Link></button>
        </ul>
        {children}
      </nav>
    );
  }
  
  export default NavBar;
  