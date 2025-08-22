import { useDispatch, useSelector } from "react-redux";
import { calculatedActions } from "../store/calculatedSlice";
import { useEffect } from "react";
export default function Calculation() {
  const conc_volume = useSelector((store) => store.input.volume);
  const wc_ratio = useSelector((store) => store.input.ratio);
  const agg_size = useSelector((store) => store.input.aggregate);
  const slump = useSelector((store) => store.input.slump);
  const adm = useSelector((store) => store.input.adm);
  const sand_zone = useSelector((store) => store.input.sand_zone);
  const dispatch = useDispatch();
  useEffect(()=>{


  if(!sand_zone || !agg_size)return;
 
  switch (sand_zone) {
    case "1":
      aggSize(0.44, 0.6, 0.69);
      break;
    case "2":
      aggSize(0.46, 0.62, 0.71);
      break;
    case "3":
      aggSize(0.48, 0.64, 0.73);
      break;
    case "4":
      aggSize(0.5, 0.66, 0.75);
      break;
  }
  function aggSize(x, y, z) {
    switch (agg_size) {
      case "10":
        realCal(208, 0.03, x);
        break;
      case "20":
        realCal(186, 0.02, y);
        break;
      case "40":
        realCal(165, 0.01, z);
        break;
    }
  }
  function realCal(W_base, V_air, agg_fraction) {
    if (conc_volume < 0 || 1 < wc_ratio || wc_ratio < 0 || slump < 0) {
      dispatch(calculatedActions.addCement("Error"));
      dispatch(calculatedActions.addCoarse("Error"));
      dispatch(calculatedActions.addFine("Error"));
      dispatch(calculatedActions.addRat("Error"));
      dispatch(calculatedActions.addWater("Error"));
      return;
    }
    const water_req =
      W_base * conc_volume * (1 + (0.03 * (slump - 50)) / 25) * (1 - adm / 100);
    const V_w = water_req / 1000;
    dispatch(calculatedActions.addWater(water_req.toFixed(2)));

    const cement_req = water_req / wc_ratio;
    const cement_bag = cement_req / 50;
    const V_c = cement_req / 3150;
    dispatch(calculatedActions.addBag(cement_bag.toFixed(2)));
    dispatch(calculatedActions.addCement(cement_req.toFixed(2)));

    const totalagg_V =
      (1 - (V_air + V_c / conc_volume + V_w / conc_volume)) * conc_volume;
    const change_s = (0.01 * (slump - 50)) / 25;
    const change_w = 0.2 * (0.5 - wc_ratio);
    let chage_sp = 0;
    if (adm == 25) {
      chage_sp -= 0.06;
    } else if (adm == 10) {
      chage_sp -= 0.03;
    }
    agg_fraction = agg_fraction + change_s + change_w + chage_sp;

    const V_coarse = totalagg_V * agg_fraction * 0.9;
    const coarse_req = 2680 * V_coarse;
    dispatch(calculatedActions.addCoarse(coarse_req.toFixed(2)));

    const V_fine = totalagg_V - V_coarse;
    const fine_req = 2450 * V_fine;
    dispatch(calculatedActions.addFine(fine_req.toFixed(2)));

    const rat = `1 : ${(V_fine / V_c).toFixed(2)} : ${(V_coarse / V_c).toFixed(
      2
    )}`;
    dispatch(calculatedActions.addRat(rat));
  }}, [sand_zone, agg_size, conc_volume, wc_ratio, slump, adm, dispatch]);
}

