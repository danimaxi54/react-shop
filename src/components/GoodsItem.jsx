import { useContext } from 'react';
import { ShopContext } from '../context';

const GoodsItem = (props) => {
  const { id, name, description, price, full_background } = props;

  const { addToBasket } = useContext(ShopContext);

  return (
    <div className='card' id={id}>
      <div className='card-image'>
        <img src={full_background} alt={name} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{name}</span>
        <p>{description}</p>
      </div>
      <div className='card-action'>
        <button
          type='button'
          className='btn'
          onClick={() =>
            addToBasket({
              id,
              name,
              price,
            })
          }
        >
          Купить
        </button>
        <span style={{ fontSize: '1.8rem' }} className='right'>
          {price} руб.
        </span>
      </div>
    </div>
  );
};

export default GoodsItem;
