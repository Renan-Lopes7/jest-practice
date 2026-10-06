type OrderItem = {
  name: string;
  price: number;
  quantity: number;
};

const items = [
  {
    name: "Notebook",
    price: 3500,
    quantity: 1,
  },
  {
    name: "Mouse",
    price: 100,
    quantity: 2,
  },
];

export function calculateOrderTotal(items: OrderItem[]): number {
  return items.reduce((ac, item) => ac + item.price * item.quantity, 0);
}
