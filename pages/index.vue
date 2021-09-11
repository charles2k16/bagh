<template>
  <div>
    <div class="section">
      <el-row :gutter="10">
        <el-col :xs="7" :sm="6" :md="4">
          <div class="category_div">
            <div class="category_head">
              <i class="el-icon-menu mr-1"></i>
              <span>Categories</span>
            </div>

            <div class="category_list mt-1">
              <el-dropdown-item
                v-for="(category, index) in categories"
                :key="index"
              >
                {{ category.name }}
              </el-dropdown-item>
            </div>
          </div>
        </el-col>
        <el-col :xs="7" :sm="6" :md="14">
          <div class="mt-1">
            <el-carousel height="378px">
              <el-carousel-item class="br-5">
                <img src="/slide1.png" height="378" />
              </el-carousel-item>
              <el-carousel-item class="br-5">
                <img src="/slide2.jpg" height="378" />
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
        <el-col :xs="7" :sm="6" :md="6">
          <div class="mt-1 daily_sales">
            <div class="deal_icon d-flex">
              <img src="/icon-deal.png" alt="sale" />
              <CountDown />
            </div>
            <el-carousel height="300px" arrow="always">
              <el-carousel-item
                v-for="(deals, index) in dailyDeals"
                :key="index"
                class="br-5"
              >
                <div class="d-flex-col-center">
                  <img
                    :src="require(`~/assets/img/products/${deals.image}`)"
                    height="170px"
                  />
                  <div class="mx-1 mt-1">
                    <h5>
                      {{ deals.name }}
                    </h5>
                    <el-rate
                      v-model="deals.rating"
                      class="mt-1"
                      disabled
                      show-score
                      text-color="#ff9900"
                      score-template="(4)"
                    >
                    </el-rate>
                    <div class="price_div mt-1">
                      <span class="cancel_prize mr-1">
                        {{ getPriceWithCommas(deals.initial_price) }}
                      </span>
                      <span class="main_prize">
                        {{ getPriceWithCommas(deals.price) }}
                      </span>
                    </div>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
      </el-row>

      <div class="mt-2">
        <ProductsListNew title="New products this week" type="new" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { name: 'Health & Beauty' },
        { name: 'Floral & Deco.' },
        { name: 'Automobile Tools' },
        { name: 'Toys & Hobbies' },
        { name: 'Electronics' },
        { name: 'Home & Office' },
        { name: 'Kitchen Accessories' },
        { name: 'Apparel & Bags' },
        { name: 'Lights & Lightings' },
      ],
      dailyDeals: [
        {
          name: 'HP OMEN - 16.1" Laptop - Intel Core i7 - 16GB Memory',
          price: 1800,
          initial_price: 2300,
          image: 'bagp0002.jpg',
          rating: 4,
        },
        {
          name: 'Westpool WP-666 Electric Blender - 1.5 Litres - Black',
          price: 200,
          initial_price: 250,
          image: 'bagp0001.jpg',
          rating: 3,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.category_div {
  border: 1px solid rgb(226, 224, 224);
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  background: #fff;
  border-radius: 4px;
  margin-top: 10px;

  .category_head {
    z-index: 2;
    position: relative;
    height: 43px;
    background-color: var(--sec_yellow);
    display: flex;
    align-items: center;
    padding: 15px;
    border: 1px solid var(--sec_yellow);

    &::after {
      content: ' ';
      position: absolute;
      right: 145px;
      bottom: -11px;
      border-top: none;
      border-right: 10px solid transparent;
      border-left: 10px solid transparent;
      border-top: 10px solid var(--sec_yellow);
    }

    i {
      font-weight: bold;
      font-size: 18px;
    }

    span {
      font-size: 15px;
      text-transform: uppercase;
      font-weight: bold;
    }
  }

  .category_list .el-dropdown-menu__item {
    font-size: 12px;
  }
}

.daily_sales {
  background: #fff;
  height: 378px;
  border-radius: 5px;
  border: 1px solid rgb(226, 224, 224);
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
</style>
