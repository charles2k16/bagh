<template>
  <div>
    <div class="products_div_head d-flex-justify-between">
      <div class="d-flex">
        <span class="pdh_icon d-flex-center mr-1"
          ><i class="el-icon-price-tag"></i
        ></span>
        <span class="pdh_title d-flex-align-self-center">{{ title }}</span>
      </div>
      <div class="mr-0 clickable">
        <span class="pdh_see_all">See All</span>
        <i class="el-icon-arrow-right small-icon"></i>
      </div>
    </div>

    <div class="mt-1">
      <el-skeleton :loading="productsLoading" animated>
        <template slot="template">
          <div class="d-flex">
            <div v-for="i in 6" :key="i" class="mr-0">
              <el-skeleton-item
                variant="image"
                style="width: 190px; height: 150px"
              />
              <div class="mt-0">
                <el-skeleton-item variant="h3" style="width: 90%" />
                <div class="d-flex-justify-between mt-1" style="height: 16px">
                  <el-skeleton-item variant="text" class="mr-1" />
                  <el-skeleton-item variant="text" style="width: 50%" />
                </div>
              </div>
            </div>
          </div>
        </template>
        <template slot="">
          <div v-if="type == 'new-products'">
            <ProductsCarousel :products="products" />
          </div>
          <div v-else class="mt-1">
            <Products :products="products" />
          </div>
        </template>
      </el-skeleton>
    </div>
  </div>
</template>

<script>
import productService from '../../api/products'

export default {
  name: 'ProductsListNew',
  props: {
    title: {
      type: String,
      default: 'All products',
    },
    type: {
      type: String,
      default: 'all',
    },
  },
  data() {
    return {
      count: 6,
      productsLoading: true,
      queryParams: {
        limit: 12,
        category_slug: this.type,
      },
      products: [],
    }
  },
  async fetch() {
    this.queryParams = this.type !== 'new-products' ? {} : this.queryParams

    await productService
      .getProducts(this.queryParams)
      .then((result) => {
        this.productsLoading = false
        this.products = result
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
</script>

<style lang="scss" scoped>
.products_div_head {
  background: white;
  width: 100%;
  height: 35px;
  border-radius: 4px;

  .pdh_icon {
    height: 35px;
    width: 35px;
    background: var(--primary_red);

    i {
      color: white;
    }
  }

  .pdh_title {
    text-transform: uppercase;
    font-weight: 600;
  }

  .pdh_see_all {
    color: var(--primary_red);
    font-size: 12px;
    text-transform: uppercase;
  }
}
</style>
