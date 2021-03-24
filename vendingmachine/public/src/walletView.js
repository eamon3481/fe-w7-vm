import coin from "./coin.js";
import CoinItem from "./coinItem.js";
import WalletModel from "./walletModel.js";
import _ from "./util.js";

export default class WalletView {
  constructor(walletDiv) {
    coin.forEach((c) => new CoinItem(c.unit, c.cnt, walletDiv).init());
    this.WalletModel = new WalletModel(coin);
    this.onClickEvent(walletDiv);
  }

  onClickEvent(parents) {
    _.on(parents, "click", ({ target }) => this.clickHandler(target));
  }

  clickHandler(target) {
    this.WalletModel.insertCoin(target.className);
  }
}
