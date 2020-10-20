<template>
  <div class="beer__list__item item">
    <img :src="itemData.image_url" :alt="itemData.name" />
    <div class="beer__list__item__info info">
      <h4>{{ itemData.name }}</h4> 
      <span><b>Номер в каталоге:</b> {{ itemData.id }}</span>
      <p>{{ itemData.description }}</p>
      <p>{{ itemData.brewers_tips }}</p>
    </div>
    <div class="beer__list__item__actions actions">
      <button><router-link :to="'/details/' + itemData.id">Edit</router-link></button>
      <button @click="deleteItem(index)">Delete</button>
    </div>
  </div>
</template>

<script>
import style from "@/assets/style/BeerItem.css";
import { mapMutations } from "vuex";
export default {
  name: "BeerItem",
  props: {
    itemData: Object,
    index: Number,
  },
  methods: {
      ...mapMutations(["deleteItem"]),
  }
};
</script>

<style></style>
