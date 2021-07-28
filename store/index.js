import jogadorServices from "../core/services/jogador-services";

export const state = () => ({
  jogadores: []
});

export const mutations = {
  setJogadores(state, jogadores) {
    state.jogadores = jogadores;
  }
};

export const actions = {
  buscarJogadores({ commit }) {
    return jogadorServices
      .getAll()
      .then(response => {
        commit("setJogadores", response.data);
      })
      .catch(err => {
        alert(err);
      });
  },

  addJogador(context, jogador) {
    return jogadorServices.addJogador(jogador);
  },

  updateJogador(context, jogador) {
    return jogadorServices.updateJogador(jogador);
  },

  deleteJogador(context, jogador) {
    return jogadorServices.deleteJogador(jogador);
  }
};
