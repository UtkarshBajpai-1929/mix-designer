import { useSelector } from "react-redux";
import PrintButton from "./PrintButton";
export default function FinalEstimate() {
  const cem_req = useSelector((store) => store.calculation.bag);
  const fine_a = useSelector((store) => store.calculation.fine_a);
  const coarse_a = useSelector((store) => store.calculation.coarse_a);
  const adm = useSelector((store) => store.input.adm);
   const conc_volume = useSelector((store) => store.input.volume);
     const water_cont = useSelector((store) => store.calculation.water_content);
     let idd = "estimate-table"; 
  return (
    <div className="container py-5" id="estimate-table">
      
      <h2 className="text-center mb-4">Final Estimate to Order</h2>

      <div className="table-responsive">
        <table className="table table-bordered text-center align-middle">
          <thead className="table-light">
            <tr>
              <th>Serial No.</th>
              <th>Ingredient Name</th>
              <th>Quantity (by Volume))</th>
              <th>Quantity (by Weight)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Cement</td>
              <td>{cem_req} bags</td>
              <td>{(cem_req*50).toFixed(2)} kg</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Fine Aggregate (Sand)</td>
              <td>{(fine_a*35.3147/1400).toFixed(2)} foot</td>
              <td>{(fine_a/100).toFixed(2)} quintal</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Coarse Aggregate</td>
              <td>{(coarse_a*35.3147/1700).toFixed(2)} foot</td>
              <td>{(coarse_a/100).toFixed(2)} quintal</td>
            </tr>
            {
              adm!=0 ? 
                  <tr>
              <td>4</td>
              <td>Admixture</td>
              <td>{(cem_req*0.02*1000/1.145).toFixed(0)} ml</td>
              <td>--</td>
            </tr> :null
            }
               <tr>
              <td>4</td>
              <td>Water</td>
              <td>{water_cont} Litres</td>
              <td>{water_cont} kg</td>
            </tr>
        
          </tbody>
        </table>
      </div>
      <PrintButton idd={idd} />
    </div>
  );
}
