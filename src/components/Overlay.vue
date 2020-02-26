<template>
  <div ref="overlay" id="overlay">
    <ul>
      <li v-for="kategori of kategories" :key="kategori._id">
        <router-link
          @click.native="hideOverlay"
          :to="`/kategori/${kategori._id}`"
        >{{kategori.katogorinavn}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  props: {
    showOverlay: Boolean
  },
  data() {
    return {
      kategories: []
    };
  },
  methods: {
    hideOverlay() {
      this.$emit("hideOverlay");
    },
    clickEvent(e) {
      if (this.showOverlay && !this.$refs.overlay.contains(e.target)) {
        this.hideOverlay();
      }
    }
  },
  mounted() {
    Axios.get("http://localhost:5001/kategorier").then(
      response => (this.kategories = response.data)
    );
  },
  beforeDestroy() {},
  watch: {
    showOverlay() {
    //   if (this.showOverlay) {
    //     window.addEventListener("click", this.clickEvent);
    //   } else {
    //     window.removeEventListener("click", this.clickEvent);
    //   }
    }
  }
};
</script>

<style lang="scss" scoped>
#overlay {
  position: absolute;
  background-color: white;
  border: 1px solid black;
  ul {
    list-style: none;
    li {
      a {
        text-decoration: none;
        color: black;
        padding: 8px 10px;
        display: block;
        &:hover {
          background-color: grey;
        }
      }
    }
  }
}
</style>