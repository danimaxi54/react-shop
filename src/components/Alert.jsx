import { useEffect, useContext } from 'react';

import { ShopContext } from '../context';

const Alert = () => {
  const { alertName = '', closeAlert = Function.prototype } =
    useContext(ShopContext);

  useEffect(() => {
    const timerID = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerID);
    };
  }, [alertName]);

  return (
    <div id='toast-container'>
      <div className='toast'>{alertName} добавлен в корзину</div>
    </div>
  );
};

export default Alert;
