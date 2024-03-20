<template>
  <div>
    <nav class="navbar">
      <div class="nav">
        <div
          class="nav-link"
          v-for="(item, i) in navitems"
          :key="i"
          :class="{
            'nav-link-active': activeNavItem === item,
          }"
          @click="activeNavItem = item"
        >
          {{ item }}
        </div>
      </div>
      <nuxt-link to="/">
        <div class="logo-box">
          <logo />
        </div>
      </nuxt-link>

      <div class="d-flex">
        <div class="is-relative">
          <button @click="onClickDollar" class="nav-button">
            <dollar />
          </button>
          <currency-dropdown v-if="dollar" class="currency-dropdown" />
        </div>

        <div class="is-relative">
          <button class="nav-button" @click="onClickCart">
            <cart />
          </button>
          <CartDropdown v-if="toggle" class="dropdown" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import logo from "../assets/logo.vue";
import dollar from "../assets/dollar.vue";
import cart from "../assets/cart.vue";
import CartDropdown from "./CartDropdown.vue";
import CurrencyDropdown from "./CurrencyDropdown.vue";
export default {
  components: { logo, dollar, cart, CartDropdown, CurrencyDropdown },
  name: "Navbar",
  data() {
    return {
      navitems: ["WOMEN", "MEN", "KIDS"],
      activeNavItem: "MEN",
      toggle: false,
      dollar: false,
    };
  },
  methods: {
    onClickCart() {
      this.toggle = !this.toggle;
    },
    onClickDollar() {
      this.dollar = !this.dollar;
    },
  },
};
</script>
<style scoped>
.d-flex {
  display: flex;
  gap: 20px;
  position: relative;
}

.navbar {
  height: 80px;
}
.nav {
  display: flex;
}
.nav-link {
  font-weight: 600;
  font-size: 16px;
  line-height: 19.2px;
  text-align: center;
  color: #5ece7b;
  padding: 32px 16px;
  padding-top: 10px;
  cursor: pointer;
}

.nav-link:hover {
  background: #5ece7c1d;
}
.nav-link-active {
  border-bottom: 2px solid #5ece7b;
}
.logo-box {
  height: 41px;
  width: 41px;
}
.nav-button {
  height: 29px;
  width: 32px;
  font-size: 18px;
  font-weight: 400;
  color: #1d1f22;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
}

.nav-button:hover {
  background: lightgrey;
}

.dropdown {
  width: 325px;
  position: absolute;
  top: 35px;
  right: 0px;
  background: white;
  border: 1px dotted black;
}
.currency-dropdown {
  width: 114px;
  position: absolute;
  top: 35px;
  right: 0px;
  background: white;
  box-shadow: 0px 4px 35px 0px rgba(168, 172, 176, 0.19);
}
</style>
