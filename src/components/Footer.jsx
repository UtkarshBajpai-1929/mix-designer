import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer-container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="about">
          <h5>About us: </h5>
              <h6>All the calculations in the website are based on IS codes. So for more information refer IS Code.</h6>
          <p>This Mix Design Calculator helps civil engineers, students, and professionals quickly calculate concrete mix proportions as per standard codes.</p> 
          <p>Designed for accuracy and ease of use.</p>
          <p>By Utkarsh Bajpai (Civil Engineering student at IIT Dhanbad)</p>
        </div>
        {" "}
        <div class="col-md-4 d-flex justify-content-center align-items-center">
          <span class="mb-3 mb-md-0 text-body-secondary">
            © 2025 Company, All rights reserved.
          </span>{" "}
        </div>{" "}
        <ul class="nav col-md-4 justify-content-center list-unstyled d-flex">
          {" "}
          <a href="https://www.instagram.com/utkarsh_bajpai45/" target="blank">
          <li class="ms-3">
         <FaInstagram />
          </li>{" "}
          </a>
          <Link>
          <li class="ms-3">
          <FaFacebook />
          </li>{" "}
          </Link>
        </ul>{" "}
      </footer>
    </div>
  );
}
