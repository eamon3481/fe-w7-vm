import Observable from "./observable.js";

export default class ProductModel extends Observable {
  constructor(data) {
    super();
    this.productData = data;
  }

  selectProduct(selectName) {
    //제품버튼이 클릭돼서 그 제품이 뽑혔을때? 나타나야하는것들.. 재고가 줄어든다, log에 출력, insert total coin 줄어든다
    this.reduceItemCount(this.checkData(selectName));
    this.notify(this.productData);
  }

  checkData(selectName) {
    return this.productData.find((product) => product.name === selectName);
  }

  reduceItemCount(data) {
    data.count--;
  }
}
