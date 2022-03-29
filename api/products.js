import commerce from '../plugins/commerceJs/commerce'

export default {
  name: 'productService',

  getProducts(query) {
    return commerce.products
      .list(query)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  getSingleProduct(productId) {
    return commerce.products
      .retrieve(productId)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  },
  // getProductsByCategory (query) {
  //   return commerce.products.list(query)
  //     .then(response => Promise.resolve(response.data))
  //     .catch((error) => Promise.reject(error))
  // },
}
