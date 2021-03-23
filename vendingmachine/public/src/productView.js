import Item from "./item.js";
import product from "./product.js";
import _ from "./util.js";

class ProductView {
  constructor(productDiv) {
    this.productDiv = productDiv;
    this.init();
  }
  init() {
    this.render();
    _.on(this.productDiv, "click", ({ target }) => {
      this.clickHandler(target);
    });
  }
  render() {
    product.forEach((item) => {
      new Item(item.name, item.price, this.productDiv).init();
    });
  }
  clickHandler(target) {
    if (target.className === "item") {
      target.classList.add("select");
    }
  }
}

export default ProductView;
