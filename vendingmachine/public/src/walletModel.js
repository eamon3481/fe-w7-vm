import Observable from "./observable.js";

export default class WalletModel extends Observable {
  constructor(data) {
    super();
    this.walletData = data;
    this.currinsertmoney = 0;
  }

  getTotalMoney() {
    return this.walletData.reduce((acc, cur) => (acc += cur.unit * cur.cnt), 0);
  }

  insertCoin(data) {
    let selectCoin = this.walletData.find((v) => v.unit === Number(data));
    selectCoin.cnt--;
    this.currinsertmoney += selectCoin.unit;
    //notifiy
  }
}
