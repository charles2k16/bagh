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
              <el-carousel-item class="br-5">
                <div class="d-flex-col-center">
                  <img
                    src="~/assets/img/products/bagp0002.jpg"
                    height="170px"
                  />
                  <div class="deal_prod_details mx-1 mt-1">
                    <h5>
                      HP OMEN - 16.1" Laptop - Intel Core i7 - 16GB Memory
                    </h5>
                    <el-rate
                      v-model="rating"
                      class="mt-1"
                      disabled
                      show-score
                      text-color="#ff9900"
                      score-template="(4)"
                    >
                    </el-rate>
                    <div class="price_div mt-1">
                      <span class="cancel_prize"> ¢2,800.00 </span>
                      <span class="main_prize"> ¢2,100.00 </span>
                    </div>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 4,
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
        { name: 'HP OMEN - 16.1" Laptop - Intel Core i7 - 16GB Memory' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.category_div {
  border: 1px solid rgb(236, 235, 235);
  border-radius: 4px;
  margin-top: 10px;

  .category_head {
    z-index: 2;
    position: relative;
    height: 43px;
    background-color: #ffd741;
    display: flex;
    align-items: center;
    padding: 15px;
    border: 1px solid #ffd741;

    &::after {
      content: ' ';
      position: absolute;
      right: 145px;
      bottom: -11px;
      border-top: none;
      border-right: 10px solid transparent;
      border-left: 10px solid transparent;
      border-top: 10px solid #ffd741;
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
  height: 378px;
  border-radius: 5px;
  border: 1px solid rgb(236, 235, 235);
}
</style>
