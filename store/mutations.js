export default {
  updateWishlist(state, payload) {
    state.wishlist[payload.productId] = payload.isWishList;
  }
}
