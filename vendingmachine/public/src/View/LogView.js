import _ from "../util.js";

export default class LogView {
  constructor(walletModel, parent) {
    this.walletModel = walletModel;
    this.parent = parent;
    this.InsertCoinDiv = _.$(".controller__total", parent);
    this.LogDiv = _.$(".controller__log", parent);
    this.init();
  }
  init() {
    this.walletModel.subscribe((data) => this.updateInsertCoinView(data[0]));
    this.walletModel.subscribe((data) => this.updatelogView(data[1]));
  }

  updateInsertCoinView(data) {
    this.InsertCoinDiv.innerHTML = `${data.total} 원`;
  }

  updatelogView(data) {
    this.LogDiv.innerHTML += this.LogViewTemplate(data);
  }

  LogViewTemplate(data) {
    return `<span>${data.unit} 원을 넣었습니다.</span>`;
  }
}
