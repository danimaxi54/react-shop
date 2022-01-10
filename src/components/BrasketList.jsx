import { useContext } from 'react';

import { ShopContext } from '../context';

import Brasketitem from './Brasketitem';

const BrasketList = () => {
  const { order = [], handleBrasketShow = Function.prototype } =
    useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className='collection basket-list'>
      <li className='collection-item active'>Корзина</li>
      {order.length ? (
        order.map((order) => <Brasketitem key={order.id} {...order} />)
      ) : (
        <li className='collection-item'>Корзина пуста</li>
      )}
      <li className='collection-item active'>
        Общая стоимость: {totalPrice} руб.
      </li>
      <li className='collection-item'>
        <button className='btn btn-small'>Оформить</button>
      </li>
      <i className='material-icons basket-close' onClick={handleBrasketShow}>
        close
      </i>
    </ul>
  );
};

export default BrasketList;
