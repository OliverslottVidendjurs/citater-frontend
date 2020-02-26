<template>
  <li>
    <h2>{{citat.titel}}</h2>
    <p>{{citat.citatTekst}}</p>
    <button type="button" @click="redirect">Edit</button>
    <button type="button" @click="deleteCitat">Delete</button>
  </li>
</template>

<script>
import Axios from "axios";
export default {
  props: {
    citat: {
      type: Object,
      required: true
    }
  },
  methods: {
      deleteCitat(){
        Axios.delete(`http://localhost:5001/citater/${this.citat._id}`).then(() => this.$emit("onDelete"));
      },
      redirect(){
          this.$router.push(`/citat/edit/${this.citat._id}`);
      }
  },
  mounted(){
    //   console.log(this.citat);
  }
};
</script>

<style>
</style>