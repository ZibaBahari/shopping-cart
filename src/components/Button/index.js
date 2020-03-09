import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './style.css'

import { useGlobalState} from "./../../screens/Dashboard";
import{useGlobalDispatch} from "./../../screens/Dashboard";

export default function Button() {
  let state;
  let dispatch;

  state = useGlobalState(); 
  dispatch = useGlobalDispatch();
       
  let totalCount=   state.Product.reduce(function (accumulator, currentValue) {
          
    return currentValue.count ? accumulator + (currentValue.count) : accumulator
  }, 0)
    return (

<div className="CartIcon">
<AddShoppingCartIcon onClick={()=>{dispatch({showFloatCart:!state.showFloatCart})}}/>
<div className="roundCounter">{totalCount}</div>

</div>
    )
}