<template>
  <form @submit.prevent="handleSubmit">
    <input ref="file" type="file" @change="handleChange" />
    <input type="submit" value="send" />
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      file: null
    };
  },
  methods: {
    handleSubmit() {
      if (this.file) {
        const formData = new FormData();
          formData.append(`billede`, this.file);
        axios
          .post("http://localhost:5001/photos/upload", formData)
          .then(response => {
            if (response.status === 200) {
              alert("Sent!");
            }
          });
      } else {
        alert("Du mangler billede");
      }
    },
    handleChange() {
      this.file = this.$refs.file.files[0];
    }
  }
};
</script>

<style>
</style>