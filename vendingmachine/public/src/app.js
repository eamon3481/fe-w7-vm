import _ from "./util.js";
import product from "./product.js";
import coin from "./coin.js";
import WalletView from "./View/walletView.js";
import LogView from "./View/LogView.js";
import Item from "./Model/item.js";
import ProductView from "./View/productView.js";
import WalletModel from "./Model/walletModel.js";

const productDiv = _.$(".section__products");
const walletDiv = _.$(".section__wallet");
const controllerDiv = _.$(".section__controller");

const walletModel = new WalletModel(coin);
new WalletView(walletModel, walletDiv);
new LogView(walletModel, controllerDiv);

const itemList = product.map((p) => new Item(p.name, p.price, p.count));

new ProductView(productDiv);
