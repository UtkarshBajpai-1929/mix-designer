import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hh">
        <div className="hero">
          <h1>Civil ToolKit</h1>
          <p>
            {" "}
            Here, We provide different types of tools and calculators <br />
            to solve real world construction problems.
          </p>
          <Link to="/input" target="blank">
            <button type="button" className="btn btn-light" id="hero-btn">
              Concrete Mix Designer
            </button>
          </Link>
        </div>
        <div>
          <img className="img-hero" src="images/backkim.jpg" />
        </div>
      </div>
    </div>
  );
}
