const handleSumTotal = cart => {
  const reducer = (accumulator, currentItem) => accumulator + currentItem.price;
  return cart.reduce(reducer, 0);
};

export default handleSumTotal;
