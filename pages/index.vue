<template>
  <div>
    <div class="section">
      <el-row :gutter="10">
        <el-col :xs="7" :sm="6" :md="4">
          <div class="category_div">
            <div class="category_head">
              <i class="el-icon-menu mr-10"></i>
              <span>Categories</span>
            </div>

            <div class="category_list mt-10">
              <el-dropdown-item
                v-for="(category, index) in categories"
                :key="index"
              >
                <span class="size-13"> {{ category.name }}</span>
              </el-dropdown-item>
            </div>
          </div>
        </el-col>
        <el-col :xs="7" :sm="6" :md="14">
          <div class="mt-10">
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
          <DailyDeals />
        </el-col>
      </el-row>

      <div class="mt-20">
        <ProductsList title="New products this week" type="new-products" />
      </div>

      <div class="mt-20">
        <ProductsList title="Featured Products" type="all" />
      </div>
    </div>
  </div>
</template>

<script>
// import categoriesService from '../api/categories'

export default {
  data() {
    return {
      categories: [
        { name: 'Apparel & Bags' },
        { name: 'Kitchen Accessories' },
        { name: 'Home & Office' },
        { name: 'Toys & Hobbies' },
        { name: 'Automobile Tools' },
        { name: 'Floral & Deco' },
        { name: 'Health & Beauty' },
        { name: 'Lights & Lightings' },
        { name: 'Electronics' },
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
  // async fetch() {
  //   await categoriesService
  //     .getAllCategories()
  //     .then((result) => {
  //       this.categories = result
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // },
  methods: {
    // gettee() {
    //   console.log('we arehereeeee fuck thats')
    // },
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
