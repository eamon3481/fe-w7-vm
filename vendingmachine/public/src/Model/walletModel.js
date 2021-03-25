import Observable from "./observable.js";

export default class WalletModel extends Observable {
  constructor(data) {
    super();
    this.walletData = { coin: data, total: 0 };
  }

  insertCoin(data) {
    let selectCoin = this.walletData.coin.find((v) => v.unit === Number(data));
    selectCoin.cnt--;
    this.walletData.total += selectCoin.unit;
    this.notify([this.walletData, selectCoin]);
  }
}
