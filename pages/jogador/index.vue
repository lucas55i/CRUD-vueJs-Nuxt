<template>
  <v-container>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="4">
        <v-select
          v-model="filter.name"
          :items="jogadores"
          item-value="name"
          item-text="name"
          label="Nome"
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" sm="4">
        <v-select
          v-model="filter.region"
          :items="jogadores"
          label="Pais"
          item-value="region"
          item-text="region"
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" sm="4">
        <v-select
          v-model="filter.clubeAtual"
          :items="jogadores"
          label="Clube Atual"
          item-value="clubeAtual"
          item-text="clubeAtual"
        ></v-select>
      </v-col>
    </v-row>
    <addJogador @jogadorAdicionado="buscarJogadores" />
    <br />
    <v-data-table :headers="headers" :items="jogadores">
      <template v-slot:[`item.delete`]="{ item }">
        <updateJogador
          @jogadorEditado="buscarJogadores"
          :id="item.id"
          :jogador="item"
        />
      </template>

      <template v-slot:[`item.update`]="{ item }">
        <removeJogador @jogadorRemovido="buscarJogadores" :id="item.id" />
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import AddJogador from "../../components/jogador/addJogador.vue";
import Remove from "../../components/jogador/remove.vue";
import updateJogador from "../../components/jogador/updateJogador.vue";

export default {
  components: {
    addJogador: AddJogador,
    removeJogador: Remove,
    updateJogador: updateJogador
  },

  data() {
    return {
      headers: [
        {
          text: "Nome",
          value: "name"
        },
        {
          text: "Pais",
          value: "region"
        },
        {
          text: "Clube Atual",
          value: "clubeAtual"
        },
        {
          text: "Delete",
          value: "delete"
        },
        {
          text: "Editar",
          value: "update",
          
        }
      ],

      filter: {
        name: "",
        region: "",
        clubeAtual: ""
      }
    };
  },
  computed: {
    jogadores() {
      let result = this.$store.state.jogadores;

      if (this.filter.name) {
        result = result.filter(n => n.name === this.filter.name);
      }
      if (this.filter.region) {
        result = result.filter(r => r.region === this.filter.region);
      }
      if (this.filter.clubeAtual) {
        result = result.filter(cA => cA.clubeAtual === this.filter.clubeAtual);
      }
      return result;
    }
  },
  methods: {
    buscarJogadores() {
      this.$store.dispatch("buscarJogadores");
    }
  },

  created() {
    this.buscarJogadores();
  }
};
</script>

<style></style>
