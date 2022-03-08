<template>
  <div class="mt-10 daily_sales">
    <div class="d-flex">
      <img src="/icon-deal.png" alt="sale" />
      <!-- <CountDown /> -->
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
          <div class="mx-10 mt-10">
            <h5>
              {{ deals.name }}
            </h5>
            <el-rate
              v-model="deals.rating"
              class="mt-10"
              disabled
              show-score
              text-color="#ff9900"
              score-template="(4)"
            >
            </el-rate>
            <div class="mt-10">
              <span class="cancel_prize mr-10">
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
</template>

<script>
export default {
  name: 'DailyDeals',
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
