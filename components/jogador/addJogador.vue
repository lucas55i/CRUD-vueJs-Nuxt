<template>
  <v-container>
    <!-- Dialog Add Group -->
    <v-row class="row" justify="end">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn class="mx-2" fab dark v-on="on" color="primary">
            <v-icon dark> mdi-plus </v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Adicionar Grupo</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="addGroupForm">
              <v-text-field
                label="Nome"
                v-model="newPlayer.name"
                clearable
              ></v-text-field>
              <v-text-field
                label="Pais"
                v-model="newPlayer.region"
                clearable
              ></v-text-field>
              <v-text-field
                label="Clube Atual"
                v-model="newPlayer.clubeAtual"
                clearable
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="dialog = false"> Fechar </v-btn>
            <v-btn color="primary" @click="addJogador()"> Cadastrar </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,

      newPlayer: {
        id: null,
        name: "",
        region: "",
        clubeAtual: ""
      }
    };
  },

  methods: {
    addJogador() {
      this.$store
        .dispatch("addJogador", this.newPlayer)
        .then(() => {
          this.dialog = false;
          this.$emit("jogadorAdicionado");
          this.newPlayer = {
            name: "",
            region: "",
            clubeAtual: ""
          };
        })
        .catch(err => {
          alert(err);
        });
    }
  }
};
</script>

<style></style>
