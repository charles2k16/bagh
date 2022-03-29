<template>
  <div>
    <el-header class="sticky-header">
      <div class="section">
        <el-row :gutter="10">
          <el-col :xs="12" :sm="12" :md="5">
            <div class="header_flex_center justify_start">
              <NuxtLink to="/"> <img src="/bag1.png" /></NuxtLink>
            </div>
          </el-col>

          <el-col :xs="14" :sm="14" :md="15" class="hidden-sm-and-down">
            <div class="header_flex_center header_search_input">
              <el-autocomplete
                v-model="searchState"
                value-key="name"
                :fetch-suggestions="querySearchAsync"
                placeholder="Search for products"
                class="input-with-select"
                clearable
                :trigger-on-focus="false"
                highlight-first-item
                @select="onSelectedProduct"
              >
                <el-select
                  slot="prepend"
                  v-model="selectedSearch"
                  class="header_select"
                >
                  <el-option label="Products" value="products"></el-option>
                  <el-option label="Categories" value="categories"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-autocomplete>
            </div>
          </el-col>

          <el-col :xs="12" :sm="12" :md="4">
            <div class="header_flex_center justify_end">
              <HeaderCart />

              <el-dropdown trigger="click">
                <div class="account d-flex-center ml-20">
                  <i class="el-icon-user-solid icon"></i>
                  <span class="mx-10 hidden-sm-and-down">Account</span>
                  <i class="el-icon-arrow-down icon2 hidden-sm-and-down"></i>
                </div>

                <el-dropdown-menu slot="dropdown">
                  <div class="account_dropdown">
                    <div class="acc_info">
                      <p>
                        Login now or Create an account for easy order tracking,
                        rewards, offers and more.
                      </p>

                      <div>
                        <el-button type="danger" size="small" class="full-width"
                          ><b>Login</b></el-button
                        >
                      </div>

                      <div class="mt-10">
                        <el-button
                          size="small"
                          class="full-width"
                          type="danger"
                          plain
                          ><b>Create Account</b></el-button
                        >
                      </div>
                    </div>
                    <hr class="rule" />
                    <el-dropdown-item icon="el-icon-user"
                      >Account Settings</el-dropdown-item
                    >
                    <el-dropdown-item icon="el-icon-folder-add"
                      >Saved Items</el-dropdown-item
                    >
                    <el-dropdown-item icon="el-icon-shopping-cart-full"
                      >Orders & Purchases</el-dropdown-item
                    >
                  </div>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-header>
    <!-- mobile search-->
    <div
      v-if="isHomePage"
      class="header_flex_center header_search_input hidden-md-and-up"
    >
      <el-autocomplete
        v-model="searchState"
        value-key="name"
        :fetch-suggestions="querySearchAsync"
        placeholder="Search for products"
        class="input-with-select"
        clearable
        :trigger-on-focus="false"
        highlight-first-item
        @select="onSelectedProduct"
      >
        <el-select
          slot="prepend"
          v-model="selectedSearch"
          class="header_select"
        >
          <el-option label="Products" value="products"></el-option>
          <el-option label="Categories" value="categories"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-autocomplete>
    </div>
  </div>
</template>

<script>
import productService from '@/api/products'

export default {
  name: 'HeaderComponent',
  data() {
    return {
      searchState: '',
      selectedSearch: 'Prodcuts',
      searchItems: [],
      timeout: null,
    }
  },
  async fetch() {
    // get products and set response to this.searchItems
    const response = await productService.getProducts()
    this.searchItems = response
  },
  computed: {
    // searchResults() {
    //   return this.searchItems.filter((item) => {
    //     return (
    //       item.name.toLowerCase().indexOf(this.searchState.toLowerCase()) === 0
    //     )
    //   })
    // },
    isHomePage() {
      return this.$route.path === '/'
    },
  },
  methods: {
    onSelectedProduct(item) {
      this.showProductDeatils(item.name, item.id)
    },
    querySearchAsync(queryString, cb) {
      if (queryString !== '' && queryString.length > 2) {
        // if not empty and more than 2 characters
        // set timeout to simulate a server response
        this.timeout = setTimeout(() => {
          // clear timeout
          clearTimeout(this.timeout)
          // set queryString to lowercase
          queryString = queryString.toLowerCase()

          // filter the searchItems array by queryString
          const results = this.searchItems.filter((item) => {
            // if the item value contains the queryString
            // return the item
            return item.name.toLowerCase().indexOf(queryString) === 0
          })
          // call the callback function with the results
          cb(results)
        }, 500)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.sticky-header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--primary_red);
  height: 72px !important;
  font-size: 0.875rem;
  width: 100%;
}
.header_flex_center {
  height: 70px;
  display: flex;
  align-items: center;
}
.header_search_input {
  width: 90%;

  .input-with-select {
    width: 100%;
  }
}
.account {
  cursor: pointer;
  color: #e4e4e2;

  &:hover {
    color: var(--primary_yellow);
  }

  .icon {
    font-size: 25px;
    font-weight: bold;
  }
  .icon2 {
    font-size: 17px;
    font-weight: bold;
  }
  span {
    font-size: 18px;
    font-weight: normal;
    cursor: pointer;
  }
}
.account_dropdown {
  padding: 1px;
  max-width: 300px;
  max-height: 350px;
  overflow-y: scroll;

  .acc_info {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 15px;

    p {
      font-size: 14px;
      text-align: center;
      margin-bottom: 15px;
      margin-top: 5px;
    }
  }
}
</style>
