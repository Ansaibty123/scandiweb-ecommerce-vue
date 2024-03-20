<template>
  <div class="dropdown">
    <div>
      <span class="item-name">My Bag,</span>
      <span class="item-qty">3 items</span>
    </div>
    <div class="cart-items">
      <div>
        <div>
          <div>
            <div class="text-1">Apollo</div>
            <div class="text-1">Running Short</div>
          </div>
          <div class="price">$50.00</div>
          <div>
            <div class="size">SIZE :</div>
            <div class="size-box flex">
              <div class="size-box1 flex">
                <span class="size-items">XS</span>
              </div>
              <div class="size-box1 flex" style="background-color: #1d1f22">
                <span class="size-items" style="color: #ffffff">S</span>
              </div>
              <div class="size-box1 flex">
                <span class="size-items">M</span>
              </div>
              <div class="size-box1 flex">
                <span class="size-items">L</span>
              </div>
            </div>
            <div class="color size-box">
              <div class="size">COLOR :</div>
              <div class="flex">
                <div
                  class="color-items"
                  style="background-color: #d3d2d5"
                ></div>
                <div
                  class="color-items"
                  style="background-color: #2b2b2b"
                ></div>
                <div
                  class="color-items"
                  style="background-color: #0f6450"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="box">
          <div class="quantity-set">
            <div class="plus flex">+</div>
            <div class="quantity">1</div>
            <div class="plus flex">-</div>
          </div>
          <div>
            <img src="image.png" alt="" class="image" />
          </div>
        </div>
      </div>
    </div>
    <div class="cart-items">
      <div>
        <div>
          <div>
            <div class="text-1">Jupiter</div>
            <div class="text-1">Wayfarer</div>
          </div>
          <div class="price">$75.00</div>
          <div>
            <div class="size">SIZE :</div>
            <div class="size-box flex">
              <div class="size-box1 flex">
                <span class="size-items">XS</span>
              </div>
              <div class="size-box1 flex" style="background-color: #1d1f22">
                <span class="size-items" style="color: #ffffff">S</span>
              </div>
              <div class="size-box1 flex">
                <span class="size-items">M</span>
              </div>
              <div class="size-box1 flex">
                <span class="size-items">L</span>
              </div>
            </div>
            <div class="color size-box">
              <div class="size">COLOR :</div>
              <div class="flex">
                <div
                  class="color-items"
                  style="background-color: #d3d2d5"
                ></div>
                <div
                  class="color-items"
                  style="background-color: #2b2b2b"
                ></div>
                <div
                  class="color-items"
                  style="background-color: #0f6450"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="box">
          <div class="quantity-set">
            <div class="plus flex">+</div>
            <div class="quantity">1</div>
            <div class="plus flex">-</div>
          </div>
          <div>
            <img src="image.png" alt="" class="image" />
          </div>
        </div>
      </div>
    </div>

    <div class="text-3">
      <div>Total</div>
      <div>$200</div>
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
    return {};
  },
};
</script>
<style scoped>
.flex {
  display: flex;
  gap: 10px;
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
.size-box1 {
  width: 24px;
  height: 24px;
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
  height: 20px;
  width: 20px;
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
  z-index: 1;
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
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
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
