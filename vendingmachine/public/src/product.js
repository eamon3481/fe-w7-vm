let products = [
  {
    name: "콜라",
    price: "500",
    count: 2,
    available: false,
  },
  {
    name: "사이다",
    price: "1500",
    count: 2,
    available: false,
  },
  {
    name: "파인애플맛 환타",
    price: "400",
    count: 2,
    available: false,
  },
  {
    name: "포도맛 환타",
    price: "300",
    count: 2,
    available: false,
  },
  {
    name: "레몬에이드",
    price: "900",
    count: 2,
    available: false,
  },
  {
    name: "봉봉",
    price: "1200",
    count: 2,
    available: false,
  },
  {
    name: "코코아주스",
    price: "1000",
    count: 2,
    available: false,
  },
  {
    name: "콜라제로",
    price: "1000",
    count: 2,
    available: false,
  },
  {
    name: "파워에이드",
    price: "2000",
    count: 2,
    available: false,
  },
  {
    name: "초코우유",
    price: "1000",
    count: 2,
    available: false,
  },
  {
    name: "초코에몽",
    price: "700",
    count: 2,
    available: false,
  },
  {
    name: "허니버터칩",
    price: "2300",
    count: 2,
    available: false,
  },
  {
    name: "딸바주스",
    price: "1000",
    count: 2,
    available: false,
  },
  {
    name: "바나나우유",
    price: "500",
    count: 2,
    available: false,
  },
  {
    name: "커피우유",
    price: "1000",
    count: 2,
    available: false,
  },
  {
    name: "알로에",
    price: "1200",
    count: 2,
    available: false,
  },
  {
    name: "콘칩",
    price: "1000",
    count: 2,
    available: false,
  },
  {
    name: "새우깡",
    price: "1000",
    count: 2,
    available: false,
  },
  {
    name: "감자칩",
    price: "2000",
    count: 2,
    available: false,
  },
  {
    name: "칸초",
    price: "1000",
    count: 2,
    available: false,
  },
];

function rendomfun() {
  return ~~(10 * Math.random());
}

let RendomProduct = (product) => {
  product.map((v) => (v.count = rendomfun()));
};

RendomProduct(products);

export default products;
