import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream, selectCount } from '../redux/icecream/iceCreamReducer';
const IceCreamContainer = (props) => {
  const count = useSelector(selectCount); 
  console.log("count", count) 
  const dispatch = useDispatch();
  return (
    <div>
        <h2> Number of icecream : {count}</h2>
        <button onClick = {() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  )
}

export default IceCreamContainer;