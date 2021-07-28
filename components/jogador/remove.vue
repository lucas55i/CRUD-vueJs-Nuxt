<template>
  <v-btn icon>
    <v-icon color="error" @click="remove()" > mdi-delete </v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    remove() {
      this.$store
        .dispatch("deleteJogador", this.id)
        .then(() => {
          this.$emit("jogadorRemovido");
        })
        .catch(err => {
          alert(err);
        });
    }
  }
};
</script>

<style></style>
