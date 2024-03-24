<template>
  <div class="box">
    <div class="quantity-set">
      <button class="plus flex" @click="increase">+</button>
      <div class="quantity">1</div>
      <button class="plus flex">-</button>
    </div>
    <div>
      <img src="image.png" alt="" class="image" />
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.quantity-set {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
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
</style>
