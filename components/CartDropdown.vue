<template>
  <div class="dropdown">
    <div>
      <span class="item-name">My Bag,</span>
      <span class="item-qty">{{ cartItems.length }} items</span>
    </div>
    <div class="cart-items" v-for="(cartItem, i) in cartItems" :key="i">
      <div>
        <div>
          <div>
            <div class="text-1">{{ cartItem.shirt }}</div>
            <div class="text-1">Running Short</div>
          </div>
          <div class="price"> $ {{ cartItem.price }}</div>
          <div>
            <div class="size">SIZE :</div>
            <div class="size-box flex">
              <button
                class="size-box1 flex"
                v-for="(item, i) in cartItem.sizes"
                :key="i"
                :class="{ 'selected-color': item == cartItem.size }"
              >
                <span class="size-items">{{ item }}</span>
              </button>
            </div>
            <div class="color size-box">
              <div class="size">COLOR :</div>
              <div class="flex">
                <button
                  class="color-items"
                  v-for="(item, i) in cartItem.colors"
                  :key="i"
                  :style="{ 'background-color': item }"
                  :class="{ 'selected-color': item == cartItem.color }"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="box">
          <div class="quantity-set">
            <button class="plus flex" @click="addToCart(cartItem)">+</button>
            <div class="quantity">{{ cartItem.qty }}</div>
            <button class="plus flex" @click="removeCart(cartItem)">-</button>
          </div>
          <div>
            <img :src="cartItem.image" alt="" class="image" />
          </div>
        </div>
      </div>
    </div>

    <div class="text-3">
      <div>Total</div>
      <div> $ {{ totalPrice }}</div>
    </div>

    <div class="btn-dropdown">
      <button class="view-btn">VIEW BAG</button>
      <nuxt-link to="/checkout">
        <button class="chectout-btn">CHECKOUT</button>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItemsGrouped;
    },
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + (item.qty * item.price), 0);
    }
  },
  methods: {
    addToCart(product) {
      this.$store.commit("addCartItem", product);
    },
    removeCart(product) {
      this.$store.commit("removeItem", product);
    },
  },
};
</script>
<style scoped>
.flex {
  display: flex;
  gap: 10px;
}
.color-items {
  height: 20px;
  width: 20px;
  border: none;
}
.size-box1 {
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border: none;
}
.color-items.selected-color {
  border: 2px solid rgba(94, 206, 123, 1);
}
.size-box1.selected-color{
  border: 2px solid rgba(94, 206, 123, 1);

}
.text-1 {
  font-weight: 400;
  font-size: 16px;
  line-height: 25.6px;
  color: #1d1f22;
  margin-bottom: 4px;
}
.size {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #1d1f22;
  margin-bottom: 8px;
}
.size-box {
  margin-bottom: 24px;
}

.size-items {
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #1d1f22;
}

.price {
  font-weight: 400;
  font-size: 16px;
  line-height: 25.6px;
  color: #1d1f22;
  margin-bottom: 8px;
}
.cart-items {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}
.item-name {
  font-weight: 700;
  font-size: 16px;
  line-height: 25.6px;
}
.item-qty {
  font-weight: 500;
  font-size: 16px;
  line-height: 25.6px;
}
.dropdown {
  padding: 16px;
}
.text-3 {
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #1d1f22;
}
.text-4 {
  font-weight: 700;
  font-size: 16px;
  line-height: 25.6px;
  color: #1d1f22;
}
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.quantity-set {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.box {
  display: flex;
  justify-content: center;
  gap: 8px;
}
.plus {
  width: 24px;
  height: 24px;
  border: 1px solid #1d1f22;
  font-size: 24px;
  font-weight: 400;
  line-height: 38.4px;
}
.quantity {
  width: 8px;
  height: 26px;
  font-size: 24px;
  font-weight: 500;
  line-height: 25.6px;
}
.image {
  width: 121px;
  height: 190px;
}
.view-btn {
  width: 140px;
  height: 43px;
  padding: 16px, 32px, 16px, 32px;
  font-weight: 600;
  font-size: 14px;
  line-height: 16.8px;
  text-align: center;
  color: #1d1f22;
}
.chectout-btn {
  width: 140px;
  height: 43px;
  padding: 16px, 32px, 16px, 32px;
  font-weight: 600;
  font-size: 14px;
  line-height: 16.8px;
  text-align: center;
  background-color: #5ece7b;
  color: #ffffff;
}
.text-3 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
}
.btn-dropdown {
  display: flex;
  justify-content: space-between;
}
</style>
