export const state = () => ({
  cartItems: [],
});

export const mutations = {
  setCartItems(state, value) {
    state.cartItems = value;
  },
  addCartItem(state, newItem) {
    state.cartItems.push(newItem);
  },
  removeItem(state, newItem) {
    const index = state.cartItems.findIndex((item) => {
      return (
        item.id == newItem.id &&
        item.color == newItem.color &&
        item.size == newItem.size
      );
    });
    if (index != -1) {
      state.cartItems.splice(index, 1);
    }
  },
};

export const getters = {
  cartItemsGrouped(state) {
    const items = [];

    state.cartItems.forEach((newItem) => {
      const index = items.findIndex((item) => {
        return (
          item.id == newItem.id &&
          item.color == newItem.color &&
          item.size == newItem.size
        );
      });
      if (index != -1) {
        items[index].qty++;
      } else {
        items.push({
          ...newItem,
          qty: 1,
        });
      }
    });
    return items;
  },
};

//   cartItemsGroupedOptimized(state) {
//     const items = [];

//     const itemIndex = {
//       "1-red-m": 0,
//       "2-green-m": 1,
//     };

//     cartItems.forEach((item) => {
//       const uniqueId = item.id + "-" + item.color + "-" + item.size;
//       //example  uniqueId = '2-green-m"
//       if (uniqueId in itemIndex) {
//         const index = itemIndex[uniqueId];
//         items[index].qty++;
//       } else {
//         items.push({
//           ...item,
//           qty: 1,
//         });
//       }
//     });
//   },
