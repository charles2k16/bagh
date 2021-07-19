<template>
  <div>
    <div class="products_div_head d-flex">
      <span class="pdh_icon d-flex-center mr-1"
        ><i class="el-icon-price-tag"></i
      ></span>
      <span class="pdh_title d-flex-align-self-center">{{ title }}</span>
    </div>
    <div class="mt-1 plist_view">
      <div class="products_div d-flex-col-center">
        <img src="~/assets/img/products/1.jpg" height="140" />
        <div class="mt-0">
          <p class="product_name">Infinix XW01A Smart Watch - Black/Green</p>

          <div class="price_div mt-0">
            <span class="main_prize mr-1"> ¢100.00 </span>
            <span class="cancel_prize"> ¢2,200.00 </span>
          </div>

          <div class="mt-0">
            <span><i class="el-icon-collection-tag"></i></span>
            <el-button size="mini" plain type="warning">ADD TO CART</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsListNew',
  props: {
    title: {
      type: String,
      default: 'New products this week',
    },
    type: {
      type: String,
      default: 'all',
    },
  },
  data() {
    return {
      products: [
        {
          name: 'Infinix XW01A Smart Watch - Black/Green',
          description:
            'Infinix XW01A Smart Watch - Black/Green Infinix XW01A Smart Watch - Black/Green',
          price: 100,
          initial_price: 2100,
          image: '1.jpg',
        },
        {
          name: 'Infinix XW01A Smart Watch - Black/Green',
          description:
            'Infinix XW01A Smart Watch - Black/Green Infinix XW01A Smart Watch - Black/Green',
          price: 100,
          initial_price: 2100,
          image: '2.jpg',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
