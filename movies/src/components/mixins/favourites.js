export default {
  methods: {
    addToFavourites(event, id) {
        let favourites = Cookie.get('favourites') || [];
        if (!Array.isArray(favourites)) {
          favourites = JSON.parse(favourites);
        }
        if (event) {
          !~favourites.indexOf(id) && favourites.push(id)
        } else {
          favourites.splice(favourites.indexOf(id), ~favourites.indexOf(id) ? 1 : 0)
        }
        Cookie.set('favourites', favourites)
      },
      checkFavourite(id) {
        return !!this.favouritesIds.includes(id)
      }
  }
}