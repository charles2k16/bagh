<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="12">
        <div>
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item class="p-2" style="text-align: center">
              <img
                style="text-align: center"
                :src="item.media.source"
                alt="item"
                width="70%"
              />
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12">
        <div>
          <h2>{{ item.name }}</h2>
          <div class="d-flex mb-1">
            <el-rate v-model="rateValue" disabled text-color="#6c9804">
            </el-rate>
            <span class="">(3 customer review)</span>
          </div>
          <hr style="border: 1px dotted rgb(250, 249, 249)" />
          <div class="d-flex">
            <el-button type="text" class="cancel_prize"
              >GH₵ {{ item.price.formatted }}</el-button
            >
            <el-button type="text">
              <span style="font-size: 25px"
                >GH₵ {{ item.price.formatted }}</span
              >
            </el-button>
          </div>
          <div>
            <p class="mb-2">
              Donec non est at libero vulputate rutrum. Morbi ornare lectus quis
              justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus
              eu, suscipit id nulla. Donec a neque libero.
            </p>
            <span>
              <el-button
                v-show="!showCheckoutButton"
                type="primary"
                icon="el-icon-shopping-cart-full"
                size="medium"
                class="full-width"
                @click="addToCart(item)"
                >ADD TO CART</el-button
              >
            </span>

            <span>
              <el-button
                v-show="showCheckoutButton"
                type="danger"
                icon="el-icon-shopping-cart-full"
                size="medium"
                class="full-width px-1"
                @click="checkout"
                >PROCEED TO CHECKOUT</el-button
              >
            </span>
          </div>

          <div class="mt-2">
            <hr style="border: 1px dotted rgb(250, 249, 249)" />
            <ul class="mt-1 mb-2 item-discount-info">
              <li>Free Delivery for Items GH₵ 100 and above.</li>
              <li>10% Discount on Food Packages</li>
            </ul>
            <div class="flex-justify">
              <div>
                <p class="mb-1">Share this product</p>
                <span>
                  <a href="" class="mr-1">
                    <img src="/instagram.png" alt="icon" width="20" />
                  </a>
                  <a href="" class="mr-1">
                    <img src="/facebook.png" alt="icon" width="20" />
                  </a>
                  <a href="">
                    <img src="/whatsapp.png" alt="icon" width="20" />
                  </a>
                </span>
              </div>
              <div>
                <p class="mb-1">Add to your saved products</p>
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
      item: null,
      rateValue: 3,
      showProductModal: true,
      showCheckoutButton: false,
    }
  },
  created() {
    productService
      .getSingleProduct(this.$route.query.id)
      .then((result) => {
        this.item = result
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
</script>
