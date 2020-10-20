<template>
  <div class="details">
    <div class="details__item">
      <img :src="itemData.image_url" :alt="itemData.name" />
      <div class="details__item_info">
        <span><strong>Название:</strong></span>
        <input type="text" v-model="itemData.name">
        <span><b>Номер в каталоге:</b> {{ itemData.id }}</span>
        <span><b>Описание:</b></span>
        <textarea rows="7" cols="50" v-model="itemData.description"> </textarea>
        <span><b>Советы пивоваров:</b> {{ itemData.brewers_tips }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import style from "@/assets/style/Details.css"

export default {
  computed: {
    ...mapGetters(["beer"]),
    itemData: function() {  
      return this.beer.find(item => item.id == this.$route.params.id)
    }
  }
};
</script>

<style></style>
