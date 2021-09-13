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
    <div class="mt-1 product_list_view">
      <div
        v-for="(product, index) in productsList"
        :key="index"
        class="products_div d-flex-col-center"
        @click="showProductDeatils(product.name, product.id)"
      >
        <img :src="product.media.source" height="150" />
        <div class="mt-1 px-0">
          <p class="product_name">{{ product.name }}</p>

          <div class="price_div mt-0">
            <span class="main_prize mr-1">
              ¢{{ product.price.formatted }}
            </span>
            <span class="cancel_prize"> ¢2,200.00 </span>
          </div>
        </div>
      </div>
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
      default: 'New products this week',
    },
    type: {
      type: String,
      default: 'all',
    },
  },
  data() {
    return {
      queryParams: {
        limit: 20,
      },
      productsList: [],
    }
  },
  async fetch() {
    await productService
      .getAllProducts(this.queryParams)
      .then((result) => {
        this.productsList = result
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    showProductDeatils(name, id) {
      this.$router.push({
        name: 'product-name',
        params: {
          name,
        },
        query: {
          id,
        },
      })
    },
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

.product_list_view {
  background: white;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100%;
  margin-bottom: 20px;
  -webkit-overflow-scrolling: touch;

  .products_div {
    width: 190px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    cursor: pointer;
    padding: 2px 0px 8px 0px;
    margin-right: 5px;

    .product_name {
      width: 160px;
      font-size: 13px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
</style>
