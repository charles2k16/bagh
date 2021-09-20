<template>
  <div class="section mt-2">
    <div v-if="item == null" v-loading="loading" class="mt-2"></div>

    <el-row v-else :gutter="10">
      <el-col :xs="24" :sm="24" :md="11">
        <div class="bg-white br-5 p-2">
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item style="text-align: center">
              <img
                :src="item.media.source"
                alt="item"
                class="product_carousel"
              />
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="13">
        <div class="bg-white br-5 p-2">
          <h2>{{ item.name }}</h2>
          <div class="d-flex mt-1 mb-1">
            <el-rate v-model="rateValue" disabled text-color="#e5c13a">
            </el-rate>
            <span class="">(3 customer review)</span>
          </div>
          <hr class="dot" />
          <div class="d-flex">
            <el-button type="text" class="cancel_prize color-primary"
              >GH₵ {{ item.price.formatted }}</el-button
            >
            <el-button type="text">
              <span class="color-primary" style="font-size: 25px"
                >GH₵ {{ item.price.formatted }}</span
              >
            </el-button>
          </div>
          <div>
            <p class="mb-2" v-html="item.description"></p>

            <div class="d-flex">
              <el-button type="primary" size="medium"><b>Buy Now</b></el-button>

              <el-button
                type="info"
                icon="el-icon-shopping-cart-full"
                size="medium"
                ><b>Add to Cart</b></el-button
              >
            </div>
          </div>

          <div class="mt-2">
            <hr class="dot" />
            <ul class="mt-1 mb-2 item_discount_info">
              <li>Free Delivery for Items GH₵ 100 and above.</li>
              <li>10% Discount on Food Packages</li>
            </ul>
            <div class="d-flex-justify-between">
              <div>
                <p class="mb-0">Share this product</p>
                <span>
                  <a href="" class="mr-0">
                    <img src="/instagram.png" alt="icon" width="20" />
                  </a>
                  <a href="" class="mr-0">
                    <img src="/facebook.png" alt="icon" width="20" />
                  </a>
                  <a href="">
                    <img src="/whatsapp.png" alt="icon" width="20" />
                  </a>
                </span>
              </div>
              <div>
                <p class="mb-0">Add to your saved products</p>
                <span>
                  <el-button plain size="mini" icon="el-icon-collection-tag"
                    >Add to saved</el-button
                  >
                </span>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import productService from '../../api/products'

export default {
  name: 'SingleProduct',
  data() {
    return {
      loading: true,
      item: null,
      rateValue: 3,
      showProductModal: true,
      showCheckoutButton: false,
    }
  },
  async fetch() {
    await productService
      .getSingleProduct(this.$route.query.id)
      .then((result) => {
        this.item = result
        this.loading = false
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
</script>

<style lang="scss" scoped>
.item_discount_info li {
  font-size: 12px;
  list-style: inside;
}
</style>
