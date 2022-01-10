import { useContext } from 'react';

import { ShopContext } from '../context';

const Brasketitem = (props) => {
  const { id, name, price, quantity } = props;

  const { removeFromBrasket, incQuantity, decQuantity } =
    useContext(ShopContext);

  return (
    <li className='collection-item'>
      {name}
      <i
        className='material-icons basket-quantity'
        onClick={() => decQuantity(id)}
      >
        remove
      </i>
      x{quantity}
      <i
        className='material-icons basket-quantity'
        onClick={() => incQuantity(id)}
      >
        add
      </i>
      = {price * quantity} руб.
      <span className='secondary-content' onClick={() => removeFromBrasket(id)}>
        <i className='material-icons basket-delete'>close</i>
      </span>
    </li>
  );
};

export default Brasketitem;
