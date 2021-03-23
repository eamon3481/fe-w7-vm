import ItemView from "./itemView.js";
import _ from "./util.js";

class ListView {
  constructor(data, parent) {
    //
    this.data = data;
    this.parent = parent;
    this.init();
  }
  init() {
    this.render();
    _.on(this.parent, "click", ({ target }) => {
      this.clickHandler(target);
    });
  }
  render() {
    this.data.forEach((item) => {
      new ItemView(item.name, item.price, this.parent).init();
    });
  }
  clickHandler(target) {
    if (target.className === "item") {
      target.classList.add("select");
    }
  }
}

export default ListView;
