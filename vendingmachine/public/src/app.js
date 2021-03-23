import ProductView from "./productView.js";
import WalletView from "./walletView.js";
import _ from "./util.js";

const productDiv = _.$(".section__products");
const walletDiv = _.$(".wallet__coins");

new ProductView(productDiv);
new WalletView(walletDiv);
