import Brasketitem from './Brasketitem';

const BrasketList = (props) => {
  const {
    order = [],
    handleBrasketShow = Function.prototype,
    removeFromBrasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className='collection basket-list'>
      <li className='collection-item active'>Корзина</li>
      {order.length ? (
        order.map((order) => (
          <Brasketitem
            key={order.id}
            {...order}
            removeFromBrasket={removeFromBrasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
          />
        ))
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
