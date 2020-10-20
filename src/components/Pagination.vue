<template>
  <div class="pagination">
    <button v-if="button.visibility" @click="fetchNextPage()"> {{button.text}}</button>
  </div>
</template>

<script>
import style from "@/assets/style/Pagination.css"
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Pagination",
  computed: {
    ...mapGetters(["button"]),
  },
  methods: {
    ...mapMutations(["fetchNextPage"]),
  },
};
</script>

<style></style>
