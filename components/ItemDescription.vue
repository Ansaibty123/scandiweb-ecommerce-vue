<template>
  <div>
    <div>
      <div class="text-1">{{ product.shirt }}</div>
      <div class="text-2">Running Short</div>
    </div>
    <div>
      <div class="size">SIZE :</div>
      <div class="size-box flex">
        <div class="size-box1 flex"><span class="size-items">XS</span></div>
        <div class="size-box1 flex" style="background-color: #1d1f22">
          <span class="size-items" style="color: #ffffff">S</span>
        </div>
        <div class="size-box1 flex"><span class="size-items">M</span></div>
        <div class="size-box1 flex"><span class="size-items">L</span></div>
      </div>
      <div class="color size-box">
        <div class="size">COLOR :</div>
        <div class="flex">
          <div class="color-items" style="background-color: #d3d2d5"></div>
          <div class="color-items" style="background-color: #2b2b2b"></div>
          <div class="color-items" style="background-color: #0f6450"></div>
        </div>
      </div>
      <div>
        <div class="size price-mar">Price</div>
        <div class="size">{{ product.price }}</div>
      </div>
      <button class="btn">ADD TO CART</button>
      <div class="para">{{ paragraph }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],

  data() {
    return {
      paragraph: `Find stunning women's cocktail dresses 
                  and party dresses. Stand out in lace and metallic
                  cocktail dresses and party dresses from all your favorite brands.`,
    };
  },
};
</script>
<style scoped>
.flex {
  display: flex;
  gap: 10px;
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
.size-box1 {
  width: 63px;
  height: 45px;
  border: 1px solid #1d1f22;
  align-items: center;
  justify-content: center;
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
