<template>
  <div class="main-box">
    <navbar />
    <div class="cart">CART</div>
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
   
    <div>
      <Total />
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
.main-box{
    padding: 0px 100px 100px 100px;
}
.cart {
  width: 84px;
  height: 40px;
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  color: #1d1f22;
  margin-bottom: 80px;
  margin-top: 80px;
}
.text-1 {
  width: 292px;
  height: 27px;
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  color: #1d1f22;
  margin-bottom: 40px;
}
.text-2 {
  width: 292px;
  height: 27px;
  font-weight: 400;
  font-size: 30px;
  line-height: 27px;
  color: #1d1f22;
  margin-bottom: 20px;
}
.size {
  font-weight: 700;
  font-size: 24px;
  line-height: 18px;
  color: #1d1f22;
  margin-bottom: 20px;
}
.size-box {
  margin-bottom: 24px;
}
.size-box1 {
  width: 63px;
  height: 45px;
  border: 1px solid #1d1f22;
  align-items: center;
  justify-content: center;
  border: none;
}
.size-items {
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #1d1f22;
}
.color-items {
  height: 32px;
  width: 32px;
  border: none;
}
.price {
  width: 79px;
  height: 24px;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: #1d1f22;
  margin-bottom: 30px;
}
.cart-items{
   display: flex; 
   justify-content: space-between;
   margin-bottom: 49px;
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
  gap: 24px;
}
.plus {
  width: 45px;
  height: 45px;
  border: 1px solid #1d1f22;
  font-size: 24px;
  font-weight: 500;
  line-height: 38.4px;
}
.quantity {
  width: 10px;
  height: 52.93px;
  font-size: 24px;
  font-weight: 500;
  line-height: 38.4px;
}
.image {
  width: 200px;
  height: 288px;
}
.color-items.selected-color {
  border: 2px solid rgba(94, 206, 123, 1);
}
.size-box1.selected-color{
  border: 2px solid rgba(94, 206, 123, 1);

}
</style>
