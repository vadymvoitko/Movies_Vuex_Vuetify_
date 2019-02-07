export default {
  methods: {
    addToFavourites(event, id) {
        const uid = this.$store.getters.getUid;
        if (!uid) return;
        let favourites = Cookie.get('favourites') || {};
        if (typeof favourites !== 'object') {
          favourites = JSON.parse(favourites);
        }
        const favouriteByUser = favourites[uid] || [];
        if (event) {
          favouriteByUser && !~favouriteByUser.indexOf(id) && favouriteByUser.push(id)
        } else if (favouriteByUser) {
          favouriteByUser.splice(favouriteByUser.indexOf(id), ~favouriteByUser.indexOf(id) ? 1 : 0)
        }
        favourites[uid] = favouriteByUser;
        Cookie.set('favourites', favourites);
        this.favouritesIds = favouriteByUser ? [...favouriteByUser] : [];
        if (this.getFavourites && this.getFavourites.movies) {
          this.filterMovies();
        }
      },
      checkFavourite(id) {
        return this.favouritesIds && !!this.favouritesIds.includes(id)
      }
  }
}