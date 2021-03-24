export default class Controller {
  constructor(data) {
    this.data = data;
    this.init();
  }
  init() {
    this.reduceItemCount(this.data);
  }

  reduceItemCount(data) {
    data.count -= 1;
  }
}
