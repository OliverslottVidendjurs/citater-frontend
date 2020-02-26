<template>
  <div>
    <h2 style="text-align: center">Alle</h2>
    <ul>
      <Citat v-for="citat of citater" :key="citat._id" :citat="citat" @onDelete="fetchCitater" />
    </ul>
    <UploadImage />
    <UploadImages />
  </div>
</template>

<script>
import Axios from "axios";
import Citat from "./Citat";
import UploadImage from "./UploadImage";
import UploadImages from "./UploadImages";
export default {
  components: {
    Citat,
    UploadImage,
    UploadImages
  },
  data() {
    return {
      citater: []
    };
  },
  methods: {
    fetchCitater() {
      this.citater = Axios.get("http://localhost:5001/citater").then(
        response => (this.citater = response.data)
      );
    }
  },
  mounted() {
    this.fetchCitater();
  }
};
</script>

<style lang="scss" scoped>
ul {
  li {
    margin-bottom: 15px;
  }
}
</style>