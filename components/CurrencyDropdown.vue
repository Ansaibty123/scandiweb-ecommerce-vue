<template>
  <div class="currency">
    <div v-for="(item, i) in currency" :key="i">
      <div class="text">
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currency: ["$ USD", "€ EUR", "¥ JPY"],
    };
  },
};
</script>
<style scoped>
.text {
  font-size: 18px;
  font-weight: 400;
  line-height: 28.8px;
  color: rgba(29, 31, 34, 1);
  padding: 8px 20px;
}
.currency {
  width: 114px;
}
.text:hover {
  background-color: rgba(238, 238, 238, 1);
}
</style>
