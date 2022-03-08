import commerce from "../plugins/commerceJs/commerce";

export default {
  name: 'categoriesService',

  getAllCategories () {
    return commerce.categories.list()
      .then(categories => Promise.resolve(categories.data))
      .catch((error) => Promise.reject(error))
  }
}