import { Link } from "react-router-dom";

export default function Features(){
  return(
    <div className="feature">
      <h1>Features we provide</h1>
    <div className="feature-container">
      <div className="card text-center mb-3 cards" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">Concrete Mix Designer</h5>
    <hr/>
    <p className="card-text">You will input your grade, w/c ratio and other required inputs.We will generate a quatity estimates of all ingradients</p>
    <Link to="/input" target="blank" className="btn btn-primary"> M-Calculator</Link>
  </div>
</div>

      <div className="card text-center mb-3 cards" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">Horizontal Curve Designer</h5>
    <hr/>
    <p className="card-text">Input require items like design speed radius and get desired values in a single click. </p>
    <Link className="btn btn-primary">Horizontal Curve</Link>
  </div>
</div>

      <div className="card text-center mb-3 cards" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">SBC Calculator</h5>
    <hr/>
    <p className="card-text">Input require items like design speed radius and get desired values in a single click.</p>
    <Link className="btn btn-primary">SBC Calculator</Link>
  </div>
</div>
 </div>

    </div>
  )
}