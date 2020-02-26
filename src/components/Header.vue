<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <button @click="showOverlay = !showOverlay">Kategorier</button>
          <Overlay :showOverlay="showOverlay" @hideOverlay="showOverlay = false" v-show="showOverlay" />
        </li>
        <li>
          <router-link to="/citat/add">Add Citat</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Overlay from "./Overlay";
export default {
  data(){
    return {
      showOverlay: false
    }
  },
  components: {
    Overlay
  }
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  /* justify-content: space-between; */
  list-style: none;
  align-items: center;
  background-color: grey;
  height: 40px;
  li {
    position: relative;
    margin-left: 20px;
    height: 100%;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: black;
      height: 100%;
    }
  }
}
button {
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  height: 100%;
}
</style>