import GoodsItem from './GoodsItem';

const GoodsList = (props) => {
  const { goods = [], addToBasket = Function.prototype } = props;

  if (!goods.length) {
    return <div>Nothing here...</div>;
  }

  return (
    <div className='goods'>
      {goods.map((item) => (
        <GoodsItem key={item.id} addToBasket={addToBasket} {...item} />
      ))}
    </div>
  );
};

export default GoodsList;
