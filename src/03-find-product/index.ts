type Product = {
  id: number;
  name: string;
  price: number;
  active: boolean;
};

const products = [
  {
    id: 1,
    name: "Notebook",
    price: 3500,
    active: true,
  },
  {
    id: 2,
    name: "Mouse",
    price: 100,
    active: false,
  },
  {
    id: 3,
    name: "keyboard",
    price: 200,
    active: true,
  },
  {
    id: 4,
    name: "monitor",
    price: 3000,
    active: true,
  },
];

export function findProduct(products: Product[], id: number): Product | null {
  const findProduct = products.find(
    (product) => product.id === id && product.active === true,
  );

  return findProduct ?? null;
}
