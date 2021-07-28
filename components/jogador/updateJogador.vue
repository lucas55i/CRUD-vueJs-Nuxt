<template>
  <v-container>
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
            <v-form >
              <v-text-field
                label="Nome"
                v-model="editPlayer.name"
                clearable
              ></v-text-field>
              <v-text-field
                label="Pais"
                v-model="editPlayer.region"
                clearable
              ></v-text-field>
              <v-text-field
                label="Clube Atual"
                v-model="editPlayer.clubeAtual"
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
    props:{
        id:{
            type: Number,
            required: true,
        },
        jogador: {
            type: Object,
            required: true,
        }
    },
    data(){
        return{
            dialog:false,

            editPlayer:{
                name:"",
                region: "",
                clubeAtual: ""
            }
        }
    },

    methods:{
        openDialog() {
            this.dialog = true;
        },

        updatePlayer(){
            this.$store.dispatch('updateJogador', {...this.editPlayer})
            .then(() => {
                this.dialog = false;
                this.$emit('jogadorEditado')
            })
            .catch((err) => {
                alert(err);
            })
        }
    }

}
</script>

<style>

</style>