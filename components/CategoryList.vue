<template>
  <div class="category_div">
    <div class="category_head">
      <i class="el-icon-menu mr-10"></i>
      <span>Categories</span>
    </div>

    <div class="category_list mt-10">
      <el-dropdown-item v-for="(category, index) in categories" :key="index">
        <span class="size-13"> {{ category.name }}</span>
      </el-dropdown-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryList',
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
    }
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
</style>
