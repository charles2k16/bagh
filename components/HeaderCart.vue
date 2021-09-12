<template>
  <div>
    <el-dropdown trigger="click">
      <el-badge
        :value="numberOfItems"
        :max="10"
        class="item"
        :hidden="hasNoItem"
      >
        <div class="cart d-flex-center">
          <i class="el-icon-shopping-cart-2"></i>
        </div>
      </el-badge>

      <el-dropdown-menu slot="dropdown">
        <p>we are here</p>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  name: 'HeaderCart',
  data() {
    return {
      numberOfItems: 0,
      hasNoItem: true,
    }
  },
  // computed: {
  //   ...mapGetters({
  //     cartItems: 'getCartItems',
  //   }),
  // },
  // watch: {
  //   cartItems() {
  //     this.getCartItems()
  //   },
  // },
  // created() {
  //   this.getCartItems()
  // },
  methods: {
    getCartItems() {
      if (this.cartItems.length > 0) {
        this.itemsInCart = this.cartItems
        this.numberOfItems = this.cartItems.length
        this.hasNoItem = false
      } else {
        this.itemsInCart = []
        this.numberOfItems = 0
        this.hasNoItem = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.cart {
  width: 38px;
  height: 33px;
  border: 1px solid #ffd741;
  border-radius: 2px;
  background: var(--primary_yellow);
  cursor: pointer;

  i {
    color: black;
    font-weight: bold;
    font-size: 18px;
  }
}
</style>
