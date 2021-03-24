import CoinItem from "./coinItem.js";
import _ from "./util.js";

export default class WalletView {
  constructor(walletModel, parent) {
    this.walletModel = walletModel;
    this.parent = parent;
    this.init();
  }

  init() {
    this.renderCoinItem(this.walletModel.walletData);
    this.walletModel.subscribe((data) => this.updateCoinItem(data));
    this.onClickEvent(this.parent);
  }

  renderCoinItem(wallet) {
    wallet.coin.forEach((c) => new CoinItem(c.unit, c.cnt, this.parent).init());
  }

  updateCoinItem(wallet) {
    this.parent.innerHTML = "";
    wallet.coin.forEach((c) => new CoinItem(c.unit, c.cnt, this.parent).init());
  }

  onClickEvent(parents) {
    _.on(parents, "click", ({ target }) => this.clickHandler(target));
  }

  clickHandler(target) {
    this.walletModel.insertCoin(target.className);
  }
}
