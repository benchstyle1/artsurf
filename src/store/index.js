import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    beer: [],
    page: 1,
    button: {
      visibility: false,
      text: ""
    },
  },
  mutations: {
    fetchNextPage(state) {
      state.page += 1;
      this.commit("setButtonText", "loading");
      this.dispatch("fetchData");
    },
    saveFetchedData(state, payload) {
      state.beer = state.beer.concat(payload);
    },
    deleteItem(state, index) {
      state.beer.splice(index, 1);
    },
    setButtonVisibility(state, payload) {
      state.button.visibility = payload;
    },
    setButtonText(state, payload) {
      state.button.text = payload;
    }
  },
  actions: {
    fetchData(ctx) {
      console.log(ctx.state.page);
      Axios.get(
        "https://api.punkapi.com/v2/beers?page=" +
          ctx.state.page +
          "&per_page=10"
      )
        .then((response) => {
          if (response.data.length > 0) {
            this.commit("saveFetchedData", response.data);
            this.commit("setButtonVisibility", true);
            this.commit("setButtonText", "Show next");
          } else {
            this.commit("setButtonVisibility", false);
          }          
        })
        .catch((error) => console.log(error));
    },
  },
  getters: {
    beer: (state) => {
      return state.beer;
    },
    button: (state) => {
      return state.button;
    },
  },
  modules: {},
});
