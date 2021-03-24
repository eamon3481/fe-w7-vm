export default class InsertMoneyView {
  constructor(walletModel, parent) {
    this.walletModel = walletModel;
    this.parent = parent;
    this.init();
  }
  init() {
    this.walletModel.subscribe((data) => this.updateView(data));
  }

  updateView(data) {
    this.parent.innerHTML = `${data.total} 원`;
  }
}
