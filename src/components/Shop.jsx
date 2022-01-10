import { useEffect, useContext } from 'react';

import { ShopContext } from '../context';

import { API_KEY, API_URL } from '../config';

import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import BrasketList from './BrasketList';
import Alert from './Alert';

const Shop = () => {
  const { setGoods, loading, order, isBrasketShow, alertName } =
    useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.featured);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <main className='container content'>
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList />}
      {isBrasketShow && <BrasketList />}
      {alertName && <Alert name={alertName} />}
    </main>
  );
};

export default Shop;
