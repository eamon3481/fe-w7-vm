import CoinItem from "./coinItem.js";
import _ from "./util.js";

export default class WalletView {
  constructor(walletModel, parent) {
    this.walletModel = walletModel;
    this.walletData = walletModel.walletData;
    this.parent = parent;
    this.init();
  }

  init() {
    this.renderCoinItem(this.walletData);
    this.renderTotalMoney(this.walletData);
    this.walletModel.subscribe((data) => this.updateCoinItem(data));
    this.walletModel.subscribe((data) => this.renderTotalMoney(data));
    this.onClickEvent(this.parent);
  }

  renderCoinItem(wallet) {
    wallet.coin.forEach((c) => new CoinItem(c.unit, c.cnt, this.parent).init());
  }

  renderTotalMoney(wallet) {
    const walletTotal = _.$(".wallet__total");
    walletTotal.innerHTML = `${this.getTotalMoney(wallet)} 원`;
  }

  getTotalMoney(wallet) {
    return wallet.coin.reduce((acc, cur) => (acc += cur.unit * cur.cnt), 0);
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
