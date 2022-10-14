<template>
  <div>
    <section class="container">
      <br>
      <Slider />
      <br>
      <div class="flex flex-direction-responsive">
        <div class="float-left category-grid">
          <div>
            <h2>Category</h2>
            <div class="pointer">
              <p @click="filterCategory('All')">All</p>
              <p @click="filterCategory('Men')">Men</p>
              <p @click="filterCategory('Women')">Women</p>
              <p @click="filterCategory('Kids')">Kids</p>
            </div>
          </div>
          <br>
          <br>
          <div class="pointer">
            <h2>Brand</h2>
            <div>
              <p @click="filterBrand('All')">All</p>
              <p @click="filterBrand('New Balance')">New Balance</p>
              <p @click="filterBrand('Adidas')">Adidas</p>
              <p @click="filterBrand('Nike')">Nike</p>
            </div>
          </div>
        </div>
        <div class="float-left product-grid">
          <br>
          <span class="float-right">{{ listProduct.length }} Items</span>
          <div>
            <br>
            <div class="product-grid__container">
              <div v-for="(item, idx) in listProduct" :key="idx" class="product-grid__item">
                <Card :product="item" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'indexPage',
  data() {
    return {
      listProduct: []
    }
  },
  mounted() {
    this.getListProduct()
  },
  methods: {
    async getListProduct() {
      const result = await this.$axios.get('https://my-json-server.typicode.com/azmi15003/api-assessment/products');
      this.listProduct = result.data
    },
    async filterCategory(category) {
      await this.getListProduct()

      if (category !== 'All') {
        this.listProduct = this.listProduct.filter(product => product.type === category)
      }
    },
    async filterBrand(brand) {
      await this.getListProduct()

      if (brand !== 'All') {
        this.listProduct = this.listProduct.filter(product => product.title === brand)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.category-grid {
  width: 100%;
}

.product-grid {
  width: 100%;

  .product-grid__container {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;

    .product-grid__item {
      width: calc(50% - 16px);
    }
  }
}

@media screen and (min-width: 1280px) {
  .category-grid {
    width: 25%;
  }
  .product-grid {
    width: 75%;
  }
  .product-grid__item {
    width: calc(25% - 24px) !important;
  }
}
</style>
