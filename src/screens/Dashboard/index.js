import React from 'react';
import Card from '../../components/card'
import Button from '../../components/Button'
import FloatCart from '../../components/FloatCart'
import './style.css';
const initialState = {
  showFloatCart:false,
  Product :[
    {
        id:1,
        name:"White DGK Script Tee",
        price:14,
        image:"/img/White-DGK-Script-Tee.jpg"
    },
    {
        id:2,
        name:"Crazy Monkey Black T-Shirt",
        price:10,
        image:"/img/Crazy-Monkey-Black-T-Shirt.jpg"
    },
    {
        id:3,
        name:"Tso 3D Short Sleeve T-Shirt A",
        price:11,
        image:"/img/Tso-3D-Short-Sleeve-T-Shirt-A.jpg" 
    },
    {
        id:4,
        name:"Wine Skul T-Shirt B",
        price:17,
        image:"/img/Wine-Skul-T-Shirt.jpg" 
    }
]
  };
  function reducer(state, action) {
    return { ...state, ...action };
  }
  export const StateContext = React.createContext();
  export const DispatchContext = React.createContext();


function Dashborad() {
    const [state, dispatch] = React.useReducer(reducer, initialState);

   
  return (
      <div>
    <StateContext.Provider value={state}>
    <DispatchContext.Provider value={dispatch}>
      <div className="container">
         
    <div className="products">
        
        {state.Product.map((item,  index)=>(
      <Card key ={index} product={item}/>
        ))
     
        }
    </div>
       <Button/>
       <FloatCart/>
    
       </div>
       </DispatchContext.Provider>
       </StateContext.Provider>
      
       </div>
  );
}
export const useGlobalState = () => React.useContext(StateContext);
export const useGlobalDispatch = () => React.useContext(DispatchContext);
export default Dashborad;
