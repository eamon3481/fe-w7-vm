import ItemView from "./itemView.js";
import product from "../product.js";
import coin from "../coin.js";
import ProductModel from "../Model/productModel.js";
import WalletModel from "../Model/walletModel.js";
import _ from "../util.js";

export default class ProductView {
  constructor(parent) {
    this.parent = parent;
    this.data = product;
    this.data.forEach((p) => new ItemView(p.name, p.price, this.parent).init()); //initial rendering같은 느낌
    this.productModel = new ProductModel(product);
    this.walletModel = new WalletModel(coin);
    this.init();
  }

  init() {
    this.onClickProduct();
    this.productModel.subscribe((pdata) => this.updateView(pdata));
    this.walletModel.subscribe((wdata) => this.updateView(wdata));
  }

  updateView(data) {
    //총 투입 금액을 보고 렌더링 시 구매가능 제품 활성화하는 css적용해야함..
  }

  onClickProduct() {
    _.on(this.parent, "click", ({ target }) => {
      this.clickHandler(target.closest("div"));
    });
  }

  clickHandler(target) {
    if (!target) return;
    else if (target.classList[0] === "item") {
      target.classList.add("select");
      const selectName = target.children[0].innerText;
      this.productModel.selectProduct(selectName);
    }
  }
}
