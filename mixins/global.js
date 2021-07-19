export default {
  methods: {
    getPriceWithCommas (productPrice) {
      const commas = productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      const price = `¢${commas}.00`
      return price;
    }
  }
}