<template>
  <div class="section mt-20">
    <el-skeleton :loading="productLoading" animated>
      <template slot="template">
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="11">
            <div>
              <el-skeleton-item
                variant="image"
                style="width: 100%; height: 180px"
              />
            </div>
          </el-col>

          <el-col :xs="24" :sm="24" :md="13">
            <div style="padding: 14px">
              <el-skeleton-item variant="p" style="width: 100%" />
              <div v-for="i in 5" :key="i">
                <el-skeleton-item variant="text" style="margin-right: 16px" />
                <el-skeleton-item variant="text" style="width: 30%" />
              </div>
            </div>
          </el-col>
        </el-row>
      </template>
    </el-skeleton>

    <el-row v-if="!productLoading" :gutter="10">
      <el-col :xs="24" :sm="24" :md="8">
        <div class="bg-white br-5 p-20 product_image_wrapper">
          <div class="full-width d-flex-center">
            <img :src="item.media.source" alt="item" class="product_image" />
          </div>

          <div class="thumbnail_container">
            <div class="br-5">
              <img
                :src="item.media.source"
                alt="item"
                class="product_thumbnail"
              />
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="11">
        <div class="bg-white br-5 p-20">
          <h2>{{ item.name }}</h2>
          <div class="d-flex mt-10 mb-10">
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
            <p class="mb-20" v-html="item.description"></p>

            <div class="d-flex">
              <el-button
                type="primary"
                size="medium"
                @click="showCartItems = true"
                ><b>Buy Now</b></el-button
              >

              <el-button
                type="info"
                icon="el-icon-shopping-cart-full"
                size="medium"
                ><b>Add to Cart</b></el-button
              >
            </div>
          </div>

          <div class="mt-20">
            <hr class="dot" />
            <ul class="mt-10 mb-20 item_discount_info">
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

      <el-col :xs="24" :sm="24" :md="5">
        <p>hello from the side bar product</p>
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
      showCartItems: false,
      productLoading: true,
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
        this.productLoading = false
        this.item = result
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
</script>

<style lang="scss" scoped>
.item_discount_info {
  li {
    font-size: 12px;
    list-style: inside;
  }
}
.product_image_wrapper {
  .product_image {
    max-width: 200px;
    width: 100%;
  }

  .thumbnail_container {
    display: flex;
    margin-top: 12px;

    div {
      width: 55px;
      border: 1px solid grey;
      margin-right: 5px;

      .product_thumbnail {
        width: 100%;
      }
    }
  }
}
</style>
