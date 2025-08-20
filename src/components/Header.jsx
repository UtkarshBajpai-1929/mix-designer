import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-container">
      <div className="img-con">
        <Link to="/">
        <img src="images/civil2.jpg" alt="civil img" className="logo-img"/>
        </Link>
      </div>
      <div className="heading">
        <h5 className="header-heading">
        Every great structure begins with the right mix
      </h5>
        </div>
      <div className="nav-bar">
        <ul>
         <Link to="/"><li>Home</li></Link> 
          <li>About</li>
          <Link to="/Feature"><li>Features</li></Link>
        </ul>
      </div>
      <div className="btn-container">
        <button type="button" class="btn btn-light" id="btn-login">Login</button>
        <button type="button" class="btn btn-primary" id = "btn-sign">Sign Up</button>
      </div>
    </div>
  );
}
