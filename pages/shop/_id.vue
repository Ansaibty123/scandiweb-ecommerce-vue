<template>
  <div class="main-box">
    <Navbar />
    <div class="main">
      <ItemCard :product="product" />
      <ItemDescription :product="product"/>
    </div>
    
  </div>
</template>
<script>
import products from "~/data/products.json";

export default {
  computed: {
    product() {
      const id = this.$route.params.id;
      const product = products.find((item) => item.id == id);
      return product;
    },
  },
};
</script>
<style scoped>
.main {
  display: flex;
  gap: 100px;
  margin-top: 80px;
}
.main-box {
  padding: 0px 100px 100px 100px;
}
.nav {
  margin-bottom: 80px;
}
</style>
