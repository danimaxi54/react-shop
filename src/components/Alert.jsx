import { useEffect } from 'react';

const Alert = (props) => {
  const { name = '', closeAlert = Function.prototype } = props;

  useEffect(() => {
    const timerID = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerID);
    };
  }, [name]);

  return (
    <div id='toast-container'>
      <div className='toast'>{name} добавлен в корзину</div>
    </div>
  );
};

export default Alert;
