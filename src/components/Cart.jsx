import { useContext } from 'react';

import { ShopContext } from '../context';

const Cart = (props) => {
  const { order, handleBrasketShow = Function.prototype } =
    useContext(ShopContext);

  const quantity = order.length;

  return (
    <div className='cart blue darken-4 white-text' onClick={handleBrasketShow}>
      <i className='material-icons'>shopping_cart</i>
      {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  );
};

export default Cart;
