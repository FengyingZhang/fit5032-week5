<script>
//import JSONLab from './components/JSONLab.vue'
import { computed } from 'vue';
import BHeader from './components/BHeader.vue';
import CountBookAPI from './views/CountBookAPI.vue';
//import LibraryRegistrationForm from './views/HomeView.vue'

export default {
  name: 'App',
  components: {
    BHeader,
    CountBookAPI
  },
  computed: {
    showHeader() {
      return this.$route.name !== 'CountBookAPI';
    }
  }
};
</script>

<template>
  <div class="main-container">
    <header v-if="showHeader">
      <BHeader />
    </header>

    <main class="main-box">
      <!-- <LibraryRegistrationForm /> -->
      <!-- <JSONLab /> -->
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.main-box {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
  /* background-color: #e0bfbf; */
  border-radius: 10px;
}
</style>
