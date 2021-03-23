import Item from "./item.js";
import product from "./product.js";

class ProductView {
  constructor(productDiv) {
    product.forEach((item) => {
      new Item(item.name, item.price, productDiv).init();
    });
  }
}

export default ProductView;
