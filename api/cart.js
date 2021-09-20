import commerce from "../plugins/commerceJs/commerce";

export default {
  name: 'cartService',

  createCart () {
    return commerce.cart.refresh()
      .then(cart => Promise.resolve(cart))
      .catch((error) => Promise.reject(error))
  },
  getCartsProducts () {
    return commerce.cart.retrieve()
      .then(cart => Promise.resolve(cart))
      .catch((error) => Promise.reject(error))
  }
}