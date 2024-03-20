<template>
  <div>
    <div class="total">
      <div class="tax-box">
        <span class="tax">Tax 21%: </span>
        <span class="tax-no">$42.00</span>
      </div>
      <div>
        <span class="tax">Quantity:</span>
         <span class="tax-no">3</span>
      </div>
      <div><span class="tax">Total:</span>
         <span class="tax-no">$200.00</span></div>
    </div>
    <button class="btn">ORDER</button>
  </div>
</template>
<script></script>
<style scoped>
.btn {
  width: 279px;
  height: 43px;
  background-color: #5ece7b;
  padding: 16px, 32px, 16px, 32px;
  color: white;
  font-size: 14px;
  line-height:16.8px ;
  text-align: center;
  font-weight: 600;
}
.tax {
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
}
.tax-no {
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
}
.tax-box {
  width: 184px;
  height: 28px;
}
.total{
    display: flex;
    gap: 8px;
    flex-direction: column;
    margin-bottom: 16px;
}
</style>
