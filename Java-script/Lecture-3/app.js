const products = [
  {
    id: 1,
    title: "მაიკა",
    price: 9.99,
    category: "Clothing",
  },
  {
    id: 2,
    title: "Percy Jeckson",
    price: 19.99,
    category: "Books",
  },
  {
    id: 3,
    title: "შარვალი",
    price: 29.99,
    category: "Clothing",
  },
  {
    id: 4,
    title: "დიდოსტატის მარჯვენა",
    price: 29.99,
    category: "Books",
  },
];

// function data_update(item) {
//   return item.map((product) => {
//     return {
//       ...product,
//       gagedo: "yleo",
//       Wiko: "mapის დამხმარებით დაგამატე ყლლეო",
//     };
//   });
// }

// console.log(data_update(products));

const Filteredlothing = products.filter(
  (product) => product.category === "Clothing"
);
const FilteredBook = products.filter((product) => product.category === "Books");

const FilteredCategory = {
  Clothing: Filteredlothing,
  Books: FilteredBook,
};

for (const Items in FilteredCategory) {
  const app = document.querySelector(".app");
  const ul = document.createElement("ul");
  app.appendChild(ul);
  ul.textContent = Items;

  const list = document.createElement("li");
  ul.appendChild(list);
  FilteredCategory[Items].forEach((item) => {
    list.innerText = `${item.title}, ${item.price}`;
  });
}
