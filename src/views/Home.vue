<template>
  <div class="home">
    <BeerList />
    <Pagination />
  </div>
</template>

<script>
import BeerList from "@/components/BeerList.vue";
import Pagination from "@/components/Pagination.vue";
export default {
  name: "Home",
  components: {
    BeerList,
    Pagination,
  },
};
</script>
