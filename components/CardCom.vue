<template>
  <div>
    <div class="category-text">Category name</div>
    <nuxt-link to="/card">
      <div class="D-flex">
        <nuxt-link
          class="items"
          v-for="(item, i) in myData"
          :key="i"
          :to="'/shop/' + item.id"
        >
          <div class="image-box">
            <img :src="item.image" alt="" class="img-space" />
            <button class="cart-logo">
              <font-awesome-icon
                :icon="['fas', 'cart-shopping']"
                class="icon-color"
              />
            </button>
          </div>
          <div class="item-name">{{ item.shirt }}</div>
          <div class="item-price">{{ item.price }}</div>
        </nuxt-link>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
import products from "~/data/products.json";
export default {
  components: {},

  data() {
    return {
      myData: products,
    };
  },
 
};
</script>
<style scoped>
.D-flex {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
}
.items {
  width: 386px;
  height: 444px;
  padding: 16px;
}
.items:hover {
  box-shadow: 0px 4px 35px 0px rgba(168, 172, 176, 0.19);
}
.category-text {
  width: 299px;
  height: 68px;
  font-weight: 400;
  font-size: 42px;
  line-height: 67.2px;
  color: #1d1f22;
  margin-bottom: 103px;
}
.img-space {
  width: 354px;
  height: 330px;
}
.item-name {
  font-weight: 400;
  font-size: 18px;
  line-height: 28.8px;
  color: #1d1f22;
  margin-top: 24px;
}
.item-price {
  font-weight: 600;
  font-size: 18px;
  line-height: 28.8px;
  color: #1d1f22;
}

.card .stock-text {
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
}
.image-box {
  position: relative;
}
.cart-logo {
  width: 52px;
  height: 52px;
  position: absolute;
  bottom: 0px;
  right: 10px;
  background-color: rgba(94, 206, 123, 1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(0%, 50%);
  border: none;
}
.icon-color {
  color: white;
  font-size: 21.6px;
}
</style>
