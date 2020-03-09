import React from 'react';
import './style.css'
import { useGlobalState} from "./../../screens/Dashboard";
import{useGlobalDispatch} from "./../../screens/Dashboard";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import ClearIcon from '@material-ui/icons/Clear';
export default function FloatCart() {
    let state;
  let dispatch
    state = useGlobalState(); 
    dispatch=useGlobalDispatch();


    const RemoveFromCart=(id)=>{
     
        const obj = state.Product.find(x => x.id === id);
         obj.count = obj.count - 1;
         dispatch({Product:state.Product});
        }
      const AddToCart=(id)=>{
        
        const obj = state.Product.find(x => x.id === id);
        obj.count === undefined ? obj.count = 1
        : obj.count = obj.count + 1;
        dispatch({Product:state.Product});
       
      }
      let total = state.Product.reduce(function (accumulator, currentValue) {
          
      return currentValue.count ? accumulator + (currentValue.count* currentValue.price) : accumulator
    }, 0)
     
  let totalCount=   state.Product.reduce(function (accumulator, currentValue) {
          
    return currentValue.count ? accumulator + (currentValue.count) : accumulator
  }, 0)
    return (
<div>
<div className="float-cart" style={{ right: state.showFloatCart && 0}}>
<div className="cart">  <h2>Cart</h2>
  <AddShoppingCartIcon />
  <div >{totalCount}</div>
  </div>


  <div className="selectProduct">

    {state.Product.map((item, index)=>(
        item.count >0 &&
<div style={{display:"flex", marginBottom:"20px"}}>
      <img src={item.image}/>
      <div className="desc">
      <span>{item.name}</span>
    <span className="quantity">Quantity : {item.count}</span>
      </div>
      <div className="count">
          <span>{item.price} $</span>
          <div className="counter">
          <button onClick={()=>AddToCart(item.id)}>+</button>
          <button onClick={()=>RemoveFromCart(item.id)}>-</button>
          </div>
      </div>
      </div>
    ))
}
      <div className="bottom">
<div className="total"><span>total:</span><span> {total} $</span></div>
      <div className="checkout">Check out</div>
      </div>
  </div>
</div>
<div className="CartIcon" style={{ right: state.showFloatCart && 450 , display:state.showFloatCart ? "flex" : "none" }} >
<ClearIcon onClick={()=>{dispatch({showFloatCart:!state.showFloatCart})}}/>
</div>
</div>
    )
}