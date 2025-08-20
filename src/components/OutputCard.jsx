import {useSelector} from 'react-redux';
import Calculation from './Calculation';

export default function OutputCard() {
  const conc_volume = useSelector((store) => store.input.volume);
  const water_cont = useSelector(store=> store.calculation.water_content);
  const cem_req = useSelector(store=> store.calculation.cement_req);
  const fine_a = useSelector(store=> store.calculation.fine_a);
  const coarse_a = useSelector(store=> store.calculation.coarse_a);
  return (
    <>
    <Calculation/>
    <div className="container mt-5">
      <h2 className="text-center mb-4">Mix Design Output</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow-lg border-0">
            <div className="card-body text-center">
              <h5 className="card-title">Water Content</h5>
              <p className="card-text fs-4 fw-bold text-primary">{water_cont} L</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-lg border-0">
            <div className="card-body text-center">
              <h5 className="card-title">Cement Required</h5>
              <p className="card-text fs-4 fw-bold text-success">{cem_req} kg</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-lg border-0">
            <div className="card-body text-center">
              <h5 className="card-title">Fine Aggregate</h5>
              <p className="card-text fs-4 fw-bold text-warning">{fine_a} kg</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-lg border-0">
            <div className="card-body text-center">
              <h5 className="card-title">Coarse Aggregate</h5>
              <p className="card-text fs-4 fw-bold text-danger">{coarse_a} kg</p>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="card shadow-lg border-0">
            <div className="card-body text-center">
              <h5 className="card-title">Total Volume of Concrete</h5>
              <p className="card-text fs-4 fw-bold text-dark"> {conc_volume} m³</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
