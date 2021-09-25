import { createReducer } from "redux-act";
import faker from "faker";

import { setProducts } from "../actions";

const initProducts = [...Array(20)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  image: faker.random.image(),
  inStock: faker.random.arrayElement([0, 3, 4, 6, 9]),
  fastDelivery: faker.datatype.boolean(),
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
}));

export default createReducer(
  {
    [setProducts]: (state, payload) => payload,
  },
  initProducts
);
