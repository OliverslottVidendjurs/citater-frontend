<template>
  <form @submit.prevent="submit" class="container">
    <label for>Titel</label>
    <input ref="titel" v-model="citat.titel" type="text" />
    <label for>Tekst</label>
    <input v-model="citat.citatTekst" type="text" />
    <select v-model="citat.kategori">
      <option disabled value>Vælg kategori</option>
      <option
        v-for="kategori of kategories"
        :key="kategori._id"
        :value="kategori._id"
      >{{kategori.katogorinavn}}</option>
    </select>
    <button>{{$route.params.id ? "Edit" : "Add"}}</button>
  </form>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      citat: {
        titel: "",
        citatTekst: "",
        kategori: ""
      },
      kategories: []
    };
  },
  methods: {
    submit() {
      if (this.$route.params.id) {
        Axios.patch(
          `http://localhost:5001/citater/${this.$route.params.id}`,
          this.citat
        ).then(() => {
          alert("Gemt!");
        });
      } else {
        Axios.post("http://localhost:5001/citater", this.citat).then(() => {
          alert("Oprettet citat!");
          this.citat.titel = "";
          this.citat.citatTekst = "";
        });
      }
    },
    fetchCitat() {
      Axios.get(`http://localhost:5001/citater/${this.$route.params.id}`).then(
        response => {
          this.citat.titel = response.data.titel;
          this.citat.citatTekst = response.data.citatTekst;
          this.citat.kategori = response.data.kategori._id;
        }
      );
    }
  },
  beforeMount() {
    Axios.get("http://localhost:5001/kategorier").then(
      response => (this.kategories = response.data)
    );
    if (this.$route.params.id) {
      this.fetchCitat();
    }
  },
  mounted() {
    this.$refs.titel.focus();
  },
  watch: {
    "$route.params.id"() {
      this.citat.titel = "";
      this.citat.citatTekst = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 10px;
}
label {
  display: block;
}
input {
  margin-bottom: 10px;
  padding: 5px;
}
select {
  display: block;
  margin-bottom: 10px;
  padding: 5px;
}
button {
  padding: 5px 10px;
  font-size: 20px;
  cursor: pointer;
}
</style>