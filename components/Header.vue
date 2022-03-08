<template>
  <el-header class="sticky-header">
    <div class="section">
      <el-row :gutter="10">
        <el-col :xs="7" :sm="7" :md="4">
          <div class="header_flex_center">
            <NuxtLink to="/"> <img src="/bag1.png" /></NuxtLink>
          </div>
        </el-col>

        <el-col :xs="14" :sm="14" :md="15">
          <div class="header_flex_center header_search_input">
            <el-input v-model="searchItem" placeholder="Search product...">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </el-col>

        <el-col :xs="3" :sm="3" :md="5">
          <div class="header_flex_center">
            <HeaderCart />

            <el-dropdown trigger="click">
              <div class="account d-flex-center ml-20">
                <i class="el-icon-user-solid icon"></i>
                <span class="mx-10">Account</span>
                <i class="el-icon-arrow-down icon2"></i>
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
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      searchItem: '',
    }
  },
  methods: {
    gettee() {
      console.log('we arehereeeee fuck thats')
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
