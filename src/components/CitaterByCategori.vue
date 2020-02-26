<template>
  <div>
    <h2 style="text-align: center">{{katogorinavn}}</h2>
    <ul>
      <Citat v-for="citat of citater" :key="citat._id" :citat="citat" />
    </ul>
  </div>
</template>

<script>
import Axios from "axios";
import Citat from "./Citat";
export default {
  components: {
    Citat
  },
  data() {
    return {
      citater: [],
      katogorinavn: ""
    };
  },
  methods: {
    fetchCitater() {
      Axios.get(
        `http://localhost:5001/citater/getbykat/${this.$route.params.id}`
      ).then(response => {
        this.citater = response.data;
      });
    }
  },
  mounted() {
    this.fetchCitater();
  },
  watch: {
    "$route.params.id"() {
      this.fetchCitater();
    }
  }
};
</script>

<style>
</style>