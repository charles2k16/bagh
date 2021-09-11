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
      <div class="products_div d-flex-col-center">
        <img src="~/assets/img/products/1.jpg" height="150" />
        <div class="mt-0">
          <p class="product_name">Infinix XW01A Smart Watch - Black/Green</p>

          <div class="price_div mt-0">
            <span class="main_prize mr-1"> ¢100.00 </span>
            <span class="cancel_prize"> ¢2,200.00 </span>
          </div>

          <!-- <div class="mt-0">
            <span><i class="el-icon-collection-tag"></i></span>
            <el-button size="mini" plain type="warning">ADD TO CART</el-button>
          </div> -->
        </div>
      </div>

      <div class="products_div d-flex-col-center">
        <img src="~/assets/img/products/1.jpg" height="150" />
        <div class="mt-0">
          <p class="product_name">Infinix XW01A Smart Watch - Black/Green</p>

          <div class="price_div mt-0">
            <span class="main_prize mr-1"> ¢100.00 </span>
            <span class="cancel_prize"> ¢2,200.00 </span>
          </div>

          <!-- <div class="mt-0">
            <span><i class="el-icon-collection-tag"></i></span>
            <el-button size="mini" plain type="warning">ADD TO CART</el-button>
          </div> -->
        </div>
      </div>

      <div class="products_div d-flex-col-center">
        <img src="~/assets/img/products/1.jpg" height="150" />
        <div class="mt-0">
          <p class="product_name">Infinix XW01A Smart Watch - Black/Green</p>

          <div class="price_div mt-0">
            <span class="main_prize mr-1"> ¢100.00 </span>
            <span class="cancel_prize"> ¢2,200.00 </span>
          </div>

          <!-- <div class="mt-0">
            <span><i class="el-icon-collection-tag"></i></span>
            <el-button size="mini" plain type="warning">ADD TO CART</el-button>
          </div> -->
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
