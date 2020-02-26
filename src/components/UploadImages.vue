<template>
  <div>
    <!-- <form action="http://localhost:5001/photos/upload" method="post" enctype="multipart/form-data">
      <input type="file" name="billede" />
      <input type="submit" value="send" />
    </form>-->
    <form @submit.prevent="handleSubmit">
      <input ref="file" type="file" @change="handleChange" multiple />
      <input type="submit" value="send" />
    </form>
  </div>
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
      if (this.file?.length) {
        const formData = new FormData();
        for (const file of this.file) {
          formData.append(`billede`, file);
        }

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
      this.file = this.$refs.file.files;
    }
  }
};
</script>

<style>
</style>