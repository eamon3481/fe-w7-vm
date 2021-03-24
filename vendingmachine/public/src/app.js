import _ from "./util.js";
import product from "./product.js";
import coin from "./coin.js";
import WalletView from "./walletView.js";
import InsertMoneyView from "./insertMoneyView.js";
import Item from "./item.js";
import ListView from "./listView.js";
import WalletModel from "./walletModel.js";

const productDiv = _.$(".section__products");
const walletDiv = _.$(".wallet__coins");
const InsertCoinDiv = _.$(".controller__total");

const walletModel = new WalletModel(coin);
new WalletView(walletModel, walletDiv);
new InsertMoneyView(walletModel, InsertCoinDiv);

const itemList = product.map((p) => new Item(p.name, p.price, p.count));

new ListView(itemList, productDiv);
