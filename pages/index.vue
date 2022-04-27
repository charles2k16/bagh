<template>
  <div>
    <div class="section">
      <el-row :gutter="10">
        <el-col :md="4" class="hidden-sm-and-down">
          <CategoryList />
        </el-col>
        <el-col :xs="24" :sm="24" :md="14">
          <div class="mt-10">
            <el-carousel height="378px" class="carousel_container">
              <el-carousel-item class="br-5">
                <img src="/slide1.png" class="slider_img" />
              </el-carousel-item>
              <el-carousel-item class="br-5">
                <img src="/slide2.jpg" class="slider_img" />
              </el-carousel-item>
              <el-carousel-item class="br-5">
                <img src="/slide3.jpg" class="slider_img" />
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
        <el-col :md="6" class="hidden-sm-and-down">
          <DailyDeals />
        </el-col>
      </el-row>

      <div class="mt-20">
        <ProductsList title="New products this week" type="new-products" />
      </div>

      <div class="mt-20">
        <ProductsList title="Featured Products" type="all" />
      </div>

      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="12">
          <img src="/banners/banner2-10.jpg" alt="banner" width="100%" />
        </el-col>
        <el-col :xs="24" :sm="24" :md="12">
          <img src="/banners/banner3-10.jpg" alt="banner" width="100%" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
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
.daily_sales {
  background: #fff;
  height: 378px;
  border-radius: 5px;
  border: 1px solid rgb(226, 224, 224);
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
</style>
