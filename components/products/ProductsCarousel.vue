<template>
  <div class="product_list_view">
    <div
      v-for="(product, index) in products"
      :key="index"
      class="products_div d-flex-col-center"
      @click="showProductDeatils(product.name, product.id)"
    >
      <img :src="product.media.source" height="150" />
      <div class="mt-1 px-0">
        <p class="product_name">{{ product.name }}</p>

        <div class="price_div mt-0">
          <span class="main_prize mr-1"> ¢{{ product.price.formatted }} </span>
          <span class="cancel_prize"> ¢2,200.00 </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsCarousel',
  props: {
    products: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.product_list_view {
  background: white;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100%;
  margin-bottom: 20px;
  -webkit-overflow-scrolling: touch;
}
</style>
