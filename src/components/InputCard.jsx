import { useRef } from "react";
import { useDispatch } from "react-redux";
import { inputActions, inputSlice } from "../store/inputSlice";
import { Link } from "react-router-dom";

export default function InputCard() {
  const conc_vol = useRef();
  const wc_ratio = useRef();
  const agg_size = useRef();
  const slump = useRef();

  const dispatch = useDispatch();

  const handleCalculate = () => {
    dispatch(inputActions.addVolume(conc_vol.current.value));
    dispatch(inputActions.addRatio(wc_ratio.current.value));
    dispatch(inputActions.addSlump(slump.current.value));
    dispatch(inputActions.addAggregate(agg_size.current.value));
    conc_vol.current.value = "";
    wc_ratio.current.value = "";
    slump.current.value = "";
    agg_size.current.value = "";
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div
        className="card shadow-lg p-4"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <h3 className="card-title text-center mb-4">Concrete Mix Designer</h3>

        <div className="mb-3">
          <label className="form-label">Volume of Concrete (m³)</label>
          <input
            ref={conc_vol}
            type="number"
            className="form-control"
            placeholder="Enter volume"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Water-Cement Ratio</label>
          <input
            ref={wc_ratio}
            type="number"
            step="0.01"
            className="form-control"
            placeholder="Enter w/c ratio"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Slump Value (mm)</label>
          <input
            ref={slump}
            type="number"
            className="form-control"
            placeholder="Enter slump"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Maximum Aggregate Size (mm)</label>
          <select ref={agg_size} className="form-select" required>
            <option value="">Select size</option>
            <option value="40">40</option>
            <option value="20">20</option>
            <option value="10">10</option>
          </select>
        </div>

        <div className="d-grid mt-4">
          <Link to="/output" style={{ display: "block" }}>
            <button
              onClick={handleCalculate}
              className="btn btn-primary btn-lg w-100"
            >
              Calculate Mix
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
