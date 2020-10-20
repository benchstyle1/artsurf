<template>
  <div class="beer__list list">
    <BeerItem
      v-for="(beerItem, index) in beer"
      :key="beerItem.id"
      :itemData="beerItem"
      :index="index"
    />
  </div>
</template>

<script>
import style from "@/assets/style/BeerList.css"
import { mapGetters, mapActions } from "vuex";
import BeerItem from "@/components/BeerItem.vue";

export default {
  name: "BeerList",
  components: {
    BeerItem,
  },
  computed: {
    ...mapGetters(["beer"]),
  },
};
</script>

<style></style>
