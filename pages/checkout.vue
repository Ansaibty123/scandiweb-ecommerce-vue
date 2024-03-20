<template>
  <div class="main-box">
    <navbar />
    <div class="cart">CART</div>
    <div class="cart-items">
      <div>
        <div>
          <div>
            <div class="text-1">Apollo</div>
            <div class="text-2">Running Short</div>
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
      <Totalshirt />
    </div>
    <div class="cart-items">
      <div>
        <div>
          <div>
            <div class="text-1">Jupiter</div>
            <div class="text-2">Wayfarer</div>
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
      <Totalshirt />
    </div>

    <div>
      <Total />
    </div>
  </div>
</template>
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
  margin-bottom: 16px;
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
.price {
  width: 79px;
  height: 24px;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: #1d1f22;
  margin-bottom: 10px;
}
.cart-items{
   display: flex; 
   justify-content: space-between;
   margin-bottom: 49px;
}
</style>
