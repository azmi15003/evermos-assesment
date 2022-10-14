<template>
  <div class="header">
    <div class="container header-wrapper flex items-center">
      <div class="logo">
        <NuxtLink :to="`/`">
          <img src="~assets/logo/jfk1.svg" height="32" />
        </NuxtLink>
      </div>
      <div>
        <input type="text" placeholder="Search.." name="search" class="header-search">
      </div>
      <div class="header-action" style="margin-left: auto">
        <a href="#">Wishlist</a>
        <a href="#">Keranjang</a>
        <a href="#">Akun</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.logo {
  display: none;
}
.header {
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 20%);
}

.header-wrapper {
  padding-top: 20px;
  padding-bottom: 20px;
}
.input-responsive {
  border: 1px solid rgba(0,0,0,0.4)
}
.header-search {
  display: none;
}

.header-action {
  a {
    padding: 8px;
  }
}
@media screen and (min-width: 1280px) {
  .header {
    background: #fff;
    position: sticky;
    top: 0;
    box-shadow: 0 1px 6px 0 rgb(0 0 0 / 20%);
  }
  .logo {
    width: 25%;
    display: inherit;
  }
  .header-search {
    min-width: 240px;
    border-radius: 6px;
    border: 1px solid #888;
    display: inline;
  }
  .product-grid {
    width: 75%;
  }
  .product-grid__item {
    width: calc(25% - 24px) !important;
  }
}
</style>
