<template>
  <main>
    <div>
      <div class="text-1">{{ product.shirt }}</div>
      <div class="text-2">Running Short</div>
    </div>
    <div>
      <div class="size">SIZE :</div>
      <section class="size-box flex">
        <button
          v-for="(item, i) in product.sizes"
          :key="i"
          :class="{ 'selected-color': item == selectedSize }"
          @click="addSize(item)"
          class="size-box1 flex"
        >
          <span class="size-items">{{ item }}</span>
        </button>
      </section>
      <section class="color size-box">
        <div class="size">COLOR :</div>
        <div class="flex">
          <button
            v-for="(item, i) in product.colors"
            :key="i"
            class="color-items"
            :class="{ 'selected-color': item == selectedColor }"
            :style="{ backgroundColor: item }"
            @click="addColor(item)"
          ></button>
        </div>
      </section>
    </div>
    <button class="btn" @click="addToCart(product)">ADD TO CART</button>

    <div class="para">{{ paragraph }}</div>
  </main>
</template>
<script>
export default {
  props: ["product"],

  data() {
    return {
      paragraph: `Find stunning women's cocktail dresses
                  and party dresses. Stand out in lace and metallic
                  cocktail dresses and party dresses from all your favorite brands.`,
      selectedColor: "",
      selectedSize: "",
    };
  },
  methods: {
    addToCart(product) {
      // this.addShirt.push(product);
      this.$store.commit("addCartItem", {
        ...product,
        color: this.selectedColor,
        size: this.selectedSize,
      });
    },
    addColor(value) {
      this.selectedColor = value;
    },
    addSize(value) {
      this.selectedSize = value;
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
  height: 32px;
  width: 32px;
  border: none;
}

.size-box1.selected-color {
  border: 2px solid rgba(94, 206, 123, 1);
}

.color-items.selected-color {
  border: 2px solid rgba(94, 206, 123, 1);
}

.size-box1 {
  width: 63px;
  height: 45px;
  align-items: center;
  justify-content: center;
  border: none;
}

.text-1 {
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  color: #1d1f22;
  margin-bottom: 16px;
}
.text-2 {
  font-weight: 400;
  font-size: 30px;
  line-height: 27px;
  color: #1d1f22;
  margin-bottom: 43px;
}
.size {
  font-weight: 700;
  font-size: 24px;
  line-height: 18px;
  color: #1d1f22;
  margin-bottom: 10px;
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

.btn {
  width: 292px;
  height: 52px;
  background-color: #5ece7b;
  color: white;
  padding: 16px, 32px, 16px, 32px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.para {
  width: 292px;
  height: 103px;
  font-weight: 400;
  font-size: 16px;
  line-height: 25.59px;
  color: #1d1f22;
}

.price-mar {
  margin-bottom: 10px;
}
</style>
