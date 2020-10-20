<template>
  <div id="app">
    <component :is="layout"></component>
  </div>
</template>

<script>
import "normalize.css";
import MainLayout from "@/layouts/MainLayout.vue";

export default {
  components: { MainLayout },
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
};
</script>
