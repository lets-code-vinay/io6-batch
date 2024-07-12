/**
 * @description Converting Dollar to INR
 * @param {Number} dollar
 * @returns
 */
export const dollarToRupee = (dollar) => {
  const inr = Number(dollar) * 83.49;
  return inr.toFixed(2);
};

/**
 * @description Getting original price from discount
 * @param {Number/String} price
 * @param {Number/String} discount
 * @returns
 */
export const getOriginalPriceFromDiscount = (price, discount) => {
  //   const inr = dollarToRupee(Number(price));
  //   const discountPrice = (Number(inr) * Number(discount)) / 100;
  //   const orgPrice = Number(inr) + discountPrice;

  const discountPrice = (Number(price) * Number(discount)) / 100;
  const orgPrice = Number(price) + discountPrice;

  return orgPrice.toFixed(2);
};
