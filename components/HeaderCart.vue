<template>
  <div>
    <el-badge :value="numberOfItems" :max="10" class="item" :hidden="hasNoItem">
      <div class="cart d-flex-center" @click="getCartItems">
        <i class="el-icon-shopping-cart-2"></i>
      </div>
    </el-badge>

    <!-- <el-dialog title="Cart Items" :visible.sync="showCartItems" width="50%">
      <div>
        <span>This is a message</span>
      </div>
    </el-dialog> -->
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  name: 'HeaderCart',
  data() {
    return {
      numberOfItems: 2,
      hasNoItem: false,
      showCartItems: false,
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
      // if (this.cartItems.length > 0) {
      //   this.itemsInCart = this.cartItems
      //   this.numberOfItems = this.cartItems.length
      //   this.hasNoItem = false
      // } else {
      //   this.itemsInCart = []
      //   this.numberOfItems = 0
      //   this.hasNoItem = true
      // }
      console.log('tis is the thing')
      // this.showCartItems = true
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
