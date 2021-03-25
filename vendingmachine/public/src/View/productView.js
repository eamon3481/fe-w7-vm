import ItemView from "./itemView.js";
import product from "../product.js";
import _ from "../util.js";

export default class ProductView {
  constructor(walletModel, productModel, parent) {
    this.parent = parent;
    this.data = product;
    this.render();
    this.productModel = productModel;
    this.walletModel = walletModel;
    this.init();
  }

  init() {
    this.onClickProduct();
    // this.productModel.subscribe((pdata) => this.updateView(pdata));
    this.walletModel.subscribe((wdata) => this.updateView(wdata[0]));
  }

  updateView(data) {
    this.productModel.productData.forEach((product) => {
      if (product.price <= data.total) product.available = true;
    });
    this.render();
  }

  render() {
    this.parent.innerHTML = "";
    this.data.forEach((p) =>
      new ItemView(p.name, p.price, p.available, this.parent).init()
    ); //initial rendering같은 느낌
  }

  onClickProduct() {
    _.on(this.parent, "click", ({ target }) => {
      this.clickHandler(target.closest("button"));
    });
  }

  clickHandler(target) {
    if (!target) return;
    if (target.disabled) return;
    else if (target.classList[0] === "item") {
      target.classList.add("select");
      const selectName = target.children[0].innerText;
      const selectPrice = target.children[1].innerText;
      this.productModel.selectProduct(selectName);
      this.walletModel.buy(selectPrice, selectName);
    }
  }
}
