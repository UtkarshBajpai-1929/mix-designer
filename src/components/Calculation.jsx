import { useDispatch, useSelector } from "react-redux";
import { calculatedActions } from "../store/calculatedSlice";
export default function Calculation() {
  const conc_volume = useSelector((store) => store.input.volume);
  const wc_ratio = useSelector((store) => store.input.ratio);
  const agg_size = useSelector((store) => store.input.aggregate);
  const slump = useSelector((store) => store.input.slump);
  const dispatch = useDispatch();
  if(agg_size==10){
    realCal(208,0.03,0,5);
  }else if(agg_size==20){
    realCal(186,0.02,0.62);
  }else if(agg_size==40){
    realCal(165,0.01,0.66);
  }
  function realCal(W_base, V_air, agg_fraction){
    const water_req = W_base*conc_volume*(1+0.03*(slump-50)/25);
    const V_w = water_req/1000;
    dispatch(calculatedActions.addWater(Math.floor(water_req)));

    const cement_req = Math.floor(water_req/wc_ratio)+1;
    const V_c = cement_req/3150;
    dispatch(calculatedActions.addCement(cement_req));

    const totalagg_V = (1-(V_air+ V_c+V_w))*conc_volume;
    if(slump<50){
      const change_s=0.01*(50-slump)/25;
       agg_fraction = agg_fraction+change_s
    }else{
      const change_s=0.01*(50-slump)/25;
       agg_fraction = agg_fraction+change_s
    }

    if(wc_ratio<0.50){
      const  change_w = 0.2*(wc_ratio-0.50);
       agg_fraction = agg_fraction+change_w
    }else{
      const  change_w = 0.2*(wc_ratio-0.50);
       agg_fraction = agg_fraction+change_w
    }
    
   

    const V_coarse = totalagg_V*agg_fraction;
    const coarse_req = Math.floor(2700*V_coarse)+1;
    dispatch(calculatedActions.addCoarse(coarse_req));

    const V_fine = totalagg_V-V_coarse;
    const fine_req = Math.floor(2650*V_fine)+1;
    dispatch(calculatedActions.addFine(fine_req));

  }

  }
