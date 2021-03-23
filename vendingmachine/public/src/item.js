class Item {
  constructor(name, price, parents) {
    this.name = name;
    this.price = price;
    this.parents = parents;
  }
  init() {
    //모든거실행
    this.render();
  }
  render() {
    this.parents.innerHTML += this.makeTemplate();
  }
  makeTemplate() {
    return `<div>
      <span>${this.name}</span>
      <span>${this.price}</span>
    </div>`;
  }
}

export default Item;
