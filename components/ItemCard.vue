<template>
  <div>
    <section>
      <div class="box-mini">
        <div class="img">
          <img :src="product.image" alt="" class="img-space" />
        </div>
        <div class="img">
          <img :src="product.image" alt="" class="img-space" />
        </div>
        <div class="img">
          <img :src="product.image" alt="" class="img-space" />
        </div>
      </div>

      <div class="box-mega">
        <img :src="product.image" alt="" class="image-size" />
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: ["product"],
};
</script>
<style scoped>
.img {
  height: 80px;
  width: 79px;
}
.box-mega {
  height: 595px;
  width: 610px;
}
.img-space {
  height: 80px;
  width: 79px;
}
section {
  display: flex;
  gap: 40px;
}
.box-mini {
  display: flex;
  gap: 40px;
  flex-direction: column;
}
.image-size {
  height: 511px;
  width: 610px;
}
</style>
