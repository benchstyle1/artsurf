<template>
  <div class="main-layout">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "MainLayout",
  created() {
    this.fetchData();
  },
  methods: {
    ...mapActions(["fetchData"]),
  },
};
</script>

<style></style>
