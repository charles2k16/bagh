export default {
  methods: {
    showProductDeatils (name, id) {
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
    // getPriceWithCommas (productPrice) {
    //   const commas = productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //   const price = `¢${commas}.00`
    //   return price;
    // }
  }
}